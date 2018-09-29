import React, { Component } from 'react';
import Page from '../components/Page';

class About extends Component {
    render() {
        return (
            <Page>
                <h1>{this.props.title}</h1>

                <p>Nouveau #podcast jeu vidéo (qui tente des trucs).</p>
                <p>
                    On propose 2 émissions :
                    <ul>
                        <li>"3e Espace", l'émission qui analyse le JV sous des angles originaux.</li>
                        <li>"Weirdo Ware", l'émission 100% impro WTF.</li>
                    </ul>
                </p>
            </Page>
        );
    }
}

export default About;