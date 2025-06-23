import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function DELETE(request: Request) {
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

    const url = new URL(request.url);
    const project = url.pathname.split("/").pop();

    if (!project) {
        return NextResponse.json({ error: "ID do projeto não fornecido" }, { status: 400 });
    }

    try {
        await prisma.project.delete({
            where: { id: project },
        });
        return NextResponse.json({ message: "Projeto excluído com sucesso" }, { status: 200 });
    } catch (error) {
        console.error("Erro ao excluir projeto:", error);
        return NextResponse.json({ error: "Erro ao excluir projeto" }, { status: 500 });
    }
}