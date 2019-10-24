import React from 'react';
import Card from '../../components/card';
import logoDark from '../../assets/images/logo-dark.png';
import Section from '../../components/section';
import { LogOut } from '../../utils/utils';
import Page from 'react-page-loading';
import Modal from 'react-awesome-modal';
import YouTube from 'react-youtube';
import { playlistRequest, playlistRequestNextPage } from '../../services/constants';
import WithHoc from '../../hoc/with-hoc';
import '../../assets/scss/playlist.scss';
import styled from 'styled-components';

const youtubeOptions = {
    height: '390',
    width: '640',
    playerVars: { autoplay: 1 }
};

const StyleDivList = styled.div`
    height: 100vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`

const StyleButtonLogOut = styled.button`
    height: 40px;
    width: 60%;
    marginTop: 7%;
    background: none;
    color: white;
    border: none
`

const StyleButtonTrailer = styled.div`
    margin-top: 28%;
    cursor: pointer;
    background: none;
    color: #fffdd0;
    border: 0.02px solid #fffdd0;
    height: 40px;
    width: 60%
`

const LogoNavImg = styled.img`
    width: 274px;
    margin: 90px;
`
const LoadMoreButtonContainer = styled.div`
    width: calc(50% - 17px);
    height: 232px;
    overflow: hidden;
    marginBottom: 35px;
    border: none;
    position: relative;
    display: flex;
    justifyContent: center;
    alignItems: center;
`
const ButtonLoadMore = styled.button`
    cursor: pointer;
    background: none;
    color: #fffdd0;
    border: 0.02px solid #fffdd0;
    height: 40px;
    width: 200px;
`

class TwPlayList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            playlist: [],
            nextPageToken: '',
            showModal: false,
        }

        this.handleLogOut = this.handleLogOut.bind(this)
        this.handleNextPage = this.handleNextPage.bind(this)
        this.handleModal = this.handleModal.bind(this)
    }

    componentDidMount() {

        const { onGetList } = this.props

        onGetList(playlistRequest)
            .then(() => {
                this.setState({
                    ...this.state,
                    playlist: this.props.list.items,
                    nextPageToken: this.props.list.nextPageToken
                })
            })
            .catch(() => {
                this.props.history.push('/500/')
            })

    }

    handleLogOut() {
        const { history } = this.props
        LogOut()
        history.push('/signin/')
    }

    handleModal(videoId) {
        if (this.state.showModal) {
            this.setState({
                ...this.state,
                showModal: false,
                showingVideo: null
            })
            return;
        }

        this.setState({
            ...this.state,
            showModal: true,
            showingVideo: videoId
        })
    }

    handleNextPage() {
        if (this.state.nextPageToken !== '') {

            if (this.state.nextPageToken !== undefined) {
                const { onGetList } = this.props
                let url_request = playlistRequestNextPage.replace('@pageToken', this.state.nextPageToken)

                onGetList(url_request)
                    .then(() => {
                        let { playlist } = this.state
                        this.props.list.items.forEach(element => {
                            playlist.push(element)
                        });

                        this.setState({
                            ...this.state,
                            playlist: playlist,
                            nextPageToken: this.props.list.nextPageToken
                        })
                    })
                    .catch(() => {
                        this.props.history.push('/500/')
                    })
            }
        }
    }


    render() {

        return (
            <Section history={this.props.history}>
                <Page loader={"bar"} color={"#A9A9A9"} size={4}>

                    <Modal
                        visible={this.state.showModal}
                        width="600"
                        height="300"
                        effect="fadeInUp"
                        onClickAway={() => this.handleModal()}>

                        <YouTube
                            videoId={this.state.showingVideo}
                            opts={youtubeOptions}
                        />
                    </Modal>

                    <div className="playlist-container">
                        <nav>
                            <LogoNavImg src={logoDark}/>
                            <StyleButtonTrailer>TRAILERS</StyleButtonTrailer>
                            <StyleButtonLogOut onClick={() => this.handleLogOut()}>LOGOUT</StyleButtonLogOut>
                        </nav>
                        <StyleDivList className="playlist__content">
                            {this.state.playlist.map((element, i) => {
                                return (
                                    <Card
                                        onClick={() => this.handleModal(element.contentDetails.videoId)}
                                        key={i}
                                        title={element.snippet.title}
                                        url={element.snippet.thumbnails.standard.url}
                                    />
                                )
                            })}
                            <LoadMoreButtonContainer>
                                <ButtonLoadMore onClick={() => this.handleNextPage()}>
                                    SHOW MORE
                                </ButtonLoadMore>
                            </LoadMoreButtonContainer>
                        </StyleDivList>
                    </div>
                </Page>
            </Section>
        )
    }
}

export default WithHoc(TwPlayList);
