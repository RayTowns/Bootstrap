contactForm.addEventListener("input", () {
    if(primeiroNome.value.length > 0 && meuEmail.value.length > 0) {
        submitBtn.removeAttribute("disabled");
    } else {
        submitBtn.setAttribute("disabled", "disabled");
    }
});

const telefone = document.getElementsByName("telefone");

function validaTelefone(elemento){
    let telefoneValido = /[0-9]/;
    telefone.addEventListener("onblur", (event) => {
        if(telefone.value.match(telefoneValido)) {
            return valid;
        } else {
            return invalid;
        }
    });
}