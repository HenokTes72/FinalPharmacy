import React from 'react';
import { Button, Table, Icon } from 'antd';
import styled from 'styled-components';

import Flex from 'components/Flex';

const Wrapper = styled.div`
    // box-shadow: 0px 3px 5px #ccc;
    border: 1px solid rgba(34,54,88, .5);
    margin-bottom: 30px;
`;

const Header = styled(Flex)`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #223658;
`;

const H3 = styled.h3`
    color: white;
    margin-bottom: 0px;
`;


const Footer = styled(Flex)`
    padding-top: 10px;
    padding-bottom: 10px;
`;

const MRButton = styled(Button)`
    margin-right: 5px;
    width: 120px;
    height: 40px;
`;

const P = styled.p`
    color: white;
    margin-bottom: 0px;
    font-size: 15px;
`;

const MLButton = styled(Button)`
    margin-left: 5px;
    width: 120px;
    height: 40px;
`;

const MyIcon = styled(Icon)`
    margin-right: 15px;
`;

const PrescribedSpan = styled.span`
    font-size: 13px;
    font-style: italic;
`;

const columns = [
    {
      title: 'Prescriptions',
      dataIndex: 'prescription',
      render: text => <Flex justifyContent="space-between">
        <span><MyIcon type="medicine-box"></MyIcon>{text}</span>
        <PrescribedSpan>Dr. Jon S</PrescribedSpan>
      </Flex>
    }
  ];
  
  const data = [
    {
      key: '1',
      prescription: 'Amoxacilin 230mg'
    },
    {
      key: '2',
      prescription: 'Parastamol 150mg'
    }
  ];

class Prescription extends React.Component {
    render() {
        const { isDoctor } = this.props;
        return(
            <Wrapper>
                <Header justifyContent="space-between" alignItems="center">
                    <H3>John Doe</H3>
                    <P>9/5/2019</P>
                </Header>
                <Table
                    size="middle"
                    columns={columns}
                    dataSource={data}
                    bordered
                    pagination={false}
                />
                {
                    isDoctor && (
                        <Footer justifyContent="center">
                            <MRButton type="primary">Edit</MRButton>
                            <MLButton type="danger">Delete</MLButton>
                        </Footer>
                    )
                }
                
            </Wrapper>
        );
    }
}

export default Prescription;