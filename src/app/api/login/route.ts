import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

type TokenPayload = {
  admin: boolean;
  iat?: number;
  exp?: number;
}

export async function POST(request: NextRequest) {
  try {
    const { user, password } = await request.json() || {};

    const username = user?.toLowerCase();

    if (!username || !password) {
      return new Response(JSON.stringify({ error: "Usuário e senha são obrigatórios" }), { status: 400 });
    }

    if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD || !process.env.JWT_SECRET) {
      return new Response(JSON.stringify({ error: "Configuração do ambiente não está completa" }), { status: 500 });
    }

    if (username === process.env.ADMIN_USERNAME.toLocaleLowerCase() && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(
        { admin: true }, 
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return new Response(JSON.stringify({ success: true, authToken: token }), { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': `authToken=${token}; HttpOnly; Path=/; Max-Age=3600`
        }
      });
    }
    
    return new Response(JSON.stringify({ error: "Credenciais inválidas" }), { status: 401 });
  } catch (error) {
    console.error("Erro ao processar a requisição de login:", error);
    return new Response(JSON.stringify({ error: "Erro ao processar a requisição de login" }), { status: 400 });
  }
}

export async function GET(request: NextRequest) {
  try {
   
    const token = request.cookies.get("authToken")?.value;

    if (!token) {
      return new Response(JSON.stringify({ error: "Token não fornecido" }), { status: 401 });
    }

    if (!process.env.JWT_SECRET) {
      return new Response(JSON.stringify({ error: "Configuração do ambiente não está completa" }), { status: 500 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as TokenPayload;

    if (decoded && decoded.admin) {
      return new Response(JSON.stringify({ success: true, token }), { status: 200 });
    }

    return new Response(JSON.stringify({ error: "🖐️🧐 Para com essas peripécia" }), { status: 403 });
  } catch (error) {
    console.error("Erro ao verificar o token:", error);
    return new Response(JSON.stringify({ error: "Token inválido ou expirado" }), { status: 401 });
  }
}