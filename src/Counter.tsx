import React, { FunctionComponent as FC} from 'react'

interface CouterProps {
    title: string
    count: string
}

export const Counter: FC<CouterProps> = ({title, count}) => <>
    <h1 className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Title: {title}</h1>
    <br />
    <h1 className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Price: {count && parseInt(count) * 2}</h1>
</>