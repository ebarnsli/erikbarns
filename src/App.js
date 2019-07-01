import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import {SideNavigation} from "./components/SideNavigation";
import * as _ from "lodash";
import {PageData} from "./static/data";
import {Page} from "./components/Page";

export const FullPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Syncopate', sans-serif;
 }
`;

export const Title = styled.div`
    font-size: 2rem;
    padding-top: 3rem;
    display:flex;
    text-align:center;
`;

const InfoBar = styled.div`
    font-size: 1rem;
    display: flex;
`;


const ContentContainer = styled.div`
    width: 100%;
    position: absolute;
`;

const Container = styled.div`
    width:100%;
    display:flex;
    max-width: 1200px;
`;


class App extends Component {
    constructor(props) {
        super(props);

        this.pages = [null, null, null, null];

        this.state = {
            step: 0,
            width: 0,
            height: 0,
        };

        this.scrollDownPage = this.scrollDownPage.bind(this);
        this.scrollUpPage = this.scrollUpPage.bind(this);

    }

    componentDidMount() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    scrollDownPage() {
        let step = this.getCurrentStep() + 1;
        if (step < this.pages.length) {
            window.scrollTo(0, this.pages[step].offsetTop);
            this.setState({step});
        }
    }

    getCurrentStep() {
        let offsets = this.pages.map(page => page.offsetTop);
        const value = _.reduce(offsets, (prev, curr) => Math.abs(curr - window.pageYOffset) <= Math.abs(prev - window.pageYOffset) ? curr : prev, -3);
        const indexOfClosest = this.pages.map(page => page.offsetTop).indexOf(value);
        return (indexOfClosest !== -1) ? indexOfClosest : 0;
    }

    scrollUpPage() {
        let step = this.getCurrentStep() - 1;
        if (step >= 0) {
            window.scrollTo(0, this.pages[step].offsetTop);
            this.setState({step});
        }
    }

    render() {
        return (
            <Container>
                <ContentContainer>
                    <FullPage ref={(ref) => this.pages[0] = ref}>
                        <Title>
                            ERIK BARNS
                        </Title>
                        <InfoBar>
                            &bull; Software Engineer &bull;
                        </InfoBar>
                    </FullPage>
                    {PageData.map((page, index) => <Page key={index} index={index + 1} {...page} pages={this.pages}/>)}
                </ContentContainer>
                <SideNavigation
                    scrollUpPage={this.scrollUpPage}
                    scrollDownPage={this.scrollDownPage}
                />
            </Container>
        );
    }
}


export default App;
