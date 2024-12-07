import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = 'true') {
        super(nome, email, nascimento, role, ativo)
    }
}

const novoAdmin = new Admin("Rodrigo", 'R@.com', '4-4-2024');

console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());