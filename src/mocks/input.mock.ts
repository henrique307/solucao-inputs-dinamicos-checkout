export interface InputMock {
  nome: string;
  configuracoes: {
    tipo: string;
    validacao: any;
    opcoes?: string[];
    duasColunas?: boolean;
  };
}

export const inputsMock: InputMock[] = [
  {
    nome: "email",
    configuracoes: {
      tipo: "email",
      validacao: "z.string().email()",
    },
  },
  {
    nome: "workshop",
    configuracoes: {
      tipo: "select",
      validacao: "z.string().min(1, 'escolha um')",
      opcoes: ["teste um", "teste dois", "teste 3", "teste ortauq"],
      duasColunas: true
    },
  },
];

export const inputs: string = JSON.stringify(inputsMock);
