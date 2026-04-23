// src/main/webapp/js/script.js

function confirmarAcao(acao, nomeUsuario) {
    // Exibe um pop-up de confirmação no navegador
    var mensagem = "Tem certeza que deseja " + acao.toLowerCase() + " o usuário '" + nomeUsuario + "'?";
    return confirm(mensagem);
}