import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import CommentsList from './CommentsList.jsx';
import styled from 'styled-components'

const axios = require('axios');

const SearchBar = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-width: 1000px;
max-width: 1000px;
`

const TextArea = styled.div`
  font-family: Roboto;
  font-weight: normal;
`

class RedditComments extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendRequest = this.sendRequest.bind(this);

  }

  handleChange(event) {
    this.setState({username: event.target.value });
  }

  sendRequest(){
      let {username} = this.state;
      axios.post('/api/username', {
          username: username
      })
      .then((response) => {
        console.log(response);
        this.setState({data: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <TextArea>
          <h1>Are you Toxic?</h1>
          <h2>Sentiment Analysis on Reddit Comments</h2>
          <p><b>How This Works:</b></p>
          <p>
            1. Enter a Reddit Username in the search bar and click Analyze. <br></br>
            2. The app will retreive 10 comments from this user and perform sentiment analysis using Vader, then return the data in a table. <br></br>
            3. Click the Toxic Icon if you think the comment is negative, or the happy face icon if you think the comment is postive.
          </p>
        </TextArea>
        <SearchBar>
        <TextField
          id="standard-full-width"
          label="Reddit Username"
          onChange={this.handleChange}
          margin="normal"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={this.sendRequest}>Analyze</Button>
        </SearchBar>
        <CommentsList data={this.state.data} />
      </div>
    );
  }
}

export default RedditComments;
