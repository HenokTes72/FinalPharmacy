import React from 'react';
import styled from 'styled-components';
import { Input, Icon, Button } from 'antd';

import HeaderFieldset from 'components/HeaderFieldSet';

const P = styled.p`
    font-size: 17px;
    margin-bottom: 0px;
`;

const Form = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 50px;
    padding-bottom: 50px;
`;

const Wrapper = styled.div`
    border: 1px solid #e4e6e8;
`;

const MyInput = styled(Input)`
    margin-bottom: 20px;
`;

const MyButton = styled(Button)`
    margin-bottom: 20px;
`

class NewPrescription extends React.Component {
    state = {
        email: '',
        phoneNumber: '',
        drugs: [],
    }

    onNewFieldAdd = () => {
        const drugs = [...this.state.drugs, ''];
        this.setState({
            drugs
        });
    }

    handleDrugInputChange = (index, value) => {
        const { drugs } = this.state;
        drugs[index] = value;
        this.setState({
            drugs
        })
    }

    handleFormInputChange = (key, value) => {
        this.setState({
            [key]: value
        });
    }

    render() {
        const { drugs } = this.state;
        console.log(JSON.stringify(this.state));
        return (
            <Wrapper>
                <HeaderFieldset><P>Add Prescription</P></HeaderFieldset>
                <Form>
                    <MyInput
                        onChange={e => this.handleFormInputChange('email', e.target.value)}
                        placeholder="patient email"
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                    <MyInput
                        onChange={e => this.handleFormInputChange('phoneNumber', e.target.value)}
                        placeholder="patient phone number"
                        prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                    {
                        drugs.map((field, index) => {
                            return (
                                <MyInput
                                    key={index}
                                    onChange={e => this.handleDrugInputChange(index, e.target.value)}
                                    placeholder={`drug ${index+1}`}
                                    prefix={<Icon type="medicine-box" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                />
                            );
                        })
                    }

                    <MyButton onClick={this.onNewFieldAdd} icon="plus" block>Add Drug</MyButton>
                    <MyButton icon="save" block>Save</MyButton>
                </Form>
            </Wrapper>
        );
    }
}

export default NewPrescription;