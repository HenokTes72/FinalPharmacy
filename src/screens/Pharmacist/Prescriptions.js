import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

import PrescriptionHeader from 'components/HeaderFieldSet';
import Prescription from 'components/Prescription';

const { Search } = Input;

const Wrapper = styled.div`
    border: 1px solid #e4e6e8;
`;

const P = styled.p`
    font-size: 17px;
    margin-bottom: 0px;
`;

const Item = styled.div`
    margin-bottom: 20px;
`;

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

class Prescriptions extends React.Component {
    render() {
        return(
            <Wrapper>
                <PrescriptionHeader><P>Prescriptions</P></PrescriptionHeader>
                <Content>
                    <Item>
                        <Search size="large" placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                    </Item>
                    <Prescription />
                    <Prescription />
                    <Prescription />
                </Content>
            </Wrapper>
        );
    }
}

export default Prescriptions;