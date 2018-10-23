import React, { Component } from 'react';
import { Image, Statistic } from 'semantic-ui-react'
import Particles from 'react-particles-js';

import ParticleConfig from '../assets/particlesjs-config.json';
import Event from './Event.js';
import AnimatedNumber from '../Components/AnimatedNumber';

import './Main.css';

class Main extends Component {
    render() {
        const dollarFormatter = new Intl.NumberFormat('US',{ style: 'currency', currency: 'USD' })

        const statistics = [
            {
                key: 'pizza',
                label: 'worth of pizza served',
                value: 13600,
                steps: 40,
                formatter: x => dollarFormatter.format(x)
            },
            {
                key: 'sponsors',
                label: 'Sponsors',
                value: 15,
                steps: 1,
                formatter: x => x
            },
            {
                key: 'officers',
                label: 'Officers',
                value: 30,
                steps: 1,
                formatter: x => x
            }
        ];

        return (
            <div id="main">
                <Particles params={ParticleConfig}
                    style={{position: 'absolute', top: 0, left: 0}}/>
                <div>
                    <Image src="./assets/logo/soda.png" id='logo'/>
                    <div id="title">
                        <div id="bold">The Software Developers Association</div>
                        <div>is the premiere software development club for university students.</div>
                    </div>
                    <Statistic.Group size='small' id='statistic'>
                        {
                            statistics.map(({key, label, value, steps, formatter}) => {
                                return <Statistic key={key}>
                                    <Statistic.Value>
                                        <AnimatedNumber number={value} steps={steps} formatter={formatter}/>
                                    </Statistic.Value>
                                    <Statistic.Label>{label}</Statistic.Label>
                                </Statistic>
                            })
                        }
                    </Statistic.Group>
                </div>
                <Event/>
            </div>
        );
    }
}

export default Main;
