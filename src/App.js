import './App.css'
import React, {useState} from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Paragraph from './components/Paragraph'

export default () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const getAverage = () => (good + neutral + bad) !== 0 ? (good - bad) / (good + neutral + bad) : 0


	const getPositive = () => (good + neutral + bad) !== 0 ? (good) / (good + neutral + bad) : 0

	return (
		<div className="App App-header">
			<Header text="Thanks for stopping by!" />
			<Header text="How would you rate your experience here?" />
			
			<Button onClick={() => setGood(good + 1)} text="good :)" />
			<Button onClick={() => setNeutral(neutral + 1)} text="neutral :|" />
			<Button onClick={() => setBad(bad + 1)} text="bad :(" />

			<Paragraph text="Current statistics:" />
			<Paragraph text={"good: " + String(good)} />
			<Paragraph text={"neutral: " + String(neutral)} />
			<Paragraph text={"bad: " + String(bad)} />
			<Paragraph text={"average: " + String(getAverage())} />
			<Paragraph text={"positive: " + String(getPositive())} />
		</div>
	);
}
