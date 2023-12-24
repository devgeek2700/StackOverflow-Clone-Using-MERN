import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Leftsidebar from '../components/Leftsidebar/Leftsidebar'
import Avatar from '../components/Avatar/Avatar'
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import moment from 'moment';
import "./UserProfile.css"
import EditProfileForm from "./EditProfileForm"
import ProfileBio from './ProfileBio';

function UserProfile() {

    const users = useSelector((state) => state.usersReducer);
    const { id } = useParams();
    const currentProfile = users.filter((user) => user._id === id)[0];
    const currentUser = useSelector((state) => state.CurrentusersReducer);
    // console.log(currentUser);

    const [Switch, setSwitch] = useState(false);




    return (
        <div>
            <Navbar />
            <div className="home-container-1">
                <Leftsidebar />
                <div className="home-container-2">
                    <section>
                        <div className="user-details-container">
                            <div className="user-details">
                                <Avatar
                                    backgroundColor="orange"
                                    color="balck"
                                    fontSize="50px"
                                    px="40px"
                                    py="30px"
                                    className="AvatarProfile"
                                >
                                    {currentProfile?.name.charAt(0).toUpperCase()}
                                </Avatar>
                                <div className="user-name">
                                    <h1>{currentProfile?.name}</h1>
                                    <p>
                                        <i class="fa-solid fa-cake-candles"></i> Joined{" "}
                                        {moment(currentProfile?.joinedOn).fromNow()}
                                    </p>
                                </div>
                            </div>


                            {currentUser?.result._id === id && (
                                <button
                                    type="button"
                                    onClick={() => setSwitch(true)}
                                    className="edit-profile-btn"
                                >
                                    <i class="fa-solid fa-pen"></i> Edit Profile
                                </button>
                            )}
                        </div>
                        <>
                            {
                                Switch ? (
                                    <EditProfileForm
                                        currentUser={currentUser}
                                        setSwitch={setSwitch}
                                    />
                                ) : (
                                    <ProfileBio currentProfile={currentProfile} />
                                )}
                        </>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
