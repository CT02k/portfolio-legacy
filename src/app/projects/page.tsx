export default function Page() {
    return (
      <main className="content">
        <section className="main">
          <h1>Projetos<span>*</span></h1>
          <p>Conheça alguns dos projetos que desenvolvi</p>
          <div className="project-group">
            <a href="https://rayssa.xyz?ref=ct02.work">         
              <div className="project">
                <img src="https://rayssa.xyz/discover.png" alt="Rayssa" />
                <div className="text">
                    <h2>Rayssa</h2>
                    <p>Site para um bot de parcerias do Discord que mostra uma lista de servidores que a usam e outras funções.</p>
                </div>
              </div>
            </a>
            <hr />
            <a href="https://parroturl.vercel.app/">         
              <div className="project">
                <img src="https://parroturl.vercel.app/green_parrot.gif" alt="Parrot" />
                <div className="text">
                    <h2>Parrot URL</h2>
                    <p>Encurtador de URLs com um papagaio (do minecraft) que dança, sim.</p>
                </div>
              </div>
            </a>
            <hr />
            
          </div>
        </section>
      </main>
    );
  }
  