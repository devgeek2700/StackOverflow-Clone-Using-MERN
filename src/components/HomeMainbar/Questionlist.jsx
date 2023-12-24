import React from 'react'
import Questionsshow from './Questionsshow'

function Questionlist({ questionsdata }) {
    return (
        <>
            {questionsdata.map((question) => (
                // Added a return statement here
                <Questionsshow question={question} key={question._id} />
            ))}
        </>
    )
}

export default Questionlist
