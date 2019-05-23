import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    color: white;
    margin-bottom: 5px;
`;

class Time extends React.Component {
    state = {
        currentTime: moment().format('HH:mm:ss')
    }

    getCurrentTime = () => {
        return moment().format('HH:mm:ss');
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                currentTime: this.getCurrentTime()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { currentTime } = this.state;
        return(
            <StyledH1>{currentTime}</StyledH1>
        );
    }
}

export default Time;