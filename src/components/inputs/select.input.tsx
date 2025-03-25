import { FieldErrors } from "react-hook-form";
import { InputMock } from "../../mocks/input.mock";

interface SelectInputProps {
  configuracoes: InputMock;
  errors: FieldErrors<Record<string, any>>;
}

export function SelectInput({ configuracoes, errors, ...props }: SelectInputProps) {
  const {nome, configuracoes: {opcoes, duasColunas}} = configuracoes;

  if(!opcoes) return null;

  return (
    <div className={`flex flex-col items-start ${duasColunas && "col-span-2"}`}>
      <label className="first-letter:uppercase" htmlFor={nome}>
        {nome}
      </label>
      <select name={nome} id={nome} {...props} className="border w-full">
        <option value={""}>Selecione um {nome}</option>
        {opcoes.map((opcao) => (
          <option value={opcao}>{opcao}</option>
        ))}
      </select>
      {errors?.[nome]?.message && (
        <span className="text-red-400">{errors[nome]?.message as string}</span>
      )}
    </div>
  );
}
