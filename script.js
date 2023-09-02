const resultado = document.getElementById("resultado");
const botaoFetch = document.getElementById("botaoFetch");

botaoFetch.addEventListener('click', () => {
    resultado.innerHTML = '';

    fetch("https://swapi.dev/api/people/")
        .then((res) => res.json())
        .then((data) => {
            const personagens = data.results;
            const personagemAleatorio = personagens[Math.floor(Math.random() * personagens.length)];

            resultado.innerHTML =
                `<h2>${personagemAleatorio.name}</h2>` +
                `<p>Massa: ${personagemAleatorio.mass}</p>` +
                `<p>Cor da Pele: ${personagemAleatorio.skin_color}</p>` +
                `<p>Cor dos Olhos: ${personagemAleatorio.eye_color}</p>` +
                `<p>Ano de Nascimento: ${personagemAleatorio.birth_year}</p>` +
                `<p>Gênero: ${personagemAleatorio.gender}</p>`;
        })
        .catch((error) => {
            console.error(error);
        });
});
