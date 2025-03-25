import { z } from "zod";
import "./App.css";
import { inputsAdicionais } from "./inputs.adicionais";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleInputsAdicionais } from "./utils/inputsAdicionais.handler";

function App() {
  const inputsPadrao = z.object({
    nome: z.string().min(1, "minimo 1"),
    senha: z.string().min(1, "minimo 1"),
  });

  const inputsDoForm = inputsPadrao.merge(inputsAdicionais);

  const inputsPadraoArray = Object.keys(inputsPadrao.shape);
  const inputsAdicionaisArray = Object.keys(inputsAdicionais.shape);

  type FormType = z.infer<typeof inputsDoForm>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver<Record<string, any>>(inputsDoForm),
  });

  function submit(data: any) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(submit)} className={"flex flex-col gap-2"}>
      <div className="grid grid-cols-2 gap-5 mb-10">
        {inputsPadraoArray.map((input) => (
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
              type="text"
              className={"border px-2"}
            />
            {errors?.[input]?.message && (
              <span className="text-red-400">
                {errors[input]?.message as string}
              </span>
            )}
          </div>
        ))}
        {handleInputsAdicionais(inputsAdicionaisArray, { errors, register })}
      </div>
      <button type="submit">submit</button>
    </form>
  );
}

export default App;
