class User {
    constructor(nome, email, nascimento, role, aivo = true) {
        this.nome = nome
        this.email = email
        this.nascimento =nascimento
        this.role = role || "estudante"
        this.ativo = aivo
    }

    exibirInfos() {
        return `${this.nome} | ${this.email}`;
    }
}

const novoUser = new User('Matusalem', 'M@alem.com');
console.log(novoUser)
console.log(novoUser.exibirInfos())