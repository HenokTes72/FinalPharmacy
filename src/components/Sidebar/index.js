import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd';
import AdminSidebar from 'components/Sidebar/Admin';
import DoctorSidebar from 'components/Sidebar/Doctor';
import PharmaSidebar from 'components/Sidebar/Pharmacist';
import moment from 'moment';

import Flex from 'components/Flex';
import CurrentTime from 'components/Time';


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
        const { openKeys } = this.state;
        const { showSidebar, type } = this.props;
        return (
            showSidebar ? 
            (
                <Wrapper>
                    <Header alignItems="center" justifyContent="center">
                        <StyledH2>{type === 'admin' ? 'Admin' : 'Doctor' }</StyledH2>
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
                        {
                            ((type) => {
                                switch(type) {
                                    case 'admin': return <AdminSidebar 
                                        openKeys={openKeys} 
                                        onOpenChange={this.onOpenChange} />;
                                    case 'doctor': return <DoctorSidebar
                                        openKeys={openKeys} 
                                        onOpenChange={this.onOpenChange} />;
                                    case 'pharma': return <PharmaSidebar
                                        openKeys={openKeys} 
                                        onOpenChange={this.onOpenChange} />;
                                    default : return <div></div>
                                }
                            })(type)
                        }
                        
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