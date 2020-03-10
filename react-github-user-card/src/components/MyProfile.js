import React from 'react';
import styled from 'styled-components';

const ProfileImage = styled.img`
    max-width:380px;
    height:auto;
    border: 1px solid #91b0ae;
    -webkit-box-shadow: 1px 1px 2px 0px rgba(145, 176, 174, 0.54);
    -moz-box-shadow:    1px 1px 2px 0px rgba(145, 176, 174, 0.54);
    box-shadow:         1px 1px 2px 0px rgba(145, 176, 174, 0.54);
`;

const ProfileCardWrapper = styled.div`
    background-color: #f3f1e0;
    width: 340px;
    height:auto;
    border:1px solid #91b0ae;
    margin:24px auto;
    padding-top:24px;
    -webkit-box-shadow: 1px 1px 6px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow:    1px 1px 6px 0px rgba(50, 50, 50, 0.75);
    box-shadow:         1px 1px 6px 0px rgba(50, 50, 50, 0.75);
`;

// profile display
const MyProfile = props => {
    return (
        <ProfileCardWrapper>
            <ProfileImage src={props.user.avatar_url} alt="JW Nicholson" />
            <div className="nameDiv">
                <h2>{props.user.name}</h2>
                <p><strong>GitHub Username:</strong></p>
                <p>{props.user.login}</p>
                <p><strong>Followers:</strong> {props.user.followers}</p>
            </div>
        </ProfileCardWrapper>
    );
};

export default MyProfile;