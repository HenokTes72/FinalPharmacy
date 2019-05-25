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
    title: 'First Name',
    dataIndex: 'firstname',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastname',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Sex',
    dataIndex: 'sex',
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
    firstname: 'John',
    lastname: 'Brown',
    age: '36',
    sex: 'F',
    edit: <Button type='primary'>Edit</Button>,
    delete: <Button type='danger'>Delete</Button>
  },
  {
    key: '2',
    firstname: 'Jim',
    lastname: 'Green',
    age: '35',
    sex: 'F',
    edit: <Button type='primary'>Edit</Button>,
    delete: <Button type='danger'>Delete</Button>
  },
  {
    key: '3',
    firstname: 'John',
    lastname: 'Brown',
    age: '40',
    sex: 'M',
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