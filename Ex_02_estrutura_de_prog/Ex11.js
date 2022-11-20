// Faça uma estrutura para saber se um usuario pode dirigir, parametros : idade e cnh

const idade = 16
const cnh = false

if(idade >= 18 && cnh == true){
    console.log("Voce pode está habilitado a dirigir!!!")
} else if (idade >= 18 && cnh == false){
    console.log("Voce não tem habilitação para dirigir!!!")
}  else{
    console.log("Voce não tem idade e nem habilitação para dirigir!!!")
} 

/*
 Voce não tem idade e nem habilitação para dirigir!!!
 */