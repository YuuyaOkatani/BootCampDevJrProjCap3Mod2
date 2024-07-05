var alunos = [
    {
        id: 1,
        nome: "Pedro antônio",
        email: "pedro.antonio@abutua.com",
        telefone: "(99) 99999-9999",
        curso: 2,
        turno: 2
    }
]

loadProducts()

function save() {

    

    var aluno = {
        id: alunos.length + 1, 
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        curso: document.getElementById("curso").value,
        turno: document.getElementById("turno").value
    }

    addNewRow(aluno)
    alunos.push(aluno)
    document.getElementById("formAlunos").reset()
    console.log("Saving..."); 
}

function loadProducts() {
    for (let aluno of alunos) {
        addNewRow(aluno)

    }
}



function addNewRow(aluno) {

    var formatter = Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })



}

