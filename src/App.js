import './App.css'
import React, { useState } from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Statistics from './components/Statistics'

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

			<Statistics good={good} neutral={neutral} bad={bad} getAverage={getAverage()} getPositive={getPositive()}/>
		</div>
	);
}
