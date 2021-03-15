const Modal = {
    open() {
        //Abrir modal
        //Adicionar a class active ao modal
        document.querySelector('.modal-overlay').classList.add('active');
    },
    close(){
        //Fechar o modal
        //remover a class active do modal
        document.querySelector('.modal-overlay').classList.remove('active');
    }
}

const Storage = {
    get() {
        return JSON.parse(localStorage.getItem('dev.finances:transaction')) || 
        []
    },

    set (transactions) {
        localStorage.setItem("dev.finances:transaction", JSON.stringify(transactions))
    }
}


// Eu preciso somar as entradas
// depois eu preciso somar as saídas e
// remover das entradas o valor das saídas
// assim, eu terei o total
const Transaction = {
    all:Storage.get(),


    add(transaction) {
        Transaction.all.push(transaction);

        App.reload();

    },

    remove (index) {
        Transaction.all.splice(index,1)
        App.reload()
    },
    
    incomes () {
        //somar as entradas

        let income = 0;

        //pegar todas as transacoes
        // para cada transacao
        Transaction.all.forEach((transaction) => {
            // se ela for maior que zero
            if (transaction.amount > 0) {
                income += transaction.amount;
            }
        })
        // somar a uma variável e retorná-la
        return income;
    },
    expenses() {
        //somar as saídas
        let expense = 0;

        //pegar todas as transacoes
        //para cada transacao
        Transaction.all.forEach((transaction) => {
            //se ela for menor que zero
            if (transaction.amount < 0) {
                expense -= transaction.amount;
            }
        })
        // somar a uma variavel e retorná-la
        return expense;
    },
    total() {
        //total de entradas e saídas
        return Transaction.incomes() - Transaction.expenses();
    }
}

// Substituir os dados do HTML com os dados do JS

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index){
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, index);
        tr.dataset.index = index;

        DOM.transactionsContainer.appendChild(tr);
    },

    innerHTMLTransaction(transaction, index) {
        const CSSclass = transaction.media > 70 ? "income" : "expense";
        
        const image = transaction.media > 70 ? "./assets/plus.svg" : "./assets/minus.svg";
        
        //const amount = Utils.formatCurrency(transaction.amount);

        const html = 
        ` 
            <td class="description"> ${transaction.description} </td>
            <td class="nota1"> ${transaction.nota1} </td>
            <td class="nota2"> ${transaction.nota2} </td>
            <td class="${CSSclass}"> ${transaction.media}</td>
            <td class="frequencia"> ${transaction.frequencia}  </td>
            <td class="date">${transaction.date} </td>
            <td>
                <img onclick="Transaction.remove(${index})" src="${image}" alt="Remover transação">
            </td>
        `

        return html;
    },

    updateBalance() {
        /*document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(Transaction.incomes());

        document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(Transaction.expenses());

        document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(Transaction.total());
        */
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = "";
    }
}

const Utils = {
    formatAmount(value) {
        value = value*100;

        return Math.round(value);
    },
    
    calculaMedia(value1, value2) {
        const result = Number(value1)/2 + Number(value2)/2;
        return Math.round(result)
    },

    formatDate(date){
        const splittedDate = date.split("-")
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
    },

    formatCurrency (value) {

       const signal = Number(value) < 0 ? "-" : ""

       value = String(value).replace(/\D/g,"")

       value = Number(value) / 100

       value = value.toLocaleString("pt-BR", {
           style: "currency",
           currency: "BRL"
       })

       return signal + value;
    }
}

const Form = {
    description: document.querySelector('input#description'),
    date: document.querySelector('input#date'),
    nota1: document.querySelector('input#nota1'),
    nota2: document.querySelector('input#nota2'),
    frequencia: document.querySelector('input#frequencia'),
    media : 0.0,

    getValues() {
        return {
            description: Form.description.value,
            nota1: Form.nota1.value,
            nota2: Form.nota2.value,
            date: Form.date.value,
            frequencia: Form.frequencia.value,
            media : Utils.calculaMedia(Form.nota1.value, Form.nota2.value)
        }
    },

    formatValues() {
        let {description, nota1, nota2, frequencia, date, media} = Form.getValues();

        date = Utils.formatDate(date);

        return {
            description,
            nota1,
            nota2,
            frequencia,
            date,
            media
        }
    },

    clearFields() {
        Form.description.value = "";
        Form.date.value = "";
        Form.nota1.value = "";
        Form.nota2.value = "";
        Form.frequencia.value = "";
        Form.media.value = "";
    },

    validateFields() {
        const {description, date, nota1, nota2, frequencia} = Form.getValues();

        if (description.trim() === "" || 
            date.trim()=== "" ||
            nota1.trim() === "" ||
            nota2.trim() === "" ||
            frequencia.trim() === "") {
                throw new Error("Por favor, preencha todos os campos");
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

const App = {
    init () {
        Transaction.all.forEach(function (transaction, index) {
            DOM.addTransaction(transaction, index);
        })

        DOM.updateBalance();

        Storage.set(Transaction.all);
    },

    reload () {
        DOM.clearTransactions();
        App.init();
    }
}

App.init()

