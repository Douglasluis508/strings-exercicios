

// Observe a string abaixo:

// ```jsx
     const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
     
// ```

// A partir dela, execute os passos abaixo:

// a) crie uma função que recebe **minhaString** por parâmetro e **Remova** 
// o excesso de espaços no final da string;

// b) A função deve imprimir no console a **quantidade de caracteres** 
// da string, *antes* e *depois* da remoção dos espaços;

// c) A função também deve **Substituir** os traços `________` pela palavra “sticioso”.


const manipularString = (minhaString)=>{
    console.log(minhaString);
    console.log(minhaString.length);
    console.log(minhaString.trim());
    console.log(minhaString.trim().length);
    const novaFrase = minhaString.replace('________', 'sticioso');
    console.log(novaFrase);
   
};
manipularString(minhaString)