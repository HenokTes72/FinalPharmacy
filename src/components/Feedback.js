import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    min-height: 50px;
    padding: 10px;
    background-color: white;
    box-shadow: 0 0 5px #ccc;
    margin-bottom: 15px;
`;

const P = styled.p`
    margin: 0px;
    font-size: 16px;
`;

class Feedback extends React.Component {
    render() {
        return (
            <Wrapper>
                <P>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. 
                    14:54:02
            nsectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. 
                </P>
            </Wrapper>
        );
    }
}

export default Feedback;