export default function Page() {
    return (
      <main className="content">
        <section className="main">
          <h1>Projetos<span>*</span></h1>
          <p>Conheça alguns dos projetos em destaque que desenvolvi.</p>
          <div className="project-group">
            <a href="https://rayssa.xyz?ref=ct02.work">         
              <div className="project">
                <img src="https://rayssa.xyz/discover.png" alt="Rayssa" />
                <div className="text">
                    <h2>Stellar (Discover)</h2>
                    <p>Site para um bot de parcerias do Discord que mostra uma lista de servidores que a usam e outras funções.</p>
                    <div className="tags">
                      <span>Next.js</span>
                      <span>React</span>
                      <span>TypeScript</span>
                      <span>TailwindCSS</span>
                    </div>
                </div>
              </div>
            </a>
            <hr />
            <a href="https://ct02.work">         
              <div className="project">
                <img src="https://ct02.work/CT02.png" alt="CT02" />
                <div className="text">
                  <h2>Portfolio</h2>
                  <p>Meu site pessoal, onde você está agora, com informações sobre mim e meus projetos.</p>
                  <div className="tags">
                      <span>Next.js</span>
                      <span>React</span>
                      <span>TypeScript</span>
                      <span>TailwindCSS</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>
    );
  }
  