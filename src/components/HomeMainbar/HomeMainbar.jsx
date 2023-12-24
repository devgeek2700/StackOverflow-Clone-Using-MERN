import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./HomeMainbar.css"
import Questionlist from './Questionlist'
import { useSelector } from 'react-redux'



function HomeMainbar() {

    const questionsdata = useSelector((state) => state.questionReducer || []);
    console.log(questionsdata)

    const location = useLocation();
    const user = 123;
    const navigate = useNavigate()

    const checkAuth = () => {
        if (user === null) {
            alert("Login or Signup to ask a question")
            navigate("/Auth");
        }
        else {
            navigate(`/AskQuestions`);
        }
    }


    return (
        <div>
            <div className='main-bar'>
                <div className='main-bar-header'>
                    {
                        location.pathname === '/' ?
                            <h1>Top Questions</h1>
                            :
                            <h1>All Questions</h1>
                    }

                    <button onClick={checkAuth} className="ask-btn">Ask Question</button>
                </div>



                <div>
                    {questionsdata.data === null ? (
                        <h1>Loading....</h1>
                    ) : (
                        <>
                            <p>{questionsdata.data.length} questions</p>
                            <Questionlist questionsdata={questionsdata.data} />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HomeMainbar
