class Aluno {
    constructor () {
        //criamos um ARRAY para armazenar todos os alunos
        this.alunos = [];
    }

    //adiciona o aluno no array
    adiciona (aluno) {
        this.alunos.push(aluno);
    }


    getAlunos () {
        //retorna os Alunos cadastrados 
        return [].concat(this.alunos);
    }
}