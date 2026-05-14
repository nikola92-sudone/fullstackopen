import { useState } from 'react'

const Statistics = (props) => {

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

      <Button
        onClick={() => setGood(good + 1)}
        text="good"
      />

      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>

      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>

      <h1>statistics</h1>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

      <p>all {all}</p>

      <p>average {average}</p>

      <p>positive {positive} %</p>
    </div>
  )
}

export default App