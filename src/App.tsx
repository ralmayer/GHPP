import React, {
  useState,
  useEffect,
  FunctionComponent as FC,
  FormEvent,
  ChangeEvent
} from "react";
import { User } from "./User";
import { Repos } from "./Repos";

interface UserInterface {
  avatar_url: string;
  html_url: string;
  name: string;
  repos_url: string;
  public_repos: number;
}

interface Repo {
  id: string,
  name: string,
  html_url: string,
  created_at: string, 
  language: string,
}

const App: FC = () => {
  const [title, setTitle] = useState<string>("Type here...");
  const [username, setUsername] = useState<string>("");
  const [user, setUser] = useState<UserInterface>({
    avatar_url: "",
    html_url: "",
    name: "",
    repos_url: "",
    public_repos: 18
  });
  const [repos, setRepos] = useState<Repo[]>([{
    id: "",
    name: "",
    html_url: "",
    created_at: "", 
    language: "",
  }])

  useEffect(() => {
    const getUser = async (user: string) => {
      try {
        const res = await fetch(`https://api.github.com/users/${user}`);
        const data = await res.json();
        const { avatar_url, html_url, name, repos_url, public_repos } = data
        setUser({
          avatar_url,
          html_url,
          name,
          repos_url,
          public_repos
        });
      } catch (err) {
        alert(err);
      }
    };

    const getUserRepos = async (user: string) => {
      try {
        const res = await fetch(`https://api.github.com/users/ralmayer/repos`);
        const data = await res.json();
        setRepos(data)
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

  const handleInputClick = () =>
    setTitle("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  return (
    <div className="flex w-full h-screen justify-center items-start bg-gray-200">
      <div className="container w-3/12 h-auto bg-gray-500">
        <form onSubmit={handleSubmit}>
          <p className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 shadow-lg">
            Enter Username:{" "}
          </p>
          <input
            className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 shadow-lg"
            value={title}
            onClick={handleInputClick}
            onChange={handleTitleChange}
          />
          <button className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            {" "}
            SUBMIT{" "}
          </button>
        </form>
        {user.name !== "" && <User user={user}/>}
        {repos[0].id !== "" && <Repos repos={repos}/>}
      </div>
    </div>
  );
};

export default App;
