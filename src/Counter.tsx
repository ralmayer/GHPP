import React, { FunctionComponent as FC} from 'react'

interface CouterProps {
    title: string
    count: string
}

export const Counter: FC<CouterProps> = ({title, count}) => <>
    <h1>Title: {title}</h1>
    <br />
    <h1>Price: {parseInt(count) * 2}</h1>
</>