import React, {
  useState,
  FunctionComponent as FC,
  FormEvent,
  ChangeEvent
} from "react";
import { Counter } from "./Counter";

const App: FC = () => {
  const [count, setCount] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [values, setValues] = useState<{ title: string; count: string }>({
    title: "",
    count: ""
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValues({ title, count });
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCount(event.target.value);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center bg-gray-200">
      <div className="container w-auto h-auto flex-initial bg-gray-500">
        <form onSubmit={handleSubmit}>
          <p className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 shadow-lg">
            Enter Title:{" "}
          </p>
          <input
            className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 shadow-lg"
            value={title}
            onChange={handleTitleChange}
          />
          <p className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 shadow-lg">
            Enter Count:{" "}
          </p>
          <input
            className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 shadow-lg"
            value={count}
            onChange={handleCountChange}
          />
          <br />
          <button className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            {" "}
            SUBMIT{" "}
          </button>
        </form>
        <Counter title={values.title} count={values.count} />
      </div>
    </div>
  );
};

export default App;
