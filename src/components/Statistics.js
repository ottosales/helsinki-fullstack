import React from "react"
import Paragraph from './Paragraph'

export default ({ good, neutral, bad, getAverage, getPositive }) => {
    return (
        <div>
            <Paragraph text="Current statistics:" />
            <Paragraph text={"good: " + String(good)} />
            <Paragraph text={"neutral: " + String(neutral)} />
            <Paragraph text={"bad: " + String(bad)} />
            <Paragraph text={"average: " + String(getAverage)} />
            <Paragraph text={"positive: " + String(getPositive)} />
        </div>
    )
}