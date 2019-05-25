import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
 
class DoctorSidebar extends React.Component {
    render() {
        const { openKeys, onOpenChange } = this.props;
        return(
            <Menu
                theme="dark"
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
            >
                <Menu.Item key="1">
                    <Link to='/doctor'>
                        <Icon type="medicine-box" />
                        Drugs
                    </Link>
                </Menu.Item>

                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="form" />
                            <span>Prescription</span>
                        </span>
                    }
                >
                    <Menu.Item key="2"><Link to='/doctor/prescription/all'>All</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/doctor/prescription/new'>New</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="4">
                    <Link to='/doctor/rules'>
                        <Icon type="info-circle" />
                        Rules
                    </Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to='/doctor/news'>
                        <Icon type="message" />
                        News
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default DoctorSidebar;