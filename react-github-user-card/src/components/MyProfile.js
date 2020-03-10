import React from 'react';
import styled from 'styled-components';

const ProfileImage = styled.img`
    max-width:380px;
    height:auto;
    border: 1px solid #91b0ae;
`;

const ProfileCardWrapper = styled.div`
    background-color: #f3f1e0;
    width: 340px;
    height:auto;
    border:1px solid #91b0ae;
    margin:24px auto;
    padding-top:24px;
   
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