import React, { useState, FunctionComponent as FC, FormEvent, ChangeEvent }  from "react";
import { Counter } from './Counter'

const App: FC = () => {
  
  const [count, setCount] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [values, setValues] = useState<{title: string, count: string }>({title: '', count: ''})

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setValues({title, count})
  }

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setTitle(event.target.value)
  }

  const handleCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setCount(event.target.value)
  }

  return <>
  <form onSubmit={handleSubmit}>
    <p>Enter Title: </p><input value={title} onChange={handleTitleChange}/>
    <br />
    <p>Enter Count: </p><input value={count} onChange={handleCountChange}/>
    <button> SUBMIT </button>
  </form>
  <Counter title={values.title} count={values.count} />
  </>

}

export default App;