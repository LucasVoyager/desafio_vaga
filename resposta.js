// questao 1
const indice = 13
let soma = 0
let k = 0

for (let index = 0; k < indice; index++) {
    k = k + 1
    soma = soma + k
}
console.log(soma)
// resposta é 91

// // Questao 2
const numeroInformado = 55

function verificaFibonacci(numero) {
    if (numero < 0) {
        return false
    }

    let a = 0
    let b = 1

    if (numero === a || numero === b) {
        return true
    }

    let proximo = a + b

    while (proximo <= numero) {
        if (proximo === numero) {
            return true
        }
        a = b
        b = proximo
        proximo = a + b
    }

    return false
}

if (verificaFibonacci(numeroInformado)) {
    console.log(`O numero informado ${numeroInformado} pertence a sequencia de fibonacci`)
} else {
    console.log(`O numero informado ${numeroInformado} não pertence a sequencia de fibonacci`)
}

// // Questao 3

const fs = require('fs')

const camArq = './dados.json'

fs.readFile(camArq, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler arquivo', err)
        return
    } else {
        const faturamento = JSON.parse(data)

        calcularFaturamento(faturamento)
    }
    
})

function calcularFaturamento(dados) {
    const diasComFaturamento = dados.filter((item) => item.valor > 0)
    if (diasComFaturamento.length === 0) {
        console.log('nao há dias com faturamento')
        return
    } else {
        const valores = diasComFaturamento.map((item) => item.valor)
        const menorValor = Math.min(...valores).toFixed(2)
        const maiorValor = Math.max(...valores).toFixed(2)
  
        const soma = valores.reduce((acc, val) => acc + val, 0)
        const media = soma / diasComFaturamento.length

        const diasAcimaMedia = diasComFaturamento.filter((item) => item.valor > media).length

        console.log(`Menor faturamento R$ ${menorValor}`)
        console.log(`Maior faturamento $$ ${maiorValor} `)
        console.log(`Faturamento acima da media ${diasAcimaMedia} dias`)
    }
}

// Questao 4

const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    outros: 19849.53
}

const totalFaturamento = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor)

const percentuais = Object.entries(faturamentoPorEstado).map(([estado, valor]) => {
    const percentual = (valor / totalFaturamento) * 100
    return {estado: estado, percentual: percentual.toFixed(2)+ '%'}
})
console.log("Percentual de representação por estado:")
percentuais.forEach(({estado, percentual}) => {
    console.log(`${estado}: ${percentual}`)
})

// Questao 5

function inverterString(string) {
    let stringInvertida = ''

    for (let i = string.length - 1; i>= 0; i--) {
        stringInvertida += string[i]
    }

    return stringInvertida
}

const teste = 'ola'
console.log(inverterString(teste))