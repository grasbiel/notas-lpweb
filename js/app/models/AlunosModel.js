class AlunosModel {
    
    //Cria um array para armazenar os alunos
    constructor() {
        this.alunos = []
    }

    //Add o aluno no ARRAY
    adiciona (aluno) {
        this.alunos.push(aluno)
    }

    //retorna um ARRAY com os alunos armazenados
    getAlunos () {
        return [].concat(this.alunos)
    }


}