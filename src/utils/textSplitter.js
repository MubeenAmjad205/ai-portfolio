import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export const splitText = async (text) => {
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200
  });
  return textSplitter.createDocuments([text]);
};