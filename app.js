function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase()
  
    // se campoPesquisa for uma string sem nada
    if (campoPesquisa === "") {
      section.innerHTML = "<p>Por favor, digite o nome de um livro ou personagem da Saga Crepúsculo.</p>"
      return
    }
  
    let resultados = "";
  
    // para cada dado dentro da lista de dados
    for (let dado of dados) {
      const { titulo, autor, sinopse, dataLancamento, tags } = dado;
      const textoParaPesquisar = `${titulo} ${autor} ${sinopse} ${dataLancamento} ${tags}`.toLowerCase();
  
      if (textoParaPesquisar.includes(campoPesquisa)) {
        resultados += `
          <div class="item-resultado">
            <h2>${titulo}</h2>
            <p><strong>Autor:</strong> ${autor}</p>
            <p><strong>Lançamento:</strong> ${dataLancamento}</p>
            <p>${sinopse}</p>
          </div>
        `;
      }
    }
  
    if (!resultados) {
      resultados = "<p>Nenhum resultado encontrado para a sua pesquisa.</p>"
    }
  
    section.innerHTML = resultados
  }

// console.log(dados);

