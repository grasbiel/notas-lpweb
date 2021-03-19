class NegociacoesView extends View {
    constructor(elemento) {
        super(elemento);
    }

    template(model){
        
        
        
        return `
            <td class="nome"> ${transaction.nome} </td>
            <td class="nota1"> ${Utils.formatarDecimal(transaction.nota1)} </td>
            <td class="nota2"> ${Utils.formatarDecimal(transaction.nota2)} </td>
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