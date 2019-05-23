import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

import HeaderFieldSet from 'components/HeaderFieldSet';

const { TextArea } = Input;

const Content = styled.div`
    width: 500px
    margin: 0 auto;
    padding-bottom: 15px;
    padding-top: 30px;
`;

const Wrapper = styled.div`
    border: 1px solid #e4e6e8;
`;

const P = styled.p`
    font-size: 14px;
    margin-bottom: 0px;
`;

const Item = styled.div`
    margin-bottom: 30px;
`;

class AddFeedback extends React.Component {
    render() {
        return(
            <Wrapper>
                <HeaderFieldSet><P>ADD FEEDBACK</P></HeaderFieldSet>
                <Content>
                    <Item>
                        <P>Title</P>
                        <Input placeholder="Enter title" />
                    </Item>
                    <Item>
                        <P>Description</P>
                        <TextArea
                            placeholder="Description"
                            autosize={{ minRows: 4, maxRows: 6 }}
                        />
                    </Item>
                </Content>
            </Wrapper>
        );
    }
}

export default AddFeedback;