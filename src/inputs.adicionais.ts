import { z } from "zod";
import { inputs } from "./mocks/input.mock";

let inputsAdicionais = z.object({});

inputs.forEach(input => {
    inputsAdicionais = inputsAdicionais.extend({
        [input.nome]: input.validacao
    })
});

export { inputsAdicionais };
