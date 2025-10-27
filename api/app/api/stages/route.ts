import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const { title, instructions, timer, answer } = await request.json();
        const stage = await prisma.stage.create({
            data: { title, instructions, timer, answer },
        });
        return NextResponse.json({ message: "Stage saved", stage }, {
            headers: {
                "Access-Control-Allow-Origin": "*",  // Fix CORS
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
        });
    } catch (error) {
        console.error("Error saving stage:", error);
        return NextResponse.json({ error: "Failed to save stage" }, {
            status: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
        });
    }
}

export async function GET() {
    try {
        const stages = await prisma.stage.findMany();
        return NextResponse.json(stages, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
        });
    } catch (error) {
        console.error("Error fetching stages:", error);
        return NextResponse.json({ error: "Failed to fetch stages" }, {
            status: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
        });
    }
}

// OPTIONS for preflight (browser sends before POST/GET)
export async function OPTIONS() {
    return new NextResponse(null, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    });
}