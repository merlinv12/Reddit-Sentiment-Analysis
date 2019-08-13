import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class Comment extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {comment, intensity, subreddit} = this.props.commentdata
        return (
            <TableRow>
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