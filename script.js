const form = document.getElementById('form');

// Adiciona um listener para o evento de submit do formulário
form.addEventListener('submit', function(event) {
    // Previne o comportamento padrão do evento submit do JS, ou seja, impede o recarregamento da página
    event.preventDefault();

    // Obtém os valores de peso e altura do formulário
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Calcula o IMC (Índice de Massa Corporal)
    const bmi = (weight / (height * height)).toFixed(2);

    // Verifica se o IMC calculado é um número válido
    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        let description = '';

        // Adiciona a classe 'attention' ao elemento de valor do IMC
        value.classList.add('attention');
        
        // Remove a classe 'hidden' para mostrar as informações
        document.getElementById('infos').classList.remove('hidden');
    
        // Determina a descrição com base no valor do IMC
        if (bmi < 18.5){
            description = 'Cuidado! Você está abaixo do peso!';
        } 
        else if (bmi >= 18.5 && bmi <= 25) {
            description = "Você está no peso ideal!";
            // Modifica as classes do elemento de valor do IMC para refletir o peso ideal
            value.classList.remove('attention');
            value.classList.add('normal');
        }
        else if (bmi > 25 && bmi <= 30) {
            description = "Cuidado! Você está com sobrepeso!";
        }
        else if (bmi > 30 && bmi <= 35) {
            description = "Cuidado! Você está com obesidade moderada!";
        }
        else if (bmi > 35 && bmi <= 40) {
            description = "Cuidado! Você está com obesidade severa!";
        }
        else {
            description = "Cuidado! Você está com obesidade mórbida!";
        }

        // Atualiza o valor do IMC exibido no formulário, substituindo ponto por vírgula
        value.textContent = bmi.replace('.', ',');
        
        // Define a descrição do estado de acordo com o IMC calculado
        document.getElementById('description').textContent = description;
    }
});

// Adiciona um listener para o evento de pressionar tecla no formulário
form.addEventListener('keypress', function(event) {
    // Verifica se a tecla pressionada é 'press'
    if (event.key === 'press') {
        // Simula o clique no botão de calcular IMC
        document.getElementById('calculate').click();
    }
});

// Função para calcular o IMC
function calculateBMI(weight, height) {
    const bmi = (weight / (height * height)).toFixed(2);
    let description = '';

    if (!isNaN(bmi)) {
        if (bmi < 18.5) {
            description = 'Cuidado! Você está abaixo do peso!';
        } else if (bmi >= 18.5 && bmi <= 25) {
            description = 'Você está no peso ideal!';
        } else if (bmi > 25 && bmi <= 30) {
            description = 'Cuidado! Você está com sobrepeso!';
        } else if (bmi > 30 && bmi <= 35) {
            description = 'Cuidado! Você está com obesidade moderada!';
        } else if (bmi > 35 && bmi <= 40) {
            description = 'Cuidado! Você está com obesidade severa!';
        } else {
            description = 'Cuidado! Você está com obesidade mórbida!';
        }

        return {
            bmi: bmi,
            description: description
        };
    } else {
        return null;
    }
}

// Exemplos de testes com diferentes valores de peso e altura
const tests = [
    { weight: 70, height: 1.75 }, // Peso: 70 kg, Altura: 1.75 m
    { weight: 85, height: 1.8 },  // Peso: 85 kg, Altura: 1.80 m
    { weight: 60, height: 1.6 }   // Peso: 60 kg, Altura: 1.60 m
];

// Executa os testes e exibe os resultados no console
tests.forEach(test => {
    const result = calculateBMI(test.weight, test.height);
    if (result) {
        console.log(`Para peso ${test.weight} kg e altura ${test.height} m:`);
        console.log(`- IMC: ${result.bmi}`);
        console.log(`- Descrição: ${result.description}`);
        console.log('------------------');
    } else {
        console.log('Houve um problema ao calcular o IMC.');
    }
});