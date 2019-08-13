import React from "react";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Comment from "./Comment.jsx";
import styled from 'styled-components'


const CenteredTable = styled.div`
margin: 0 auto;
max-width: 1000px;
`

const CommentsList = props => {
  if (props.data.length === 0){
    return (
      <div></div>
    )
  } else {
    return (
      <CenteredTable>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Your Rating</TableCell>
              <TableCell>Comment</TableCell>
              <TableCell align="right">Sub Reddit</TableCell>
              <TableCell align="right">Negative</TableCell>
              <TableCell align="right">Neutral</TableCell>
              <TableCell align="right">Positive</TableCell>
              <TableCell align="right">Compound</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map(comment => {
              return <Comment commentdata={comment} key={comment.reddit_id} />;
            })}
          </TableBody>
        </Table>
      </CenteredTable>
    );
  }
};

export default CommentsList;
