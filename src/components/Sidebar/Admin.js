import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
 
class AdminSidebar extends React.Component {
    render() {
        const { openKeys, onOpenChange } = this.props;
        return(
            <Menu
                theme="dark"
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
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
                    <Menu.Item key="1"><Link to='/admin/drugs'>All</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/admin/drug/add'>Add</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/admin/drugs/expired'>Expired</Link></Menu.Item>
                    <Menu.Item key="4"><Link to='/admin/drugs/selled'>Selled</Link></Menu.Item>
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
                    <Menu.Item key="5"><Link to='/admin/pharmacists'>All</Link></Menu.Item>
                    <Menu.Item key="6"><Link to='/admin/pharmacist/add'>Add</Link></Menu.Item>
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
                    <Menu.Item key="9"><Link to='/admin/doctors'>All</Link></Menu.Item>
                    <Menu.Item key="10"><Link to='/admin/doctor/add'>Add</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="11">
                    <Link to='/admin/categories'>
                        <Icon type="appstore" />
                        Categories
                    </Link>
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
                    <Menu.Item key="13"><Link to='/admin/feedbacks'>All</Link></Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default AdminSidebar;