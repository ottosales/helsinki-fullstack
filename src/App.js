import './App.css'
import React, {useState} from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Paragraph from './components/Paragraph'

export default () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	return (
		<div className="App App-header">
			<Header text="Thanks for stopping by!" />
			<Header text="How would you rate your experience here?" />
			
			<Button onClick={() => setGood(good + 1)} text="good :)" />
			<Button onClick={() => setNeutral(neutral + 1)} text="neutral :|" />
			<Button onClick={() => setBad(bad + 1)} text="bad :(" />

			<Paragraph text="Current statistics:" />
			<Paragraph text={good} />
			<Paragraph text={neutral} />
			<Paragraph text={bad} />
		</div>
	);
}
