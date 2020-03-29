import React, {
  useState,
  useEffect,
  useCallback,
} from 'react'

export default function Title(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(3)
  }, [])

  const updateState = useCallback(() => setCount(count + 1), [count])

  const style = {
    color: props.color,
    backgroundColor: props.bgColor || 'blue',
    padding: '20px',
  }

  return (
    <div>
      <h1 style={style}>{props.text + ' ' + count}</h1>
      <button onClick={updateState}>add one</button>
    </div>
  )
}
