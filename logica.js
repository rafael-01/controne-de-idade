function entraSite() {
    var nome = document.querySelector('#nome').value;
    var sobrenome = document.querySelector('#sobrenome').value;
    var idade = document.querySelector('#idade').value;

    if (idade < 18) {
        alert(`${nome.toUpperCase()} ${sobrenome.toUpperCase()} sua mãe vai ficar sabendo o que você está tentando acessar.`);
    } else {
        document.write(`${nome.toUpperCase()} ${sobrenome.toUpperCase()} aaaaaaa achou que era um site de sacanegem né!!!!!, foi apenas um programinha que desenvolvi.
        Coloque uma idade abaixo de 18 para ver o que acontece e compartilhe com seus amigos. Abç: Rafael simas`);
    }

}