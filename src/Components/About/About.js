import React from 'react';
import Nav from '../Nav/Nav';
import AboutLanding from './AboutLanding';
import Team from '../Team/Team';

const About = () => {
    return (
        <div>
            <Nav className=" "></Nav>
            <AboutLanding></AboutLanding>
            <Team></Team>
        </div>
    );
};

export default About;