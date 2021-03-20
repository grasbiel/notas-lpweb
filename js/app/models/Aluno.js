class Aluno {

    constructor (nome, nota1, nota2, provaFinal, frequencia) {
        this._nome = nome
        this._nota1 = nota1
        this._nota2 = nota2
        this._frequencia = frequencia
        this._provaFinal = provaFinal

        Object.freeze(this)
    }

    get nome () {
        return this._nome;
    }

    get nota1() {
        return this._nota1;
    }

    get nota2() {
        return this._nota2;
    }

    get frequencia () {
        return this._frequencia;
    }

    get provaFinal () {
        return this._provaFinal;
    }

    get media() {
        return (Number(this.nota1) + Number(this.nota2)) /2 ;
    }


    //Inicio Situacao
    get situacao () {
        if (this.frequencia < 75) {
            return "Reprovado"
        }

        if (this.frequencia>= 75 && this.media >=70) {
            return "Aprovado"
        }
        else if (this.media >= 30 || this.media < 70) {
            let mediaFinal = ((Number(this.media) + Number(this.provaFinal))/2)

            if (mediaFinal < 50) {
                return "Reprovado"
            }

            else {
                return "Aprovado"
            }
        } //fim else if
    } //Fim situacao
    

    get img () {
        let imagem = this.situacao === "Reprovado" ? "assets/minus.svg" : "assets/plus.svg"
        return imagem
    }
}