function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Mostra a seção no console para fins de depuração (pode ser removido em produção)
    console.log(section);
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      // Cria uma nova div para cada resultado
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    }
  
    // Atualiza o conteúdo HTML da seção com os resultados
    section.innerHTML = resultados;
  }