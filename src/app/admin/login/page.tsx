"use client";

import "./style.css";

import React from "react";

import { useState } from "react";

export default function Login() {
    const [statusMessage, setStatusMessage] = useState<{ type: "error" | "success" | null, text: string | null }>({ 
        type: null, 
        text: null 
    });

    async function requestLogin(username: string, password: string) {
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user: username, password }),
            });

            if (!response.ok) {
                throw new Error("Login falhou");
            }

            const data = await response.json();
            if (!data.success) {
                throw new Error(data.error || "Erro desconhecido");
            }
            setStatusMessage({ type: "success", text: "Login realizado com sucesso" });
            window.location.href = "/admin";
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            setStatusMessage({ type: "error", text: "Erro ao fazer login" });
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;
        requestLogin(username, password);
    }

    return (
        <main className="login">
            <section className="login-form">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Usuário</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </section>
            {
                statusMessage.text && (
                    <div className={`${statusMessage.type}-message`}>
                        <p>{statusMessage.text}</p>
                    </div>
                )
            }
        </main>
    );
}
