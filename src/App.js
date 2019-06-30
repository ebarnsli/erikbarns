import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import ImageLoader from 'react-load-image';

const FullPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Syncopate', sans-serif;
 }
`;

const Title = styled.div`
    font-size: 2rem;
    padding-top: 2rem;
`;

const InfoBar = styled.div`
    font-size: 1rem;
    display: flex;
`;

const Tile = styled.div`
    padding: 1rem;
    border-radius: 2rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

const FlexDiv = styled.div`
    display: flex;
    align-items: center;
`;

const Link = styled.a`
    padding: 0 0.5rem;
`;

const ImageContainer = styled.div`
    max-width: 15rem;
    max-height: 15rem;
    padding: 1rem;
    img {
        width: 100%;
        border-radius: 2rem;
    }
`;

const SideNav = styled.div`
    height: 100vh;
    width: 20%;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
`;

const ContentContainer = styled.div`
    width: 100%;
`;

const Container = styled.div`
    width:100%;
    display:flex;
    max-width: 800px;
    margin:auto;
`;

const GridBoi = styled.div`
    display: grid;
    width:100%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`


class App extends Component {

    render() {
        return (
            <Container className={"main-container"}>
                <ContentContainer>
                    <FullPage>
                        <Title>
                            ERIK BARNS
                        </Title>
                        <InfoBar>
                            &bull; Software Engineer &bull;
                        </InfoBar>
                    </FullPage>
                    <FullPage>
                        <Title>WORK</Title>
                        <GridBoi>
                            <AppTile title={"RiksRoom"} imageSrc={"./src/static/rr.jpg"}
                                     urls={[{
                                         url: "https://apps.apple.com/us/app/riksroom/id1443213388",
                                         text: "App Store"
                                     }]}/>
                            <AppTile title={"Cheaters Inc"}
                                     imageSrc={"./src/static/ci.jpg"}
                                     urls={[
                                         {
                                             url: "https://apps.apple.com/us/app/cheaters-inc/id1450998998",
                                             text: "App Store"
                                         },
                                         {
                                             url: "https://play.google.com/store/apps/details?id=io.github.ebarns.cymbalremake&hl=en_US",
                                             text: "Google Play"
                                         },

                                     ]}
                            />
                        </GridBoi>
                    </FullPage>
                    <FullPage>
                        <Title>
                            CONNECT
                        </Title>
                        <GridBoi>
                            <AppTile
                                imageSrc={"./src/static/gh.png"}
                                urls={[{
                                    url: "https://github.com/ebarns",
                                    text: "GitHub"
                                }]}
                            />
                            <AppTile
                                imageSrc={"./src/static/li.png"}
                                urls={[{
                                    url: "https://www.linkedin.com/in/erik-barns-7a4061ab/",
                                    text: "LinkedIn"
                                }]}
                                primaryUrl={"https://www.linkedin.com/in/erik-barns-7a4061ab/"}
                            />
                        </GridBoi>
                    </FullPage>
                </ContentContainer>
                {/*<SideNav>*/}
                {/*</SideNav>*/}
            </Container>
        );
    }
}

const AppTile = (props) =>
    <Tile>
        <div>{props.title}</div>
        <ImageContainer>
            <ImageLoader src={props.imageSrc}>
                <img/>
                <div>Error</div>
                <div/>
            </ImageLoader>
        </ImageContainer>
        <FlexDiv>
            {props.urls.map((url, index) => <Link href={url.url}>{url.text}</Link>)}
        </FlexDiv>
    </Tile>

export default App;
