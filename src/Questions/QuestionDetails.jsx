import React, { useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import "./Questions.css"
import upvote from "../assets/sort-up.svg"
import downVotes from "../assets/sort-down.svg"
import moment from 'moment'
import { Link } from "react-router-dom"
import Avatar from '../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { useDispatch, useSelector } from 'react-redux'
import copy from "copy-to-clipboard";
import { postAnswer, deleteQuestion, voteQuestion } from '../actions/question'


function QuestionDetails() {

    const { id } = useParams();
    const questionsdata = useSelector((state) => state.questionReducer || []);
    // console.log(questionsdata)

    const [Answer, setAnswer] = useState('');
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const url = "http://localhost:3000";
    const User = useSelector((state) => state.CurrentusersReducer);


    const handlePostAnswer = (e, answerLength) => {
        e.preventDefault();
        if (User === null) {
            alert("Login or Signup to answer a question");
            Navigate("/Auth");
        } else {
            if (Answer === "") {
                alert("Enter an answer before submitting");
            } else {
                dispatch(postAnswer({
                    id,
                    noOfAnswers: answerLength + 1,
                    answerbody: Answer,
                    userAnswered: User.result.name,
                    userId: User.result._id
                }));
            }
        }
    }


    const handleShare = () => {
        copy(url + location.pathname);
        alert("Copied url : " + url + location.pathname);
    };


    const handleDelete = () => {
        dispatch(deleteQuestion(id, Navigate));
    };



    const handleUpVote = () => {
        dispatch(voteQuestion(id, "upVote", User.result._id));
    }
    const handleDownVote = () => {
        dispatch(voteQuestion(id, "downVote", User.result._id));

    }





    return (
        <div>
            <div className="question-details-page">
                {
                    questionsdata.data === null ?
                        <h1>Loading....</h1>
                        :
                        <>
                            {questionsdata.data
                                .filter((question) => question._id === id)
                                .map((question) => (
                                    <div key={question._id} >
                                        <section className="question-details-container">
                                            <h1>{question.questiontitle}</h1>
                                            <div className="question-details-container-2">
                                                <div className="question-votes">
                                                    <img
                                                        src={upvote}
                                                        alt=""
                                                        width="18"
                                                        className="votes-icon"
                                                        onClick={handleUpVote}
                                                    />
                                                    <p>{question.upVotes.length - question.downVotes.length}</p>
                                                    <img
                                                        src={downVotes}
                                                        alt=""
                                                        width="18"
                                                        className="votes-icon"
                                                        onClick={handleDownVote}
                                                    />
                                                </div>
                                                <div style={{ width: "100%" }}>
                                                    <p className="question-body">{question.questionBody}</p>
                                                    <div className="question-details-tags">
                                                        {question.questionTags.map((tag) => (
                                                            <p key={tag}>{tag}</p>
                                                        ))}
                                                    </div>
                                                    <div className="question-actions-user">
                                                        <div>
                                                            <button type="button"
                                                                onClick={handleShare}
                                                            >
                                                                Share
                                                            </button>

                                                            {
                                                                User?.result?._id === question?.userId && (
                                                                    <button type="button" onClick={handleDelete}>
                                                                        Delete
                                                                    </button>
                                                                )}


                                                        </div>
                                                        <div>

                                                            <p>asked {moment(question.askedOn).fromNow()}</p>


                                                            <Link
                                                                to={`/Users/${question.userId}`}
                                                                className="user-link"
                                                                style={{ color: "#0086d8" }}
                                                            >
                                                                <Avatar
                                                                    backgroundColor="orange"
                                                                    px="8px"
                                                                    py="4px"
                                                                    borderRadius="4px"
                                                                >
                                                                    {/* first character of the user name */}
                                                                    {question.userPosted.charAt(0).toUpperCase()}
                                                                </Avatar>
                                                                <div>{question.userPosted}</div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* 2 */}

                                        {question.noOfAnswers !== 0 && (
                                            <section>
                                                <h3>{question.noOfAnswers} Answers</h3>
                                                <DisplayAnswer
                                                    key={question._id}
                                                    question={question}
                                                // handleShare={handleShare}
                                                />
                                            </section>
                                        )}


                                        {/* 3 */}


                                        <section className="post-ans-container">
                                            <h3>Your Answer</h3>
                                            <form onSubmit={(e) => { handlePostAnswer(e, question.answer.length) }}>
                                                <textarea
                                                    name=""
                                                    id=""
                                                    cols="30"
                                                    rows="10"
                                                    onChange={(e) => { setAnswer(e.target.value) }}
                                                ></textarea>
                                                <br />
                                                <input
                                                    type="submit"
                                                    className="post-ans-btn"
                                                    value="Post Your Answer"
                                                />
                                            </form>
                                            <p>
                                                Browse other Question tagged
                                                {question.questionTags.map((tag) => (
                                                    <Link to="/Tags" key={tag} className="ans-tags">
                                                        {" "}
                                                        {tag}{" "}
                                                    </Link>
                                                ))}{" "}
                                                or
                                                <Link
                                                    to="/AskQuestion"
                                                    style={{ textDecoration: "none", color: "#009dff" }}
                                                >
                                                    {" "}
                                                    ask your own question.
                                                </Link>
                                            </p>
                                        </section>
                                    </div>

                                ))
                            }
                        </>
                }
            </div>
        </div>
    )
}

export default QuestionDetails
