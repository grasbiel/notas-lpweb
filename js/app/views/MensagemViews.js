class MensagemViews extends View {

    constructor(elemento ) {
        super(elemento );
    }

    _template(mensagem ) {
        return mensagem.texto ? 
        `<p class="">${mensagem.texto}</p>` : '<p></p>';
    }
  
}