
export type UserAccount = {//Criando o tipo para representar um conta de usuário
  name: string;// armazena o nome do usuário
  cpf: Number;// armazena o número do CPF
  birthDate: Date;// armazena a data de nascimento
  balance: Number ;// armazena o saldo atual da conta
  statement: Transaction[];//é um array que armazena todas as transações (tanto depósitos quanto pagamentos) realizadas pelo usuário.
  value: Number
};

export type Transaction = {//Cria um tipo representar transações feitas pelo usuário.
    VALUE: number ; //armazena o valor da transação (positivo para depósitos e negativo para pagamentos),
    DATE: Date, //armazena a data da transação
    description: string//armazena uma descrição breve do que foi transacionado

}

export const users: UserAccount[] = [
  {
    name: 'Fulano da Silva',
    cpf: 12345678900 ,
    birthDate: new Date('1990-01-01'),
    balance: 1000,
    statement: [],
    value: 0
  },
  {
    name: 'Ciclano de Souza',
    cpf: 98765432100,
    birthDate: new Date('1985-03-15'),
    balance: 2500,
    statement: [],
    value: 0
  },
  {
  name: 'Fagner Fontes',
  cpf: 317-222-458-93,
  birthDate: new Date('1985-03-15'),
  balance: 3500,
  statement: [],
  value: 0
}
];


