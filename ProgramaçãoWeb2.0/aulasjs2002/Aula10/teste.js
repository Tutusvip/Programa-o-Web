function cadastrar() {
    if (nomeVendedor.value == "" || valorVenda.value == "") {
        window.alert("Erro!!! Nome do vendedor ou Valor não foram preenchidos");
    } else {
        desconto.push(Number(valorVenda.value) * 0.1);
        vendedor.push(nomeVendedor.value);
        venda.push(Number(valorVenda.value));
        res.innerHTML = "";
        res.innerHTML += "<p>Id</p><p>Nome Vendedor</p><p>Valor</p> <p>Desconto</p>";
        for (i = 0; i < vendedor.length; i++) {
            let o = i + 1;
            res.innerHTML += `<p>${o}</p> - <p>${vendedor[i]}</p> - <p>R$${venda[i].toFixed(2)}</p> - <p>R$${desconto[i].toFixed(2)}</p><br>`;
        }
        nomeVendedor.value = '';
        valorVenda.value = '';
        event.preventDefault();
    }
}

function limpar() {
    res.innerHTML = "";
    vendedor = [];
    venda = [];
    desconto = [];
    event.preventDefault();
}

function removerAnterior() {
    desconto.pop();
    vendedor.pop();
    venda.pop();
    res.innerHTML = "";
    res.innerHTML += "<p>Id</p><p>Nome Vendedor</p><p>Valor</p> <p>Desconto</p>";
    for (i = 0; i < vendedor.length; i++) {
        let o = i + 1;
        res.innerHTML += `<p>${o}</p><p>${vendedor[i]}</p><p>R$${venda[i].toFixed(2)}</p><p>R$${desconto[i].toFixed(2)}</p>`;
    }
    event.preventDefault();
}
