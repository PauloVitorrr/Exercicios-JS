//verifique se o número é primo

var num = 4

var divisoes = 0

for(var i = 1; i <= num; i++){
    if(num % i == 0){
        divisoes ++;
    }
}


if(divisoes == 2){
    console.log(`O número ${num} é primo`)
} else {
    console.log(`O número ${num} não é primo`)
}