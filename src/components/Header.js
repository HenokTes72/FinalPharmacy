import React from 'react';
import { Menu, Dropdown, Icon, Badge } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Flex from 'components/Flex';

const HeaderWrapper = styled(Flex)`
    height: 50px;
    padding: 10px;
    flex-grow: 1;
`;

const RightHeader = styled(Flex)``;

const NotificationWrapper = styled.div`
    margin-right: 20px;
`;

const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to='/login'>Log out</Link>
      </Menu.Item>
    </Menu>
  );

class Header extends React.Component {
    render() {
        const { toggleSidebar } = this.props;
        return(
            <HeaderWrapper justifyContent="space-between" alignItems="center">
                <Icon onClick={toggleSidebar} style={{ cursor: 'hand' ,fontSize: '20px' }} type="menu" />
                <RightHeader alignItems="center">
                    <NotificationWrapper>
                        <Badge count={6}>
                            <Icon style={{ fontSize: '20px' }} type="notification" />
                        </Badge>
                    </NotificationWrapper>
                    <Icon style={{ marginRight: '5px', fontSize: '20px' }} type="user" />
                    <Dropdown overlay={menu}>
                        <span> Henok <Icon style={{ fontSize: '15px' }} type="down" /></span>
                    </Dropdown>
                </RightHeader>
            </HeaderWrapper>
        );
    }
}

export default Header;