class NotasController {
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

    adiciona (event) {
        event.preventDefault()

        let aluno = this.
    }
}