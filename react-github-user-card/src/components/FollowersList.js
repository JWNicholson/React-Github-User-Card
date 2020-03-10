import React from 'react';

//followers display
const FollowersList = props => {
    return (
        <div className="followersCont">
          {props.followers.map(person => (
            <div className="followerCard">
              <img  src={person.avatar_url} alt="github user image" />
              <div className="nameDiv">
                <p><strong>GitHub Name:</strong> {person.login}</p>
                <p></p>
              </div>
            </div>
          ))}
        </div>
    );
  };
  

export default FollowersList;
