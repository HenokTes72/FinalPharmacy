import React from 'react';
import styled from 'styled-components';
import { Button, AutoComplete, Input } from 'antd';

import HeaderFieldSet from 'components/HeaderFieldSet';

const Content = styled.div`
    box-shadow: 0 0 10px #ccc;
    border-radius: 5px;
    background-color: white;
    width: 600px;
    margin: 0 auto;
    padding-right: 25px;
    padding-left: 25px;
    padding-bottom: 15px;
    padding-top: 30px;
    margin-top: 50px;
    margin-bottom: 30px;
`;

const Wrapper = styled.div`
    border: 1px solid #e4e6e8;
`;

const P = styled.p`
    font-size: 13px;
    margin-bottom: 5px;
`;

const HeadP = styled(P)`
    font-size: 17px;
`;

const Item = styled.div`
    margin-bottom: 20px;
`;

const MyAutocomplete = styled(AutoComplete)`
    width: 100%;
`;

const FooterItem = styled.div`
    margin-top: 40px;
    margin-bottom: 10px;
`;

class DrugSell extends React.Component {
    render() {
        const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

        return(
            <Wrapper>
                <HeaderFieldSet><HeadP>Sell Drug</HeadP></HeaderFieldSet>
                <Content>
                    <Item>
                        <P>Drug name</P>
                        <MyAutocomplete
                            dataSource={dataSource}
                            onSearch={this.handleSearch}
                            placeholder="drug name"
                            filterOption={(inputValue, option) =>
                                option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
                    </Item>
                    <Item>
                        <P>Number</P>
                        <Input placeholder="number" />
                    </Item>
                    <Item >
                        <P>Price</P>
                        <Input placeholder="price" />
                    </Item>
                    <FooterItem>
                        <Button size="large" block>Submit</Button>
                    </FooterItem>
                </Content>
            </Wrapper>
        );
    }
}

export default DrugSell;