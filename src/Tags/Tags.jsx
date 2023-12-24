import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Leftsidebar from '../components/Leftsidebar/Leftsidebar'
import './tags.css'
import TagsList from './TagsList.jsx';
import { tagsdataList } from "./tagsdataList";


function Tags() {
    return (
        <div>

            <Navbar />
            <div className="home-container-1">
                <Leftsidebar />
                <div className="home-container-2">
                    <h1 className="tags-h1">Tags</h1>
                    <p className="tags-p">
                        A tag is a keyword or label that categorizes your question with other,
                        similar questions.
                    </p>
                    <p className="tags-p">
                        Using the right tags makes it easier for others to find and answer
                        your question.
                    </p>
                    <div className="tags-list-container">
                        {tagsdataList.map((tag, index) => (
                            <TagsList tag={tag} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        //05:51
    )
}

export default Tags
