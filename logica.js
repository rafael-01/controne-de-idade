function entraSite() {
    var nome = document.querySelector('#nome').value;
    var sobrenome = document.querySelector('#sobrenome').value;
    var idade = document.querySelector('#idade').value;

    if (idade < 18) {
        alert(`${nome.toUpperCase()} ${sobrenome.toUpperCase()} sua mãe vai ficar sabendo o que você está tentando acessar.`);
    } else {
        alert(`${nome.toUpperCase()} ${sobrenome.toUpperCase()} Bem vindo ao nosso website`);
    }

}