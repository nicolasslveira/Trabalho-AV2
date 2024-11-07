let nomeUsuário = "Pedro";
let idadeAtual = 25;
let inatividadeUsuario = true;

function dU(nomeUsuário, idadeAtual, inatividadeUsuario) {
    if (inatividadeUsuario) {
        console.log(nomeUsuário + " tem " + idadeAtual + " anos e está ativo.");
    } else {
        console.log(nomeUsuário + " está inativo.");
    }
}

dU(nomeUsuário, idadeAtual, inatividadeUsuario);