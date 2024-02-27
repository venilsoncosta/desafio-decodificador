function testRegex(textInput) {
    const regex = /^[a-z]+$/;
    return regex.test(textInput);
}

// Função para realizar a criptografia
function criptografia(mensagem) {
    const resultado = mensagem
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');

    return resultado;
}

// Função para realizar a descriptografia
function descriptografia(mensagem) {
    const resultado = mensagem
        .replaceAll(/ufat/g, 'u')
        .replaceAll(/ober/g, 'o')
        .replaceAll(/ai/g, 'a')
        .replaceAll(/imes/g, 'i')
        .replaceAll(/enter/g, 'e');

    return resultado;
}

// Função para copiar o texto para a área de transferência
function copiarTexto() {
    const textoCopiado = document.getElementById("text_output").textContent;
    navigator.clipboard.writeText(textoCopiado);
}

// Função para configurar o texto de saída e exibir os elementos apropriados
function setOutputText(text) {
    if (!text) {
        return false;
    }
    document.getElementById("output_default").classList.add("desactive");
    document.getElementById("output_default_txt").classList.remove("desactive");
    document.getElementById("copiar").classList.remove("desactive");
    document.getElementById("text_output").innerText = `${text}`;
}

// Função principal para execução da criptografia ou descriptografia
function processarTexto(operacao) {
    const textInput = document.querySelector('.codificador__digitar__titulo').value.toLowerCase();

    if (!testRegex(textInput)) {
        alert("O texto deve conter apenas letras minúsculas.");
        return;
    }

    const resultado = operacao === 'criptografia' ? criptografia(textInput) : descriptografia(textInput);

    setOutputText(resultado);
}

// Event listeners para os botões
document.getElementById("criptografia").addEventListener("click", () => {
    processarTexto('criptografia');
});

document.getElementById("descriptografia").addEventListener("click", () => {
    processarTexto('descriptografia');
});

document.getElementById("copiar").addEventListener("click", copiarTexto);