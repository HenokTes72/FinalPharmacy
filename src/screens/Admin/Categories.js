import React from 'react';
import styled from 'styled-components';
import { Menu, Icon, Dropdown, Button, Table } from 'antd';

import Flex from 'components/Flex';
import FeedbackHeader from 'components/HeaderFieldSet';

const Wrapper = styled.div`
    border: 1px solid #e4e6e8;
`;

const P = styled.p`
    font-size: 17px;
    margin-bottom: 0px;
`;

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const TableWrapper = styled.div`
    margin-top: 25px;
`;


const menu = (
    <Menu>
      <Menu.Item key="1">
        <Icon type="user" />
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="user" />
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="user" />
        3rd item
      </Menu.Item>
    </Menu>
  );
  

  const columns = [
    {
      title: 'Title',
      dataIndex: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'money',
    },
    {
      title: 'Manfactured Date',
      dataIndex: 'address',
    },
    {
      title: 'Expired Date',
      dataIndex: 'expdate',
    },
    {
      title: 'Edit',
      dataIndex: 'edit'
    },
    {
      title: 'Delete',
      dataIndex: 'delete'
    }
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
      address: '3/2/1998',
      expdate: '3/2/1998',
      edit: <Button type='primary'>Edit</Button>,
      delete: <Button type='danger'>Delete</Button>
    },
    {
      key: '2',
      name: 'Jim Green',
      money: '￥1,256,000.00',
      address: '3/2/1998',
      expdate: '3/2/1998',
      edit: <Button type='primary'>Edit</Button>,
      delete: <Button type='danger'>Delete</Button>
    },
    {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: '3/2/1998',
      expdate: '3/2/1998',
      edit: <Button type='primary'>Edit</Button>,
      delete: <Button type='danger'>Delete</Button>
    },
  ];


class Categories extends React.Component {
    render() {
        return(
            <Wrapper>
                <FeedbackHeader>
                    <P>Categories</P>
                </FeedbackHeader>
                <Content>
                <Flex justifyContent='flex-end'>
                    <Dropdown overlay={menu}>
                        <Button>
                            Categories <Icon type="down" />
                        </Button>
                    </Dropdown>
                </Flex>
                <TableWrapper>
                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered
                        pagination={false}
                    />
                    </TableWrapper>
                </Content>
            </Wrapper>
        );
    }
}

export default Categories;