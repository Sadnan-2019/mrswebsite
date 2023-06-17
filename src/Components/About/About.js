import React from 'react';
import Nav from '../Nav/Nav';
import AboutLanding from './AboutLanding';
import Team from '../Team/Team';
import AnimatedText from '../SVG/AnimatedText';

const About = () => {
    return (
        <div>
            <Nav className=" "></Nav>
            <AboutLanding></AboutLanding>
            <Team></Team>
            {/* <AnimatedText></AnimatedText> */}
        </div>
    );
};

export default About;