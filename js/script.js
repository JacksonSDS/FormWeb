import { Dados } from "./dados.js";

const limparFormulario = (endereco) =>{
    document.getElementById('cep').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('numero').value = '';
}

const preencherFormulario = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {   
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado!';
        }else {
            preencherFormulario(endereco);
        }
    }else{
        document.getElementById('endereco').value = 'CEP incorreto!';
    }
     
}

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);

const validarFormulario = () => {
    const campos = ['endereco', 'bairro', 'cidade', 'estado', 'nome', 'email'];
    for (let campo of campos) {
        if (!document.getElementById(campo).value) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return false;
        }
    }
    return true;
    }
        
    btn.addEventListener('click', async function() {
        if (validarFormulario()) {
            await pesquisarCep();
            Dados();
            limparFormulario();
            alert('Formulário enviado!');
        }
    });

