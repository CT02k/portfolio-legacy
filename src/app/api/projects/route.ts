import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const authorizationHeader = request.headers.get("Authorization");
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        return NextResponse.json({ error: "Token de autenticação não fornecido" }, { status: 401 });
    }

    const token = authorizationHeader.split(" ")[1];

    if (!token) {
        return NextResponse.json({ error: "Token de autenticação não fornecido" }, { status: 401 });
    }

    if (!process.env.JWT_SECRET) {
        console.error("JWT_SECRET environment variable is not set");
        return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
    }

    const verify = jwt.verify(token, process.env.JWT_SECRET);

    if (!verify || typeof verify !== "object" || !verify.admin) {
        return NextResponse.json({ error: "Acesso não autorizado" }, { status: 403 });
    }
    
    try {
        const { href, title, description, tags } = await request.json();

        if (!href || !title || !description || !tags) {
            return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 });
        }

        const newProject = await prisma.project.create({
            data: {
                href,
                title,
                description,
                tags: {
                    set: tags,
                },
            },
        });

        return NextResponse.json(newProject, { status: 201 });
    } catch (error) {
        console.error("Erro ao criar projeto:", error);
        return NextResponse.json({ error: "Erro ao criar projeto" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const projects = await prisma.project.findMany();
        return NextResponse.json(projects);
    } catch (error) {
        console.error("Erro ao buscar projetos:", error);
        return NextResponse.json({ error: "Erro ao buscar projetos" }, { status: 500 });
    }
}
