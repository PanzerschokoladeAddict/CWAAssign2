// frontend/app/api/stages/bulk/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Path to api/lib/prisma.tsx

export async function POST(request: Request) {
    try {
        const stages = await request.json();
        const createdStages = await prisma.stage.createMany({ data: stages });
        return NextResponse.json({ message: "Stages saved", count: createdStages.count });
    } catch (error) {
        console.error("Error saving stages:", error);
        return NextResponse.json({ error: "Failed to save stages" }, { status: 500 });
    }
}