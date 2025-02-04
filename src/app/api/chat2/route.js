import { ChatGoogleGenerativeAI } from "@langchain/google-genai";  
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";  
import { Pinecone } from "@pinecone-database/pinecone";  
import { PineconeStore } from "@langchain/pinecone";  
import { v4 as uuidv4 } from 'uuid';   
import { NextResponse } from "next/server";

const conversationMemory = {};   

export async function POST(request) {  
    try {  
        const { message, threadId } = await request.json();  

        const currentThreadId = threadId || uuidv4();  

        if (!message) {  
            return Response.json(  
                { success: false, error: "Message is required" },  
                { status: 400 }  
            );  
        }  

        const pinecone = new Pinecone({  
            apiKey: process.env.PINECONE_API_KEY,  
        });  
        const indexName = process.env.PINECONE_INDEX;  
        const pineconeIndex = pinecone.Index(indexName);  

        const embeddings = new GoogleGenerativeAIEmbeddings({  
            apiKey: process.env.GEMINI_API_KEY,  
            modelName: "embedding-001",  
        });  

        const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {  
            pineconeIndex,  
            textKey: "text",  
            namespace: "portfolio-data",  
        });  

        const previousContext = conversationMemory[currentThreadId] || [];  
        
        const results = await vectorStore.similaritySearch(message, 3);  
        console.log("Results:", results);  

        const model = new ChatGoogleGenerativeAI({  
            apiKey: process.env.GEMINI_API_KEY,  
            temperature: 0.5,  
            modelName: "gemini-1.5-flash",  
        });  

        const prompt = `   
Be a helpful and friendly assistant.
if the user uses a greeting, respond with a greeting.
if the user uses pronouns like "his" or "he", it means Mubeen Amjad.
The pronouns 'he' and 'his' are used to refer to Mubeen Amjad. 
If the user asks for contact information, provide more than one way to contact Mubeen Amjad.  
If the user asks how can you help me? answer this way: "I am a helpful assistant. I can help you find information about Mubeen Amjad and his work."  
You are a helpful assistant. You can assist in finding information about Mubeen Amjad and his work.  
You will answer queries about Mubeen Amjad very humanly, professionally, and cautiously.  
You are knowledgeable about Mubeen Amjad and his work.  
You can retrieve relevant information from a database.  
If you do not have enough information, please provide contact info and suggest contacting Mubeen Amjad directly.  

Please respond to the following message in a concise and professional manner:  

Based on the following context:  
${results.map(r => r.pageContent).join("\n")}  
Previous conversation context:  
${previousContext.join("\n")}  

Also, check additional resources if necessary:  
Answer this question: ${message}  

If you do not have enough information, state that clearly.  
`;  
        console.log("invoke model");
        
        const response = await model.invoke(prompt);  

        conversationMemory[currentThreadId] = [...previousContext, `User: ${message}`, `Assistant: ${response}`]; // Store both user and assistant messages  
        console.log("response / ", response.content);
        
        return NextResponse.json({  
            success: true,  
            threadId: currentThreadId, 
            response: response.content,  
        });  

    } catch (error) {  
        console.error("Chat Error:", error);  
        return NextResponse.json(  
            {  
                success: false,  
                error: error.message,  
            },  
            { status: 500 }  
        );  
    }  
}