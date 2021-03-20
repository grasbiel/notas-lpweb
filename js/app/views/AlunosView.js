class AlunosView extends View{
    
    constructor(elemento) {
        super(elemento)
    }

    _template(alunosModel){
        return `
            <table id="data-table">
                <thead> 
                    <tr>
                        <th>Aluno</th>
                        <th>Nota 1</th>
                        <th>Nota 2</th>
                        <th>Prova Final</th>
                        <th>Média</th>
                        <th>Frequência</th>
                        <th>Situação</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody id="">
                    ${alunosModel.getAlunos().map(aluno => `

                        <tr>
                            <td> ${aluno.nome} </td>
                            <td> ${aluno.nota1} </td>
                            <td> ${aluno.nota2} </td>
                            <td> ${aluno.provaFinal} </td>
                            <td> ${aluno.media} </td>
                            <td> ${aluno.frequencia}</td>
                            <td> ${aluno.situacao}</td>
                            <td> 
                                <img src="${aluno.img}">
                            </td>
                        </tr>
                    `).join('')}
                </tbody>                
            </table>
        `
    }
}