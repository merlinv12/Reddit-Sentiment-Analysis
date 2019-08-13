import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';


const axios = require('axios');
//svgs from font-awesome
const ToxButton = styled.button`
background:url('./images/bh.svg') no-repeat;
color: 'black';
background-color: ${props =>
    props.toxic === null ? '' : props.toxic === true ? 'red' : 'white'};
width: 25px;
height: 25px;
border: none;
border-radius: 15px;
`

const PositiveButton = styled.button`
background:url('./images/smile.svg') no-repeat;
color: 'black';
background-color: ${props =>
    props.positive === null ? '' : props.positive === true ? 'green' : 'white'};
width: 25px;
height: 25px;
padding: 10px
border: none;
border-radius: 15px;
`




const updateComment = function(id, val){
    axios.put(`/api/comment/${id}`, {
        [val]: this.state.val  
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            reddit_id: this.props.commentdata.reddit_id,
            toxic: null,
            positive: null 
        }
        this.posClick = this.posClick.bind(this);
    }

    compnentDidUpdate(){
        axios.put(`/api/comment/${this.state.reddit_id}`, {
            positive: this.state.positive,
            toxic: this.state.toxic
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    posClick(){
        // console.log(this.state.positive)
        if (this.state.positive === null){
            this.setState({positive: true})
        } else {
            this.setState(prevState => ({positive: !prevState.positive}));
        }
    }

    toxClick(){
        if (this.state.toxic === null){
            this.setState({toxic: true})
        } else {
            this.setState(prevState => ({toxic: !prevState.toxic}));
        }
    }

    render(){
        let {comment, intensity, subreddit, reddit_id} = this.props.commentdata;
        return (
            <TableRow>
                <TableCell><ToxButton toxic={this.state.toxic} onClick={() => this.toxClick()}></ToxButton><PositiveButton positive={this.state.positive} onClick={() => this.posClick()}></PositiveButton></TableCell>
                <TableCell>{comment}</TableCell>
                <TableCell>{subreddit}</TableCell>
                <TableCell>{intensity.neg}</TableCell>
                <TableCell>{intensity.neu}</TableCell>
                <TableCell>{intensity.pos}</TableCell>
                <TableCell>{intensity.compound}</TableCell>
            </TableRow>
        )
    }
}

export default Comment;