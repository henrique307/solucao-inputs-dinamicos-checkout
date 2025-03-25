import { FieldErrors, UseFormRegister } from "react-hook-form";
import { inputsMock } from "../mocks/input.mock";
import { SelectInput } from "../components/inputs/select.input";

interface handleInputsAdicionaisProps {
  errors: FieldErrors<Record<string, any>>;
  register: UseFormRegister<Record<string, any>>;
}

export function handleInputsAdicionais(
  inputsAdicionaisArray: any[],
  props: handleInputsAdicionaisProps
) {
  const { errors, register } = props;

  return inputsAdicionaisArray.map((input, index) => {
    const tipo = inputsMock[index].configuracoes.tipo;

    if (tipo === "select") {
      return (
        <SelectInput
          configuracoes={inputsMock[index]}
          errors={errors}
          {...register(input)}
        />
      );
    }

    return (
      <div
        key={`input-${input}`}
        id={`input-${input}`}
        className={"flex flex-col items-start"}
      >
        <label className="first-letter:uppercase" htmlFor={input}>
          {input}
        </label>
        <input
          id={input}
          {...register(input)}
          type={"text"}
          className={"border px-2"}
        />
        {errors?.[input]?.message && (
          <span className="text-red-400">
            {errors[input]?.message as string}
          </span>
        )}
      </div>
    );
  });
}
