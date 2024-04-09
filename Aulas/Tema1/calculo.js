class CalculadoraSalario {
    constructor() {
        this.salarios = [];
    }

    addSalario(salarioBruto, desconto, beneficio) {
        const salarioLiquido = salarioBruto - desconto + beneficio;
        this.salarios.push({salarioBruto, desconto, beneficio, salarioLiquido});
        this.atualizarLista();
    }

    getMaxSalario() {
        return Math.max(...this.salarios.map(s => s.salarioLiquido), 0);
    }

    getTotalDescontos() {
        return this.salarios.reduce((total, current) => total + current.desconto, 0);
    }
    atualizarLista() {
        const listElement = document.getElementById('lista-salarios');
        listElement.innerHTML = '';
        this.salarios.forEach((salary) => {
            const item = document.createElement('li');
            item.innerText = `R$${salary.salarioLiquido.toFixed(2)}`;
            listElement.appendChild(item);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const calculator = new CalculadoraSalario();
    const form = document.getElementById('formSalario');
    const maxSal1 = document.getElementById('maior-salario');
    const totalDesc1 = document.getElementById('total-descontos');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const salarioBruto = parseFloat(document.getElementById('gross-salary').value);
        const desconto = parseFloat(document.getElementById('desconto').value);
        const beneficio = parseFloat(document.getElementById('beneficio').value);

        calculator.addSalario(salarioBruto, desconto, beneficio);

        maxSal1.innerText = `Maior Salário: R$${calculator.getMaxSalario().toFixed(2)}`;
        totalDesc1.innerText = `Soma dos Desconto: R$${calculator.getTotalDescontos().toFixed(2)}`;
    });
});
    document.getElementById('resultado').innerText = 'Por favor, insira numeros validos.';
    