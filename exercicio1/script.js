
// # Exercício 1
// **Atenção:** para esse exercício você deve adicionar todas as soluções dentro da função 
// **imprimirComidasFavoritas**.

// Faça um programa que pergunte ao usuário seu **nome** e suas **três comidas favoritas**. 
// Em seguida, imprima no console a seguinte mensagem:
    
   
//     Estas são as comidas favoritas de nomeDoUsuario:
//     - Comida1
//     - Comida2
//     - Comida3
  
    
// Você deve usar apenas um `console.log()` para isso



const imprimirComidasFavoritas = ()=>{
    const nome = prompt('Qual seu nome?');
    const comida1 = prompt('Qual sua comida favorita?');
    const comida2 = prompt('Qual sua comida favorita?');
    const comida3 = prompt('Qual sua comida favorita?');
    console.log(`Estas são as comidas favoritas de ${nome}:
    - ${comida1}
    - ${comida2}
    - ${comida3}`)
    return [nome, comida1, comida2, comida3];
}
imprimirComidasFavoritas()