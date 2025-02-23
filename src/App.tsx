import { z } from "zod";
import "./App.css";
import { inputsAdicionais } from "./inputs.adicionais";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function App() {
  const inputsPadrao = z.object({
    nome: z.string().min(1, "minimo 1"),
    senha: z.string().min(1, "minimo 1"),
  });

  const inputsDoForm = inputsPadrao.merge(inputsAdicionais);
  const inputsArray = Object.entries(inputsDoForm.shape);

  type FormType = z.infer<typeof inputsDoForm>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: zodResolver<any>(inputsDoForm) });

  function submit(data: any) {
    console.log(data);
  }

  console.log(inputsArray);

  return (
    <form onSubmit={handleSubmit(submit)} className={"flex flex-col gap-2"}>
      {inputsArray.map((input) => (
        <div id={`input-${input[0]}`} className={"flex flex-col items-start"}>
          <label htmlFor={input[0]}>{input[0]}</label>
          <input
            id={input[0]}
            {...register(input[0])}
            type="text"
            className={"border px-2"}
          />
          {errors?.[input[0]]?.message && (
            <span>{errors[input[0]]?.message as string}</span>
          )}
        </div>
      ))}
      <button type="submit">submit</button>
    </form>
  );
}

export default App;
