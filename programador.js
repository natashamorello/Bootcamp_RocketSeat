// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

// As tecnologias também devem ser objetos contendo nome e especialidade,

// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

const programador = {
        nome: "Carlos",
        idade: 32, 
        propriedade:  [
          { nome: 'C++', especialidade: 'Desktop'}, 
          { nome: 'JavaScript', especialidade: 'Web/Mobile'},
          { nome: 'Python', especialidade: 'Data Science'},
        ]
      
    }

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.propriedade[0].nome} com especialidade em ${programador.propriedade[0].especialidade}.`)