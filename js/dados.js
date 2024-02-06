export async function Dados() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('endereco').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;

    await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        email: email,
        cep: cep,
        rua: rua,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert('Dados salvos com sucesso no JSON Server!');
      limparFormulario(); // Limpar formulário após envio bem-sucedido, se desejado.
    })
    .catch(error => {
      console.error('Erro ao enviar dados para o JSON Server:', error);
      alert('Erro ao salvar os dados no JSON Server.');
    });
  } 