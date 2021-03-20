class AlunosController {
    constructor () {
        let $ = document.querySelector.bind(document)
        this.inputNome = $('#nome')
        this.inputNota1 = $('#nota1')
        this.inputNota2 = $('#nota2')
        this.inputFrequencia = $('#frequencia')
        this.inputProvaFinal = $('#provaFinal')

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
        
        this.mensagem.texto = `Aluno ${aluno.nome} foi adicionado com sucesso.`
        this.mensagemView.update(this.mensagemView)

        this.clearFields();

        
    }

    criaAluno () {
        return new Aluno (
           this.inputNome.value,
           this.inputNota1.value,
           this.inputNota2.value,
           this.inputFrequencia.value
        );
    }

    //limpa campos
    clearFields () {
        this.inputNome = ""
        this.inputNota1 = ""
        this.inputNota2 = ""
        this.inputFrequencia = ""
        this.inputProvaFinal = ""

        this.inputNome.focus()
    }

    
}