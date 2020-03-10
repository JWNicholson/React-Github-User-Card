import React from 'react';
import styled from 'styled-components';

const FollowerImage = styled.img`
    width:160px;
    height:auto;
    border: 1px solid #d88429;
`;

const FollowerCardWrapper = styled.div`
    background-color: #f3f1e0;
    min-width:200px;
    max-width:480px;
    height:280px;
    border:1px solid #d88429;
    margin:24px;
    padding-top:24px;
`;

const FollowersDiv = styled.div`
    background-color:#91b0ae;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
`;

//followers display
const FollowersList = props => {
    return (
        <FollowersDiv>
          {props.followers.map(person => (
            <FollowerCardWrapper>
              <FollowerImage  src={person.avatar_url} alt="github user image" />
              <div className="nameDiv">
                <p><strong>GitHub Name:</strong></p>
                <p>{person.login}</p>
              </div>
            </FollowerCardWrapper>
          ))}
        </FollowersDiv>
    );
  };
  

export default FollowersList;
