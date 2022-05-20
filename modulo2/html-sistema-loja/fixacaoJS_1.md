function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui

let valorCarro = (valorTotalVendas/qtdeCarrosVendidos)

let comissao = (qtdeCarrosVendidos*(100+(0.05*valorCarro)))
let salario = 0

if (comissao > 0){
  
  salario = 2000 + comissao
}else{
  salario = 2000
}
       return salario
}
