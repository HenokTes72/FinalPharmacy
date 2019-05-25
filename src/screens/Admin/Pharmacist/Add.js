
import React from 'react';
import styled from 'styled-components';
import { Icon, Input, Button } from 'antd';

import Flex from 'components/Flex';
import RegisterHeader from 'components/HeaderFieldSet';

const P = styled.p`
    font-size: 17px;
    margin-bottom: 0px;
`;

const Wrapper = styled.div`
    border: 1px solid #e4e6e8;
`;

const Form = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 50px;
    padding-bottom: 50px;
`;

const FormRow = styled(Flex)`
    margin-bottom: 25px;
`;


class RegisterPharmacist extends React.Component {
    render() {
        return(
            <Wrapper>
                <RegisterHeader><P>Add Pharmacist</P></RegisterHeader>
                <Form>
                    <FormRow justifyContent='space-between' alignItems="center">
                        <Input
                            style={{ marginRight: '15px', marginLeft: '15px' }}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />
                        <Input
                            style={{ marginRight: '15px', marginLeft: '15px' }}
                            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Phone"
                        />
                    </FormRow>
                    <FormRow justifyContent='space-between' alignItems="center">
                        <Input
                            style={{ marginRight: '15px', marginLeft: '15px' }}
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Main"
                        />
                        <Input
                            style={{ marginRight: '15px', marginLeft: '15px' }}
                            prefix={<Icon type="euro" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Euro"
                        />
                    </FormRow>
                    <FormRow justifyContent='space-between' alignItems="center">
                        <Input
                            style={{ marginRight: '15px', marginLeft: '15px' }}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />
                        <Input
                            style={{ marginRight: '15px', marginLeft: '15px' }}
                            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Phone"
                        />
                    </FormRow>
                    <FormRow>
                        <Button size="large" style={{ marginRight: '15px', marginLeft: '15px' }} block>SAVE</Button>
                    </FormRow>
                </Form>
            </Wrapper>
        );
    }
}

export default RegisterPharmacist;