let number = 1
for (let i = 0;i < 11; i++){
    console.log(number + "x" + i + "=" + number*i);
}
let sapo = 2
for(let i = 0;i < 11; i++){
    console.log(sapo + "x" + i + "=" + sapo*i);
}
let spfc = 3
for(let i = 0;i < 11; i++){
    console.log(spfc + "x" + i + "=" + spfc*i)
}
let yaa = 4
for(let i = 0;i < 11; i++){
    console.log(yaa + "x" + i + "=" + yaa*i)
}
let xburcio = 5 
for(let i = 0;i < 11; i++){
    console.log(xburcio + "x" + i + "=" + xburcio*i)
}
 let nome = prompt("digite seu nome")

 let numero1 = Number(prompt("Digite o primeiro número"))
 let numero2 = Number(prompt("Digite o segundo número"))
 let operação_mat = (prompt("Informe a Operação Matemática: \n[+] \n[-] \n[*] \n[%]"))

 if (operação_mat == "+"){
     alert (numero1+numero2)

 }else if(operação_mat == "-"){
     alert (numero1-numero2)
 }else if (operação_mat == "*"){
     alert (numero1*numero2)
}else if (operação_mat == "%"){
    alert (numero1%numero2)
}else{
    alert ("não deu paizão")
}