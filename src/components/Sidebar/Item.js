import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Flex from 'components/Flex';

const StyledP = styled.p`
    color: white;
    margin-bottom: 0px;
`;

const SidebarItem = styled(Flex)`
    margin-bottom: 15px;
`;

function Item (props){
    const { name, pathName } = props;
    return (
        <SidebarItem alignItems="center">
            <Icon style={{ marginRight: '10px', color: 'white' }} type="plus"/>
            <Link to={`/dashboard${pathName}`}><StyledP>{name}</StyledP></Link>
        </SidebarItem>
    )
}

export default Item;