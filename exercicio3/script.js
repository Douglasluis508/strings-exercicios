// //Crie a const para a frase aqui# Exercício 3

// A partir da frase a seguir, faça o que se pede.

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo);
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

// b) Implemente uma função que recebe por parâmetro a `const` criada no passo **a)**  
// e imprima essa string trocando **verde** por **rosa**, e **azul** por **laranja**;
const manipularString = (frase)=>{
    const novaFrase = frase.replace('verde','rosa').replace('azul','laranja')
    console.log(novaFrase);

   // c) **Verifique** se a nova string contém as palavras **verde** e **laranja**.
    console.log(novaFrase.includes('verde'));
    console.log(novaFrase.includes('laranja'));
    
};

manipularString(frase);




// **EXTRA:** tente fazer o trecho “mas não deixe o gato sair” ficar em **letras maiúsculas**, 
// assim como o “BOAS VINDAS”
const FraseMaiuscula = 'mas não deixe o gato sair'
console.log(`Jorge tem uma casa rosa e com portão laranja, com os dizeres ${}`)