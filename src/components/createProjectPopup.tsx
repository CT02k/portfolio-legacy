"use client";

import "./css/createProjectPopup.css";

import { useState } from "react";

export default function CreateProjectPopup() {
  const [ popupOpen, setPopupOpen ] = useState(false);
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ href, setHref ] = useState("");
  const [ tags, setTags ] = useState<string[]>([]);
  const [ tagInput, setTagInput ] = useState("");
  const [ token, setToken ] = useState<string | null>(localStorage.getItem("token"));

  const [ statusMessage, setStatusMessage ] = useState<{ type: "error" | "success" | null, text: string | null }>({ 
    type: null, 
    text: null 
  });
  
  const buttonText = "Criar Projeto";

  const fetchToken = async () => {
    const response = await fetch("/api/login");
    if (!response.ok) {
      console.error("Erro ao buscar token");
      return null;
    }
    const data = await response.json();
    setToken(data.token);
    return data.token;
  }
  
  fetchToken().catch(error => {
    console.error("Erro ao buscar token:", error);
    setStatusMessage({ type: "error", text: "Erro ao buscar token" });
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token || ""}`,
        },
        body: JSON.stringify({
          title,
          description,
          href,
          tags,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar projeto");
      }

      const data = await response.json();

      setStatusMessage({ type: "success", text: `Projeto "${data.title}" criado com sucesso!` });
    } catch (error) {
      console.error("Erro ao criar projeto:", error);
      setStatusMessage({ type: "error", text: "Erro ao criar projeto" });
    }
  };

  const handleTagInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(event.target.value);
  };

  const handleAddTag = (event: React.FormEvent) => {
    event.preventDefault();
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="create-project-popup">
      <button onClick={() => setPopupOpen(true)}>{buttonText}</button>
      {popupOpen && (
        <div className="popup-content">
          <form onSubmit={handleSubmit}>
            <h2>Criar Projeto</h2>
            <div className="input-group">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="href">Link</label>
              <input
                type="text"
                id="href"
                value={href}
                onChange={(e) => setHref(e.target.value)}
                required
              />
            </div>
            <div className="input-group tags-input">
              <label>Tags</label>
              <div className="tags-container">
                {tags.map((tag, index) => (
                  <span key={index} className="tag">
                    <button type="button" onClick={() => handleRemoveTag(tag)} className="tag">{tag} <span className="delete">x</span></button>
                  </span>
                ))}
              </div>
<div onKeyDown={(e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleAddTag(e as React.KeyboardEvent);
  }
}} className="flex">
  <input
    type="text"
    value={tagInput}
    onChange={handleTagInputChange}
    placeholder="Adicionar tag"
  />
  <button type="button" onClick={handleAddTag} className="h-full ml-2">Adicionar</button>
</div>
            </div>
            {statusMessage.text && (
              <p className={`status-message ${statusMessage.type}`}>
                {statusMessage.text}
              </p>
            )}
            <div className="space-x-2">
              <button type="submit">Criar Projeto</button>
              <button className="close-popup" onClick={() => setPopupOpen(false)}>Cancelar</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
