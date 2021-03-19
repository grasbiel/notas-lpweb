class Aluno {
    constructor (nome, nota1, nota2, frequencia) {
        this.nome = nome
        this.nota1 = nota1
        this.nota2 = nota2
        this.frequencia = frequencia

        Object.frequencia(this)
    }


    get nome () {
        return this.nome;
    }

    set nome (nome) {
        this.nome = nome;
    }

    get nota1() {
        return this.nota1;
    }

    set nota1 (nota) {
        this.nota1 = nota;
    }

    get nota2() {
        return this.nota2;
    }

    set nota2 (nota) {
        this.nota2 = nota;
    }

    get frequencia () {
        return this.frequencia;
    }

    set frequencia (freq) {
        this.frequencia = freq;
    }

    get provaFinal () {
        return this.provaFinal;
    }

    set provaFinal(prova) {
        this.provaFinal = prova;
    }

    get media() {
        return (Number(this.nota1) + Number(this.nota2)/2)
    }


    //Inicio Situacao
    get situacao () {
        if (this.frequencia < 75) {
            return "Reprovado"
        }

        if (this.frequencia>= 75 && media >=70) {
            return "Aprovado"
        }
        else if (this.media >= 30 || this.media < 70) {
            let mediaFinal = (Number(this.media) + Number(this.provaFinal)/2)

            if (mediaFinal < 50) {
                return "Reprovado"
            }

            else {
                return "Aprovado"
            }
        } //fim else if
    } //Fim situacao
    
}