import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const stages = await request.json();  // Array of { title, instructions, timer, answer }
        const createdStages = await prisma.stage.createMany({ data: stages });
        return NextResponse.json({ message: "Stages saved", count: createdStages.count });
    } catch (error) {
        console.error("Error saving stages:", error);
        return NextResponse.json({ error: "Failed to save stages" }, { status: 500 });
    }
}