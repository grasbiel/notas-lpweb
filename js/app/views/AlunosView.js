class AlunosView extends View{
    
    constructor(elemento) {
        super(elemento)
    }

    _template(alunosModel){
        return `
        <section id="balance">
            <h2 class="sr-only">Cadastro de notas</h2>
            
            <div class="card">
                <h3>
                    <span>Aprovados</span>
                    <img src="./assets/aprovado.svg" alt="aprovados">
                </h3>
                <p id="aprovadosDisplay">${alunosModel.getAlunos().reduce((total, valor) => total + (valor.situacao == 'Aprovado' ? 1 : 0), 0)}</p>
            </div>
            
            <div class="card">
                <h3>
                    <span>Reprovados</span>
                    <img src="./assets/reprovado.svg" alt="reprovados"> 
                </h3>
                <p id="reprovadosDisplay">${alunosModel.getAlunos().reduce((total, valor) => total + ( valor.situacao == 'Reprovado' ? 1 : 0 ) , 0 )}</p>
            </div>    

            <div class="card total">
                <h3>
                    <span>Total</span>
        
                </h3>
                <p id="mediasDisplay">
        
                ${
                    (alunosModel.getAlunos().reduce((somaMedias, valor) => (somaMedias) + (valor.media), 0.0) 
                    /alunosModel.getAlunos().reduce((iterador) => (iterador) + 1 , 0)).toFixed(2)
                }
                </p>
            </div> 

        </section>

        <section id="transaction">
            <h2 class="sr-only">Notas</h2>

            <a href="#" 
            onclick="AlunosController.open()"
            class="button new">
            + Cadastrar um aluno </a>
            
        
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