import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { _List } from './tw-playlist-action';
import Card from '../../components/card';
import logoDark from '../../assets/images/logo-dark.png';
import Section from '../../components/section';
import { LogOut } from '../../utils/utils';
import Page from 'react-page-loading';
import Modal from 'react-awesome-modal';
import YouTube from 'react-youtube';
import { playlistRequest, playlistRequestNextPage } from '../../services/constants';
import '../../assets/scss/playlist.scss';

const youtubeOptions = {
    height: '390',
    width: '640',
    playerVars: { autoplay: 1 }
};

function mapStateToProps(state) {
    const { list, error } = state.PlaylistReducer;
    return { list, error };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetList: (url_request) => {
            const promise = _List(url_request);
            dispatch(promise);
            return promise;
        }
    }
}


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
            .catch((err) => {
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
                    .catch((err) => {
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
                            <img style={style.logoNav} src={logoDark} />
                            <button style={style.styleButtonTrailer}>TRAILERS</button>
                            <button onClick={() => this.handleLogOut()} style={style.styleButtonLogOut}>LOGOUT</button>
                        </nav>
                        <content className="playlist__content" style={style.styleDivList}>
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
                            <div style={style.loadMoreButtonContainer}>
                                <button
                                    onClick={() => this.handleNextPage()}
                                    style={style.styleButtonLoadMore}
                                >
                                    SHOW MORE
                                </button>
                            </div>
                        </content>
                    </div>
                </Page>
            </Section>
        )
    }
}

const style = {
    styleDivList: {
        height: '100vh',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between'
    },
    styleButtonLogOut: {
        height: '40px',
        width: '60%',
        marginTop: '7%',
        background: 'none',
        color: 'white',
        border: 'none'
    },
    styleButtonTrailer: {
        marginTop: '28%',
        cursor: 'pointer',
        background: 'none',
        color: '#fffdd0',
        border: '0.02px solid #fffdd0',
        height: '40px',
        width: '60%'
    },
    styleButtonLoadMore: {
        cursor: 'pointer',
        background: 'none',
        color: '#fffdd0',
        border: '0.02px solid #fffdd0',
        height: '40px',
        width: '200px'
    },
    logoNav: {
        width: '274px',
        margin: '90px'
    },
    tagStyle: {
        borderBottom: 'solid 0.05em',
        width: '95%',
        fontWeight: 'bold',
        fontSize: '18px'
    },
    tagTitle: {
        fontWeight: 'bold',
        paddingRight: '5px',
        paddingTop: '6px',
        display: 'inline-block'
    },
    styleTextDecoration: {
        textDecoration: 'underline',
        color: '#CFB53B',
        cursor: 'pointer'
    },
    loadMoreButtonContainer: {
        width: 'calc(50% - 17px)',
        height: '232px',
        overflow: 'hidden',
        marginBottom: '35px',
        border: 'none',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TwPlayList));