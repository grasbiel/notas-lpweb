

var Fields = [
    document.querySelector('input#name'),
    document.querySelector('input#date'),
    document.querySelector('input#nota1'),
    document.querySelector('input#nota2'),
    document.querySelector('input#frequencia'),
];
    

    getValues() {
        return {
            name: Fields.description.value,
            nota1: Fields.nota1.value,
            nota2: Fields.nota2.value,
            date: Fields.date.value,
            frequencia: Form.frequencia.value,
            media: Utils.calculaMedia(Form.nota1.value, Form.nota2.value)
        }
    },

    formatValues() {
        let {name, nota1, nota2, frequencia, date, media, situacao} = Form.getValues();

        date = Utils.formatDate(date);

        return {
            name,
            nota1,
            nota2,
            frequencia,
            date,
            situacao,
            media
        }
    },

    clearFields() {
        Form.name.value = "";
        Form.date.value = "";
        Form.nota1.value = "";
        Form.nota2.value = "";
        Form.frequencia.value = "";
        Form.media.value = "";
    },

    validateFields() {
        const {name, date, nota1, nota2, frequencia} = Form.getValues();

        if (name.trim() === "" || 
            date.trim()=== "" ||
            nota1.trim() === "" ||
            nota2.trim() === "" ||
            frequencia.trim() === "") {
                throw new Error("Por favor, preencha todos os campos");
            }
        
        if (nota1 > 100 || nota1 < 0 || nota2 > 100 || nota2 < 0 || frequencia < 0 || frequencia > 100) {
            throw new Error ("Intervalo permitido: 0 a 100");
        }

        

        
    },

    submit(event) {   
        event.preventDefault()

        try {
            // verificar se todas as informações estão preenchidas
            Form.validateFields();
            const transaction = Form.formatValues()
            // salvar
            Transaction.add(transaction);
            // apagar os dados do formulário
            Form.clearFields();
            // modal feche
            Modal.close();
        } catch(error) {
            alert(error.message)
        }
    }
}


