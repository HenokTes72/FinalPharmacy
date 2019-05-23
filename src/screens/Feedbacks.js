import React from 'react';
import styled from 'styled-components';

import FeedbackHeader from 'components/HeaderFieldSet';
import Feedback from 'components/Feedback';

const Wrapper = styled.div`
    border: 1px solid #e4e6e8;
`;

const P = styled.p`
    font-size: 17px;
    margin-bottom: 0px;
`;

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

class Feedbacks extends React.Component {
    render() {
        return(
            <Wrapper>
                <FeedbackHeader><P>FEEDBACKS</P></FeedbackHeader>
                <Content>
                    <Feedback />
                    <Feedback />
                    <Feedback />
                </Content>
            </Wrapper>
        );
    }
}

export default Feedbacks;