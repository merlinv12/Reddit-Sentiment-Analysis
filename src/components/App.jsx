import React from 'react';
import RedditComments from './RedditComments.jsx';
import styled from 'styled-components';

const FlexBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
class App extends React.Component{
    render(){
        return(
            <FlexBox>
                <RedditComments />
            </FlexBox>
        )
    }
}

export default App;
