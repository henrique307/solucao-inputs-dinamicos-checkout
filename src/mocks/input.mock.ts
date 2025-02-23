import { z } from "zod";

export interface InputMock {
    nome: string;
    tipo: string;
    validacao: any;
}

export const inputs: InputMock[] = [
    { nome: "email", tipo: "text", validacao: z.string().email() },
    { nome: "workshop", tipo: "text", validacao: z.string() }
]