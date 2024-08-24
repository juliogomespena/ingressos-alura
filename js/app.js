function comprar()
{
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let qtd = parseInt(document.getElementById("qtd").value);
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").innerText);
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").innerText);
    let qtdPista = parseInt(document.getElementById("qtd-pista").innerText);

    console.log(qtd);

    // mais uma alteração para teste de conflito

    console.log("teste de conflitos");

    if(isNaN(qtd) || qtd == 0) alert("Insira uma quantidade à ser comprada.");
    else if(qtd < 0) alert("Quantidade inválida! Insira um número positivo.");
    else
    {
        switch (tipoIngresso)
        {
            case "inferior":

            if(qtdInferior == 0) alert("Ingresso indisponível!");
            else if((qtdInferior - qtd) < 0) alert ("Quantidade indisponível. Disponível: " + qtdInferior + ".");
            else
            {
                qtdInferior = qtdInferior - qtd;
                document.getElementById("qtd-inferior").innerText = qtdInferior;
                alert("Compra realizada com sucesso!");
            }

            break;

            case "superior":

            if(qtdSuperior == 0) alert("Ingresso indisponível!");
            else if((qtdSuperior - qtd) < 0) alert ("Quantidade indisponível. Disponível: " + qtdSuperior + ".");
            else
            {
                qtdSuperior = qtdSuperior - qtd;
                document.getElementById("qtd-superior").innerText = qtdSuperior;
                alert("Compra realizada com sucesso!");
            }


            break;

            case "pista":

            if(qtdPista == 0) alert("Ingresso indisponível!");
            else if((qtdPista - qtd) < 0) alert ("Quantidade indisponível. Disponível: " + qtdPista + ".");
            else
            {
                qtdPista = qtdPista - qtd;
                document.getElementById("qtd-pista").innerText = qtdPista;
                alert("Compra realizada com sucesso!");
            }

            break;

            default:
                alert("Erro, tente novamente!");
        }
        document.getElementById("qtd").value = "";
    }
}

// editando clone
// testando conflitos no git