import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = 'true') {
        super(nome, email, nascimento, role, ativo)
    }
    aprovarEstudante(estudante, curso) {
        return `${estudante} foi aprovando co curso ${curso}.\nResponsável: ${this.nome}`;
    }
}

const novaDocente = new Docente('Ana', 'a@a.com', '2005-01-02');
console.log(novaDocente);
console.log(novaDocente.aprovarEstudante('Juliana', 'Javascript'));