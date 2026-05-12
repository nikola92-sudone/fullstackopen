import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>

      <p>all {props.all}</p>

      <p>average {props.average}</p>

      <p>positive {props.positive}%</p>
    </div>
  )
} 

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // derived values
  const all = good + neutral + bad

  // good = 1, neutral = 0, bad = -1
  const average = (good - bad) / all

  const positive = (good / all) * 100

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={() => setGood(good + 1)} text="good"/>

      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>

      <Button onClick={() => setBad(bad + 1)} text="bad"/>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />

    </div>
  )
}

export default App