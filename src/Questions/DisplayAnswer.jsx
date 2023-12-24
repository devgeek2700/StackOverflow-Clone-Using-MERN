import React from 'react'
import Avatar from '../components/Avatar/Avatar'
import moment from 'moment'
import { useParams, useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import copy from "copy-to-clipboard";
import { deleteAnswer } from '../actions/question'

function DisplayAnswer({ question }) {

    const location = useLocation();
    const url = "http://localhost:3000";


    const User = useSelector((state) => state.CurrentusersReducer);
    const { id } = useParams();
    const dispatch = useDispatch();

    const handleShare = () => {
        copy(url + location.pathname);
        alert("Copied url : " + url + location.pathname);
    };


    const handleDelete = (answerId, noOfAnswers) => {
        dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
    };


    // 13:36


    return (
        <div>
            {question.answer.map((ans) => (
                <div className="display-ans" key={ans._id}>
                    <p>{ans.answerbody}</p>
                    <div className="question-actions-user">
                        <div>
                            <button type="button" onClick={handleShare}>
                                Share
                            </button>

                            {
                                User?.result._id === ans?.userId && (
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(ans._id, question.noOfAnswers)}> Delete
                                    </button>
                                )
                            }

                        </div>
                        <div>
                            <p>asked {moment(ans.answerreadOn).fromNow()}</p>

                            <Link
                                to={`/Users/${ans.userId}`}
                                className="user-link"
                                style={{ color: "#0086d8" }}
                            >
                                <Avatar
                                    backgroundColor="lightgreen"
                                    px="8px"
                                    py="4px"
                                    borderRadius="4px"
                                >
                                    {ans.userAnswered.charAt(0).toUpperCase()}
                                </Avatar>
                                <div>{ans.userAnswered}</div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DisplayAnswer
