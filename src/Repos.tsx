import React, { FunctionComponent as FC } from 'react'

type repo = {
    id: string,
    name: string,
    html_url: string,
    created_at: string, 
    language: string,
}

interface ReposProps {
    repos: repo[]
}

export const Repos: FC<ReposProps> = ({repos}) => <>
<div className="flex flex-grow-0 w-auto h-auto flex-wrap flex-initial bg-gray-800">
    {repos.map(repo => 
        <a href={repo.html_url} className="bg-gray-300 text-center p-5 m-2">{repo.name}</a>
        )}
</div>
</>