import React from 'react';
import styled from 'styled-components';
import { Avatar, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Flex from 'components/Flex';
import CurrentTime from 'components/Time';

const SubMenu = Menu.SubMenu;


const Wrapper = styled.div`
    width: 200px;
    height: 100vh;
    background-color: #091933;
    position: fixed;
`;

const Header = styled(Flex)`
    height: 50px;
`;

const Logo = styled(Flex)`
    padding-left: 10px;
    padding-bottom: 15px;
    padding-top: 10px;
    border-bottom: 1px solid white;
`;

const StyledH3 = styled.h3`
    color: white;
    margin-bottom: 0px;
`;

const StyledH2 = styled.h2`
    color: white;
    margin-bottom: 0px;
`;

const StyledP = styled.p`
    color: white;
    margin-bottom: 0px;
`;

const Time = styled(Flex)`
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
`;

const Circle = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #57c438;
    margin-right: 5px;
`;

const SubHeader = styled.div`
    background-color: #142b51;
`;

const Footer = styled.div`
    padding: 5px;
    margin-top: 15px;
`;


class Sidebar extends React.Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: [],
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.setState({ openKeys });
        } else {
          this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
          });
        }
    };

    render() {
        const { showSidebar } = this.props;
        return (
            showSidebar ? 
            (
                <Wrapper>
                    <Header alignItems="center" justifyContent="center">
                        <StyledH2>Pharmacy</StyledH2>
                    </Header>
                    <SubHeader>
                        <Logo alignItems="center">
                            <Avatar style={{ marginRight: '15px' }} size="large" icon="user" />
                            <div>
                                <StyledH3>Hello John</StyledH3>
                                <Flex alignItems="center">
                                    <Circle />
                                    <StyledP>online</StyledP>
                                </Flex>
                            </div>
                        </Logo>
                        <Time alignItems="center" flexDirection="column">
                            <CurrentTime />
                            <StyledP>{moment().format('DD/MM/YYYY')}</StyledP>
                        </Time>
                        {/* <SearchWrapper>
                            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                        </SearchWrapper> */}
                    </SubHeader>
                    <Footer>
                        <Menu
                            theme="dark"
                            mode="inline"
                            openKeys={this.state.openKeys}
                            onOpenChange={this.onOpenChange}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="medicine-box" />
                                        <span>Drugs</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="1"><Link to='/dashboard/drugs'>All</Link></Menu.Item>
                                <Menu.Item key="2"><Link to='/dashboard/drug/add'>Add</Link></Menu.Item>
                                <Menu.Item key="3"><Link to='/dashboard/drugs/expired'>Expired</Link></Menu.Item>
                                <Menu.Item key="4"><Link to='/dashboard/drugs/selled'>Selled</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                    <Icon type="woman" />
                                    <span>Pharmacist</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="5"><Link to='/dashboard/pharmacists'>All</Link></Menu.Item>
                                <Menu.Item key="6"><Link to='/dashboard/pharmacist/add'>Add</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        <span>Doctor</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="9"><Link to='/dashboard/doctors'>All</Link></Menu.Item>
                                <Menu.Item key="10"><Link to='/dashboard/doctor/add'>Add</Link></Menu.Item>
                            </SubMenu>
                            <Menu.Item key="11">
                                <Icon type="appstore" />
                                <span><Link style={{ color: '#f2f4f4', opacity: '0.7' }} to='/dashboard/categories'>Categories</Link></span>
                            </Menu.Item>
                            <SubMenu
                                key="sub4"
                                title={
                                    <span>
                                        <Icon type="info-circle" />
                                        <span>Rules & Regulations</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="12">Add</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub5"
                                title={
                                    <span>
                                        <Icon type="message" />
                                        <span>Feedacks</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="13"><Link to='/dashboard/feedbacks'>All</Link></Menu.Item>
                                <Menu.Item key="14"><Link to='/dashboard/feedback/add'>Add</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Footer>
                </Wrapper>
            )
            : 
            (
                <div></div>
            )
        );
    }
}

export default Sidebar;