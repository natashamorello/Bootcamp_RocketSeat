// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição
// homem precisa ser de no mínimo 95 anos na soma;
// mulher precisa ter no mínimo 85 anos na soma;
// Com base nas regras acima imprima na tela as mensagens:

// SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
// SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

const nome = 'Lola';
const sexo = 'F';
const idade = 48;
const contribuicao = 25;

const aposentadoria = idade + contribuicao;

const mulher = sexo == 'F' && contribuicao >= 30 && aposentadoria >= 85;
const homem = sexo == 'M' && contribuicao >= 35 && aposentadoria >= 95;


if ((mulher) || (homem)) {
    console.log (`${nome}, você tem direito a aposentadoria.`);
    }
 else {
    console.log (`${nome}, você não tem direito a aposentadoria.`);
}

