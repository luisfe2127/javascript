var amigo = {nome: 'Jao', 
gênero: 'M', 
idade: 17, 
peso: 55, 
engordar(p=0) 
{console.log(`Engordou`)
this.peso += p}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)