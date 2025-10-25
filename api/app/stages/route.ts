import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
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

export async function GET() {
    try {
        const stages = await prisma.stage.findMany();
        return NextResponse.json(stages);
    } catch (error) {
        console.error("Error fetching stages:", error);
        return NextResponse.json({ error: "Failed to fetch stages" }, { status: 500 });
    }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const { title, instructions, timer, answer } = await request.json();
        const stage = await prisma.stage.update({
            where: { id: parseInt(id) },
            data: { title, instructions, timer, answer },
        });
        return NextResponse.json({ message: "Stage updated", stage });
    } catch (error) {
        console.error("Error updating stage:", error);
        return NextResponse.json({ error: "Failed to update stage" }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        await prisma.stage.delete({ where: { id: parseInt(id) } });
        return NextResponse.json({ message: "Stage deleted" });
    } catch (error) {
        console.error("Error deleting stage:", error);
        return NextResponse.json({ error: "Failed to delete stage" }, { status: 500 });
    }
}