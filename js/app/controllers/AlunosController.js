class AlunosController {
    constructor () {
        let $ = document.querySelector.bind(document)
        this._inputNome = $('#nome')
        this._inputNota1 = $('#nota1')
        this._inputNota2 = $('#nota2')
        this._inputProvaFinal = $('#provaFinal')
        this._inputFrequencia = $('#frequencia')


        
        this.alunosModels = new AlunosModel()

        this.alunosView = new AlunosView($('#js-AlunoView'))
        this.alunosView.update(this.alunosModels)

        this.mensagem = new Mensagem ();
        this.mensagemView = new MensagemViews ($('#js-mensagem-view'))
        this.mensagemView.update(this.mensagem)
    }
    
    static open () {
        document.querySelector('.modal-overlay').classList.add('active');
    }

    static close () {
        document.querySelector('.modal-overlay').classList.remove('active');
    }
    
    adiciona (event) {
        event.preventDefault()
                
        this.alunosModels.adiciona(this.criaAluno())
        this.alunosView.update(this.alunosModels)
        
        this.clearFields();

        AlunosController.close();
    }

    criaAluno () {
        return new Aluno (
            this._inputNome.value,
            this._inputNota1.value,
            this._inputNota2.value,
            this._inputProvaFinal.value,
            this._inputFrequencia.value
        );
    }

    //limpa campos
    clearFields () {
        this._inputNome.value = ""
        this._inputNota1.value = ""
        this._inputNota2.value = ""
        this._inputProvaFinal.value= ""
        this._inputFrequencia.value = ""
    }


    
}