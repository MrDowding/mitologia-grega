function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";

    // Itera sobre cada objeto (deus) dentro do array 'dados'
    for (let dado of dados) {
      // Concatena o HTML de cada resultado à string 'resultados'
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
        `;
    }
    // Atribui o conteúdo HTML gerado à seção de resultados
    section.innerHTML = resultados;
}