import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

import FieldSet from 'components/HeaderFieldSet';
import Prescription from 'components/Prescription';

const Search = Input.Search;

const Wrapper = styled.div`
    border: 1px solid #e4e6e8;
`;

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const P = styled.p`
    font-size: 17px;
    margin-bottom: 0px;
`;

const TableWrapper = styled.div`
    margin-top: 25px;
`;

class DisplayPrescriptions extends React.Component {
    render() {
        return(
            <Wrapper>
                <FieldSet><P>All Drugs</P></FieldSet>
                <Content>
                    <Search size="large" placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                    <TableWrapper>
                        {
                            [1,2,3,4].map(val => <Prescription isDoctor={true} />)
                        }
                    </TableWrapper>
                </Content>
            </Wrapper>
        );
    }
}

export default DisplayPrescriptions;