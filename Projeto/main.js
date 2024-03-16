const form = document.getElementById('form_')

document.getElementById('form_').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const num_1 = parseInt(document.getElementById('num1').value);
    const num_2 = parseInt(document.getElementById('num2').value);
    const msg = document.getElementById('mensagem');
        
        if (!isNaN(num_1) && !isNaN(num_2)) {
            if (num_1 < num_2) {
                msg.textContent = 'Formulário válido!';
                msg.style.color = 'green';
            } else {
                msg.textContent = 'O número do segundo campo deve ser maior que o do primeiro campo.'; 
                msg.style.color = 'red';
            }
        } 
    });