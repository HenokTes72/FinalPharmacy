import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
 
class PharmacistSidebar extends React.Component {
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
                    <Link to='/pharma'>
                        <Icon type="shop" />
                        Sell
                    </Link>
                </Menu.Item>

                <Menu.Item key="2">
                    <Link to='/pharma/prescriptions'>
                        <Icon type="profile" />
                        Prescriptions
                    </Link>
                </Menu.Item>

                <Menu.Item key="3">
                    <Link to='/pharma/rules'>
                        <Icon type="info-circle" />
                        Rules
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to='/pharma/news'>
                        <Icon type="message" />
                        News
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default PharmacistSidebar;