class Calculadora {
    constructor(arrayNumerica) {
        this.arrayNumerica = arrayNumerica;
    }

    fatorial() {
    // Fatorial 
    let primeiroNumero = this.arrayNumerica[0]

    if(primeiroNumero === 0 || primeiroNumero === 1) {
        return 1

    }else {
        let fatorial = 1
        for(let i = 1; i <= primeiroNumero; ++i) {
        fatorial *= i;
        }

        return fatorial
     }
    } 

    mediaAritmedica() {
    // Média Aritmédica 
        let soma = 0
        for(let i = 0; i < this.arrayNumerica.length; i++) {
            soma += this.arrayNumerica[i]
        }
        let media = soma/this.arrayNumerica.length
        return media
    } 
   
    variancia() {
        let media = this.mediaAritmedica();
        let desvioArray = [];

        for (let i = 0; i < this.arrayNumerica.length; i++) {
           let desvio = media - this.arrayNumerica[i]
           desvioArray.push(desvio ** 2)
        }
          
        let variancia = 0;
        for (let i = 0; i < desvioArray.length; i++) {
            variancia += desvioArray[i];
        }   
        variancia /= this.arrayNumerica.length
        return variancia
    }

    desvioPadrao () {
        const variancia = this.variancia();
        let desvioPadrao = variancia**(1/2)
        
        return desvioPadrao
    }

    obterNumerosImpares() {
        
        let numerosImpares = []
        for(let i = 0; i < this.arrayNumerica.length; i++) {
            if(this.arrayNumerica[i]%2 !== 0 ) {
                numerosImpares.push(this.arrayNumerica[i])
            }
        }
    
        return numerosImpares
    }
    

    printAll() {

       const fatorial = this.fatorial();
       console.log(`Fatorial do primeiro elemento: ${fatorial}`)

       const media = this.mediaAritmedica();
       console.log(`A Média aritmédica é ${media}`)
       
       const variancia = this.variancia();
       console.log(`Variância: ${variancia}`)

       const desvioPadrao = this.desvioPadrao();
       console.log(`Desvio Padrão: ${desvioPadrao}`)

       const numerosImpares = this.obterNumerosImpares();
       console.log(`Números impares: ${numerosImpares}`)
    }

}
    calc1 = new Calculadora([2,3,1,9,6,5,4])
    calc1.printAll();