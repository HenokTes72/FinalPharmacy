import React from 'react';
import styled, { css } from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import Sidebar from 'components/Sidebar/index';
import Header from 'components/Header';
import Flex from 'components/Flex';
import Message from 'components/Message';
import DisplayDrugs from 'screens/Pharmacist/Drugs/Display';
import DrugSell from 'screens/Pharmacist/Sell';
import DisplayRules from 'screens/Pharmacist/Feedbacks';
import DisplayNews from 'screens/Pharmacist/Feedbacks';
import Prescriptions from 'screens/Pharmacist/Prescriptions';
import NotificationHeader from 'components/HeaderFieldSet';

const Wrapper = styled(Flex)``;

const RightWrapper = styled.div`
    flex-grow: 1;
    position: relative;
    left: ${props => props.left || 0}
    ${props => props.width &&
        css`
            max-width: calc(100% - ${props.width}px);
        `
    }
`;

const Content = styled(Flex)`
    background-color: #f4f5f6;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 15px;
    padding-right: 15px;
`;

const NotificationWrapper = styled.div`
    min-width: 300px;
    max-width: 300px;
    border: 1px solid #e4e6e8;
`;

const NotificationContent = styled.div`
    background-color: white;
    padding: 10px;
`;

const MainWrapper = styled.div`
    flex-grow: 1;
    padding-right: 10px;
`;

const NotificationP = styled.p`
    font-size: 17px;
    margin-bottom: 0px;
`;


class DoctorDashboard extends React.Component {
    state = {
        showSidebar: true
    }

    toggleSidebar = () => {
        this.setState({
            showSidebar: !this.state.showSidebar
        })
    }

    render() {
        const { showSidebar } = this.state;
        return(
            <Wrapper>
                <Sidebar type="pharma" showSidebar={showSidebar}/>
                <RightWrapper left={showSidebar ? '200px' : '0px'} width={showSidebar && 200}>
                    <Header type="doctor" toggleSidebar={this.toggleSidebar}/>
                    <Content>
                        <MainWrapper>
                            <Switch>
                                <Route exact path='/pharma' render={() => 
                                    <DrugSell type='doctor' />
                                }/>
                                <Route path='/pharma/sell' render={
                                    () => <Redirect to='/pharma' />
                                } />
                                <Route path='/pharma/prescriptions' component={Prescriptions} />
                                <Route path='/pharma/rules' component={DisplayRules} />
                                <Route path='/pharma/drugs' component={DisplayDrugs} />
                                <Route path='/pharma/news' component={DisplayNews} />
                            </Switch>
                        </MainWrapper>
                        <NotificationWrapper>
                            <NotificationHeader>
                                <NotificationP>NOTIFICATIONS</NotificationP>
                            </NotificationHeader>
                            <NotificationContent>
                                <Message bgColor="#bed35f"/>
                                <Message bgColor="#7b7b7b" />
                                <Message bgColor="#6bd5db" />
                                <Message bgColor="#bed35f"/>
                                <Message bgColor="#7b7b7b" />
                                <Message bgColor="#6bd5db" />
                            </NotificationContent>
                        </NotificationWrapper>
                    </Content>
                </RightWrapper>
            </Wrapper>
        );
    }
}

export default DoctorDashboard;