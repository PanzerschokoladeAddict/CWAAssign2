// frontend/app/api/stages/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Path to api/lib/prisma.tsx

export async function POST(request: Request) {
    try {
        const { title, instructions, timer, answer } = await request.json();
        const stage = await prisma.stage.create({
            data: { title, instructions, timer, answer },
        });
        return NextResponse.json({ message: "Stage saved", stage });
    } catch (error) {
        console.error("Error saving stage:", error);
        return NextResponse.json({ error: "Failed to save stage" }, { status: 500 });
    }
}