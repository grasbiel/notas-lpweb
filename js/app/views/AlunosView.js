class AlunosView extends View{
    
    constructor(elemento) {
        super(elemento)
    }

    _template(alunosModel){
        




        return `
        
            ${alunosModel.getAlunos().map(aluno => `
                <tr>
                    <td class="nome"> ${aluno.getNome()} </td>
                    <td class="nota1"> ${aluno.getNota1()} </td>
                    <td class="nota2"> ${aluno.getNota2()} </td>
                    <td class="frequencia"> ${aluno.getFrequencia()}</td>
                    <td class="situacao"> ${aluno.situacao()}</td>
                </tr>
            `).join('')}

        
        `
    }
}