function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao( notas ) {

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursivas

function contagemRegressiva(numero){

    console.log(numero);  
    
    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);

}

// contagemRegressiva(50);

/* 
 * Formulário envio de dados para cálculo da média 
 */
const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit', function( evento ){

        evento.preventDefault();
        evento.stopPropagation();

        if( this.getAttribute('class').match(/erro/) ) {
            return false;
        }
        let dados = new FormData(this);

        let notas = [];

        for(let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if(!isNaN(numero)) {
                notas.push(numero);
            }

        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;

    });


function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let numeroValido = /^([0-9]{5})[-]?([0-9]{3})$/;
        let numero = document.getElementsByClassName("numero");

        if(numero.value != "" && this.value.match(numeroValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

function validaTelefone(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let telefoneValido = /^\(?([0-9]{2})\)?[\s]?([0-9]{5})[-]?([0-9]{4})$/;
        let telefone = document.getElementsByClassName("telefone");

        if(telefone.value != "" && this.value.match(telefoneValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
        }

    });

}


function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        const submitBtn = document.getElementById('submitBtn');
        if(this.value != "" && this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            submitBtn.removeAttribute('disabled', 'disabled');   
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            submitBtn.setAttribute('disabled');   
            return false;
        }
    });

}

function validaUf(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        let ufValido = /[a-z]+[a-z]/i;
        if(this.value.match(ufValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

 

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposTelefone = document.querySelectorAll('input.telefone');
let camposEmail = document.querySelectorAll('input.email');
let camposUf = document.querySelectorAll('input.uf');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposTelefone) {
    validaTelefone(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for( let emFoco of camposUf) {
    validaUf(emFoco);
}
