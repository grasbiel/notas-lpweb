class NegociacoesView extends View {
    constructor(elemento) {
        super(elemento);
    }

    template(model){
        
        
        
        return `
            ${model.getAlunos().map(aluno => `
                <tr>
                    <td class="nome"> ${aluno.nome} </td>
                    <td class="nota1"> ${aluno.nota1} </td>
                    <td class="nota2"> ${aluno.nota2} </td>
                    <td class="${CSSclass}"> ${aluno.media}</td>
                </tr>

                
            `
            )}

            <td class="${CSSclass}"> ${Utils.formatarDecimal(transaction.media)}</td>
            <td class="frequencia"> ${transaction.frequencia}  </td>
            <td class="situacao"> ${situacao} </td>
            <td class="date">${transaction.date} </td>
            <td>
                <img onclick="Transaction.remove(${index})" src="${image}" alt="Remover transação">
            </td>
        `
    }
}