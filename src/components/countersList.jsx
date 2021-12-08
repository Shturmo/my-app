import React, { useState } from 'react'
import Counter from './counter'

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'Ненужная вещь' },
    { id: 1, value: 0, name: 'Ложка' },
    { id: 2, value: 0, name: 'Вилка' },
    { id: 3, value: 0, name: 'Тарелка' },
    { id: 4, value: 0, name: 'Набор минималиста' },
  ]

  const [counters, setCounters] = useState(initialState)

  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id)
    setCounters(newCounters)
  }

  const handleReset = () => {
    // console.log('handle reset')
    setCounters(initialState)
  }

  const handleIncrement = (id) => {
    const updatedCounterValues = counters.map((counter) => {
      if (counter.id === id) {
        counter.value += 1
      }
      return counter
    })
    setCounters(updatedCounterValues)
  }

  const handleDecrement = (id) => {
    const updatedCounterValues = counters.map((counter) => {
      if (counter.id === id && counter.value > 0) {
        counter.value -= 1
      }
      return counter
    })
    setCounters(updatedCounterValues)
  }

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btb-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  )
}

export default CountersList
