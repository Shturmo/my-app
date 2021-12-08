import React, { useState } from 'react'

const Counter = (props) => {
  const { value } = props
  // Т.к. объект управляемый у него не дожно быть useState
  // const [value, setValue] = useState(props.value)

  const formatValue = () => {
    return value === 0 ? 'empty' : value
  }
  const getBageClasses = () => {
    let classes = 'badge m-2 '
    return (classes += value === 0 ? 'bg-warning' : 'bg-primary')
  }

  const handleIncrement = () => {
    console.log('handle increment')
    // setValue((prevState) => prevState + 1)
  }
  const handleDecrement = () => {
    console.log('handle decrement')
    // if (value > 0) {
    //   setValue((prevState) => prevState - 1)
    // }
  }

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default Counter
