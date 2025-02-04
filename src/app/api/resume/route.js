import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
    try {
        // Define the file path in the public directory
        const filePath = path.join(process.cwd(), "public", "Mubeen_Amjad_Resume.pdf");

        // Read the file
        const fileBuffer = await fs.readFile(filePath);

        // Return the PDF as a response
        return new NextResponse(fileBuffer, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": "inline; filename=Mubeen_Amjad_Resume.pdf",
            },
        });
    } catch (error) {
        return NextResponse.json({ error: "File not found" }, { status: 404 });
    }
}
