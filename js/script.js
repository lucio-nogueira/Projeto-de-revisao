//NOME DO ALUNO //NOTA 1 //NOTA 2

    var nomes =["Igor", "José", "Maria"];
    var notasA =[7.0, 6.5, 9.5];
    var notasB = [8.0, 7.0, 8.5]

    //FUNÇÕES
function media(n1, n2){
    return (n1 + n2) / 2
}


function passou(media){
    //APROVADO
    if (media > 7) {
     return "Aprovado";
    }
    //REPROVADO
    else {
        return "Reprovado";
    }
}

    //MEDIA
for(var index in nomes) {

        var nota1 = notasA[index];
        var nota2 = notasB[index];

        var m = media(nota1, nota2);

    console.log(nomes[index] +
        " - " + 
        nota1 +
        " - " +
        nota2 +
        " - " + 
        m +
        " - " +
        passou(m));
}

