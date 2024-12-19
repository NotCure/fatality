import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    // Path to the DLL file (assume it's in the "public" folder)
    const dllPath = path.join(process.cwd(), "public", "dlls", "inject.dll");

    // Read the DLL file as a binary buffer
    const fileBuffer = await fs.readFile(dllPath);

    // Set headers for binary file download
    const headers = new Headers({
      "Content-Type": "application/octet-stream",
      "Content-Disposition": "attachment; filename=inject.dll",
    });

    // Return the file buffer as the response body
    return new NextResponse(fileBuffer, { headers });
  } catch (error) {
    console.error("Error serving DLL file:", error);
    return new NextResponse("File not found", { status: 404 });
  }
}
