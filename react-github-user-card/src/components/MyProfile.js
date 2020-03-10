import React from 'react';

// profile display
const MyProfile = props => {
    return (
        <div className="profileCard">
            <img src={props.user.avatar_url} alt="JW Nicholson" />
            <div className="nameDiv">
                <h2>{props.user.name}</h2>
                <p><strong>GitHub Username:</strong> {props.user.login}</p>
                <p><strong>Followers:</strong> {props.user.followers}</p>
            </div>
        </div>
    );
};

export default MyProfile;