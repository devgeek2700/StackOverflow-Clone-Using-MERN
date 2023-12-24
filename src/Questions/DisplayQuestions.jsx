import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Leftsidebar from '../components/Leftsidebar/Leftsidebar'
import Rightsidebar from '../components/Rightsidebar/Rightsidebar'
import QuestionDetails from './QuestionDetails'



function DisplayQuestions() {
    return (

        <>
            <Navbar />
            <div className='home-container-1 '>
                <Leftsidebar />
                <div className='home-container-2'>
                    <QuestionDetails />
                    <Rightsidebar />
                </div>
            </div>
        </>

    )
}

export default DisplayQuestions
