import React from 'react';
import styled from 'styled-components';
import { Input, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Flex from 'components/Flex';
import { IP_ADDRESS } from 'utils/config';

const Option = Select.Option;

// axios.defaults.withCredentials = true;

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
    background-color: #223658;
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
    margin-bottom: 20px;
    background-color: #223658;
    width: 100%;
`;

const P = styled.p`
    font-size: 15px;
    margin-bottom: 15px;
    text-align: right;
`;

const Heading = styled.div`
    margin-bottom: 30px;
`;

const MySelect = styled(Select)`
    margin-bottom: 20px;
    width: 100%;
`;

class AdminLogin extends React.Component {

    state = {
        email: '',
        password: '',
        role: 'admin'
    }

    handleInputchange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    handleSelectChange = value => {
        this.handleInputchange('role', value);
    }

    login = () => {
        const { email, password, role } = this.state;

        console.log(`http://${IP_ADDRESS}/${role}/login`);

        axios.post(
            `http://${IP_ADDRESS}/${role}/login`,
            { email, password }
        ).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const { role } = this.state;
        return(
            <Wrapper justifyContent="center" alignItems="center">
                <Modal>
                    <Header justifyContent="center" alignItems="center">
                        <H2>Sign In</H2>
                    </Header>
                    <Content>
                        <Heading>
                            <MySelect
                                onChange={this.handleSelectChange}
                                showSearch
                                placeholder="Select a role"
                            >
                                <Option value="admin">Admin</Option>
                                <Option value="doctor">Doctor</Option>
                                <Option value="pharma">Pharmacist</Option>
                            </MySelect>
                            <MyInput onChange={(e) => this.handleInputchange('email', e.target.value)} placeholder="User name" />
                            <MyInput onChange={(e) => this.handleInputchange('password', e.target.value)} placeholder="Password" />
                            <P>Forgot username/password? </P>
                            <Link to={`/${role}`}><MyButton onClick={this.login} ><span style={{ color: 'white' }}>SIGN IN</span></MyButton></Link>
                        </Heading>
                    </Content>
                </Modal>
            </Wrapper>
        );
    }
}

export default AdminLogin;