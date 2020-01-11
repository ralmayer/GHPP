import React, {
  useState,
  useEffect,
  FunctionComponent as FC,
  FormEvent,
  ChangeEvent
} from "react";

interface User {
  avatar_url: string;
  html_url: string;
  name: string;
  repos: string;
  public_repos: number;
}

const App: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getUser = async (user: string) => {
      try {
        const res = await fetch(`https://api.github.com/users/${user}`);
        const data = await res.json();
        console.log(data);
      } catch (err) {
        alert(err);
      }
    };

    const getUserRepos = async (user: string) => {
      try {
        const res = await fetch(`https://api.github.com/users/ralmayer/repos`);
        const data = await res.json();
        setUser(data);
        console.log(data);
      } catch (err) {
        alert(err);
      }
    };

    username && getUser(username);
    username && getUserRepos(username);
  }, [username]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsername(title);
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center bg-gray-200">
      <div className="container w-auto h-auto flex-initial bg-gray-500">
        <form onSubmit={handleSubmit}>
          <p className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 shadow-lg">
            Enter Username:{" "}
          </p>
          <input
            className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 shadow-lg"
            value={title}
            onChange={handleTitleChange}
          />
          <button className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            {" "}
            SUBMIT{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
