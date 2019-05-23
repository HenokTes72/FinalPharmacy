import React from 'react';
import styled from 'styled-components';
import { Input, Table, Button } from 'antd';

import FieldSet from 'components/HeaderFieldSet';

const Search = Input.Search;

const Wrapper = styled.div`
    border: 1px solid #e4e6e8;
`;

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const P = styled.p`
    font-size: 17px;
    margin-bottom: 0px;
`;

const TableWrapper = styled.div`
    margin-top: 25px;
`;
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

class DisplayDoctors extends React.Component {
    render() {
        return(
            <Wrapper>
                <FieldSet><P>All Doctors</P></FieldSet>
                <Content>
                    <Search size="large" placeholder="input search text" onSearch={value => console.log(value)} enterButton />
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

export default DisplayDoctors;