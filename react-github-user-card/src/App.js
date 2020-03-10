import React from 'react';
import axios from 'axios';
import './App.css';
import MyProfile from './components/MyProfile';
import FollowersList from './components/FollowersList';
import styled from 'styled-components';

const StyledH1 = styled.h1`
color:#f3f1e0;
text-shadow:1px 1px 2px #91B0AE;
`;
  


class App extends React.Component {
 state = {
    user: {},
    followers: []
 };

 //call to get my profile info
componentDidMount() {
  axios.get("https://api.github.com/users/JWNicholson")
    .then(resp => {
      console.log("profile response- ", resp.data);
      this.setState({ user: resp.data});
    });

     //call to get my followers
    axios.get("https://api.github.com/users/JWNicholson/followers")
      .then(resp => {
        console.log("followers response- ", resp.data);
        this.setState({ followers: resp.data});
      });
}


 //render card with data and import MyFollowers and MyInfo
 render() {
   console.log("this.state.user- ", this.state.user);
   console.log("this.state.followers- ", this.state.followers);
   
   return (
    <div className="App">
     
    <StyledH1>GitHub User Info</StyledH1>
    <MyProfile user={this.state.user} />
    <FollowersList 
      key={this.state.followers}
      followers={this.state.followers} 
      />
    
  </div>
   )
  
 }//end render

}//end class App

export default App;
