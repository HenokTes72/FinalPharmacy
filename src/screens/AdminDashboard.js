import React from 'react';
import styled, { css } from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Sidebar from 'components/Sidebar/index';
import Header from 'components/Header';
import Flex from 'components/Flex';
import Message from 'components/Message';
import RegisterDoctor from 'screens/RegisterDoctor';
import RegisterDrug from 'screens/Drugs/Add';
import DisplayDrugs from 'screens/Drugs/Display';
import ExpiredDrugs from 'screens/Drugs/Expired';
import SelledDrugs from 'screens/Drugs/Selled';
import DisplayDoctors from 'screens/Doctor/Display';
import AddDoctor from 'screens/Doctor/Add';
import DisplayPharmacists from 'screens/Pharmacist/Display';
import AddPharmacist from 'screens/Pharmacist/Add';
import Categories from 'screens/Categories';
import Feedbacks from 'screens/Feedbacks';
import AddFeedback from 'screens/AddFeedback';
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


class AdminDashboard extends React.Component {
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
                <Sidebar showSidebar={showSidebar}/>
                <RightWrapper left={showSidebar ? '200px' : '0px'} width={showSidebar && 200}>
                    <Header toggleSidebar={this.toggleSidebar}/>
                    <Content>
                        <MainWrapper>
                            <Switch>
                                <Route exact path='/dashboard' component={RegisterDrug} />
                                <Route path='/dashboard/feedbacks' component={Feedbacks} />
                                <Route path='/dashboard/feedback/add' component={AddFeedback} />
                                <Route path='/dashboard/register/doctor' component={RegisterDoctor} />
                                <Route exact path='/dashboard/drugs' component={DisplayDrugs} />
                                <Route path='/dashboard/drugs/expired' component={ExpiredDrugs} />
                                <Route path='/dashboard/drugs/selled' component={SelledDrugs} />
                                <Route path='/dashboard/drug/add' component={RegisterDrug} />
                                <Route path='/dashboard/doctors' component={DisplayDoctors} />
                                <Route path='/dashboard/categories' component={Categories} />
                                <Route path='/dashboard/doctor/add' component={AddDoctor} />
                                <Route path='/dashboard/pharmacists' component={DisplayPharmacists} />
                                <Route path='/dashboard/pharmacist/add' component={AddPharmacist} />
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

export default AdminDashboard;