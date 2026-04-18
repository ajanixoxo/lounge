import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  // Only allow this route to work in development mode
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ success: false, error: "Local saving is disabled in production." }, { status: 403 });
  }

  try {
    const newMenuData = await req.json();
    const filePath = path.join(process.cwd(), "data", "menu.json");

    // Format the JSON nicely with 2 spaces and save it locally
    const jsonContent = JSON.stringify(newMenuData, null, 2);
    await fs.writeFile(filePath, jsonContent, "utf-8");

    return NextResponse.json({ success: true, message: "Saved locally! Your preview reflects the new content." });
  } catch (error: any) {
    console.error("Failed to save locally:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to save file to disk." },
      { status: 500 }
    );
  }
}
