import { z } from "zod";
import { InputMock, inputs } from "./mocks/input.mock";

const inputsSchema = JSON.parse(inputs);

let inputsAdicionais = z.object({});

inputsSchema.forEach((input: InputMock) => {
    inputsAdicionais = inputsAdicionais.extend({
        [input.nome]: eval(input.configuracoes.validacao)
    })
});

export { inputsAdicionais };
