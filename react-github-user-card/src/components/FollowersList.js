import React from 'react';
import styled from 'styled-components';

const FollowerImage = styled.img`
    max-width:180px;
    height:auto;
`;

const FollowerCardWrapper = styled.div`
    background-color: #f3f1e0;
    width:20%;
    height:280px;
    border:1px solid #91b0ae;
    margin:24px;
    padding-top:24px;
`;

//followers display
const FollowersList = props => {
    return (
        <div className="followersCont">
          {props.followers.map(person => (
            <FollowerCardWrapper>
              <FollowerImage  src={person.avatar_url} alt="github user image" />
              <div className="nameDiv">
                <p><strong>GitHub Name:</strong> {person.login}</p>
                <p></p>
              </div>
            </FollowerCardWrapper>
          ))}
        </div>
    );
  };
  

export default FollowersList;
