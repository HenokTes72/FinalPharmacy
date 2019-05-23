import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

import Flex from 'components/Flex';

const Wrapper = styled(Flex)`
    padding: 10px;
    background-color: ${props => props.bgColor || 'brown'};
    margin-bottom: 15px;
`;

const P = styled.p`
    margin-bottom: 0px;
    margin-right: 5px;
`;

function Message(props) {
    return(
        <Wrapper {...props}>
            <P>Oh snap! Change  a few things up and try submitting again</P>
            <Icon style={{ color: 'red', fontSize: '11px', fontWeight: 'bold' }} type='close' />
        </Wrapper>
    );
}

export default Message;