import React from 'react';
import styled, { css } from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Sidebar from 'components/Sidebar/index';
import Header from 'components/Header';
import Flex from 'components/Flex';
import Message from 'components/Message';
import RegisterDoctor from 'screens/Admin/Doctor/Add';
import RegisterDrug from 'screens/Admin/Drugs/Add';
import DisplayDrugs from 'screens/Admin/Drugs/Display';
import ExpiredDrugs from 'screens/Admin/Drugs/Expired';
import SelledDrugs from 'screens/Admin/Drugs/Selled';
import DisplayDoctors from 'screens/Admin/Doctor/Display';
import AddDoctor from 'screens/Admin/Doctor/Add';
import DisplayPharmacists from 'screens/Admin/Pharmacist/Display';
import AddPharmacist from 'screens/Admin/Pharmacist/Add';
import Categories from 'screens/Admin/Categories';
import Feedbacks from 'screens/Admin/Feedbacks';
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
                <Sidebar type="admin" showSidebar={showSidebar}/>
                <RightWrapper left={showSidebar ? '200px' : '0px'} width={showSidebar && 200}>
                    <Header type="admin" toggleSidebar={this.toggleSidebar}/>
                    <Content>
                        <MainWrapper>
                            <Switch>
                                <Route exact path='/admin' component={RegisterDrug} />
                                <Route path='/admin/feedbacks' component={Feedbacks} />
                                <Route path='/admin/register/doctor' component={RegisterDoctor} />
                                <Route exact path='/admin/drugs' component={DisplayDrugs} />
                                <Route path='/admin/drugs/expired' component={ExpiredDrugs} />
                                <Route path='/admin/drugs/selled' component={SelledDrugs} />
                                <Route path='/admin/drug/add' component={RegisterDrug} />
                                <Route path='/admin/doctors' component={DisplayDoctors} />
                                <Route path='/admin/categories' component={Categories} />
                                <Route path='/admin/doctor/add' component={AddDoctor} />
                                <Route path='/admin/pharmacists' component={DisplayPharmacists} />
                                <Route path='/admin/pharmacist/add' component={AddPharmacist} />
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