import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';

import Flex from 'components/Flex';

const Wrapper = styled(Flex)`
    height: 100vh;
`;

const Modal = styled.div`
    box-shadow: 0 1px 3px #ccc;
    width: 350px;
    border-radius: 10px;
`;

const Header = styled(Flex)`
    height: 70px;
    background-color: #3fbc20;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-bottom: 15px;
`;

const H2 = styled.h2`
    color: white;
    margin-bottom: 0px;
`;

const Content = styled.div`
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: white;
    padding: 20px;
`;

const MyInput = styled(Input)`
    height: 35px;
    border-radius: 20px;
    margin-bottom: 15px;
    background-color: #dceaea;
    padding-left: 25px;
`;

const MyButton = styled(Button)`
    height: 35px;
    border-radius: 20px;
    margin-bottom: 15px;
    background-color: #3fbc20;
    width: 100%;
`;

const StyledP = styled.p`
    font-size: 14px;
    margin-bottom: 0px;
`;

const Heading = styled.div`
    margin-bottom: 50px;
`;

const Footer = styled(Flex)`
    padding: 20px;
`;

const H3 = styled.h3`
    margin-bottom: 0px;
    color: #3fbc20;
`;

class AdminSignup extends React.Component {
    render() {
        return(
            <Wrapper justifyContent="center" alignItems="center">
                <Modal>
                    <Header justifyContent="center" alignItems="center">
                        <H2>Sign In</H2>
                    </Header>
                    <Content>
                        <Heading>
                            <MyInput placeholder="User name" />
                            <MyInput placeholder="Password" />
                            <MyInput placeholder="Email" />
                            <MyInput placeholder="Contact" />
                            <MyButton><span style={{ color: 'white' }}>SIGN UP</span></MyButton>
                        </Heading>
                        <Footer alignItems="center" flexDirection="column">
                            <StyledP>
                                You have an account
                            </StyledP>
                            <Link to='/admin/login'><H3>SIGN IN</H3></Link>
                        </Footer>   
                    </Content>
                </Modal>
            </Wrapper>
        );
    }
}

export default AdminSignup;