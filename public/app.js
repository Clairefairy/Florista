async function buscarFlor() {
    const nomeFlor = document.getElementById('nomeFlor').value.trim();
    const resultadoDiv = document.getElementById('resultado');

    if (!nomeFlor) {
        // Quando o campo de pesquisa está vazio, mostrar todas as flores
        resultadoDiv.innerHTML = 'Carregando...';
        
        try {
            const response = await fetch('http://localhost:3000/api/flores');
            if (response.ok) {
                const flores = await response.json();
                resultadoDiv.innerHTML = flores.map(flor => `
                    <div class="flor">
                        <h3>${flor.nome}</h3>
                        <img src="${flor.imagem}" alt="${flor.nome}" style="width: 100%; max-width: 200px; height: auto;">
                        <p><strong>Nome Científico:</strong> ${flor.nomeCientifico}</p>
                        <p><strong>Linguagem das Flores:</strong> ${flor.linguagem}</p>
                    </div>
                `).join('');
            } else {
                resultadoDiv.innerHTML = 'Erro ao buscar flores.';
            }
        } catch (error) {
            resultadoDiv.innerHTML = 'Erro ao buscar flores. Tente novamente mais tarde.';
        }
    } else {
        // Quando o campo de pesquisa não está vazio, buscar uma flor específica
        resultadoDiv.innerHTML = 'Carregando...';

        try {
            const response = await fetch(`http://localhost:3000/api/flores/${nomeFlor.toLowerCase()}`);
            if (response.ok) {
                const flor = await response.json();
                resultadoDiv.innerHTML = `
                    <h3>${flor.nome}</h3>
                    <img src="${flor.imagem}" alt="${flor.nome}" style="width: 100%; max-width: 200px; height: auto;">
                    <p><strong>Nome Científico:</strong> ${flor.nomeCientifico}</p>
                    <p><strong>Linguagem das Flores:</strong> ${flor.linguagem}</p>
                `;
            } else {
                resultadoDiv.innerHTML = 'Flor não encontrada.';
            }
        } catch (error) {
            resultadoDiv.innerHTML = 'Erro ao buscar a flor. Tente novamente mais tarde.';
        }
    }
}
