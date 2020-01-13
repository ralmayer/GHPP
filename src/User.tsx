import React, { FunctionComponent as FC } from "react";

interface UserProps {
  user: {
    avatar_url: string;
    html_url: string;
    name: string;
    repos_url: string;
    public_repos: number;
  };
}

export const User: FC<UserProps> = ({ user }) => (
  <>
    <div className="flex flex-grow-0 w-full h-auto bg-gray-100">
      <div className="flex flex-no-wrap w-full bg-red-500 justify-center">
        <div className="w-6/12 m-2 bg-gray-100 text-center">
          <img
            src={user.avatar_url}
            alt="avatar"
            className="max-h-full object-cover"
          />
        </div>
        <div className="flex flex-wrap w-6/12 p-2 m-2 bg-gray-100 items-center justify-center">
          <a href={user.html_url} className="bg-gray-300 text-center p-5">
            {user.name}
          </a>
          <a href={user.repos_url} className=" bg-gray-300 text-center p-5">
            Repos: {user.public_repos}
          </a>
        </div>
      </div>
    </div>
  </>
);
