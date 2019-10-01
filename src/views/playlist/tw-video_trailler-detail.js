import React from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import YouTube from 'react-youtube';
import Section from '../../components/section';
import Page from 'react-page-loading';

const opts = {
    height: '390',
    width: '640',
    playerVars: { autoplay: 1 }
};

class TwVideoTraillerDetail extends React.Component {
    
    constructor(props){
        super(props)

        this.state={
            videoId: ''          
        }

        this.goBack = this.goBack.bind(this)
        this._onReady = this._onReady.bind(this)
    }

    componentDidMount(){
        
        const { history } = this.props

        if(history!==undefined){
            const { videoId } = history.location.state
            if(videoId!==undefined){
                this.setState({videoId: videoId})
            }
        }
    }

    goBack(){
        this.props.history.push(`/playlist/`)
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
    
    render(){        

        return (
            <Section history={ this.props.history }>
                <h4 style={ style }>To exit, click anywhere on the screen</h4>
                <Page loader={"bar"} color={"#A9A9A9"} size={4}>
                    <div align="center" style={ { marginLeft:'1px' } }>
                        <Modal 
                            visible={true} 
                            width="600" 
                            height="300" 
                            effect="fadeInUp" 
                            onClickAway={() => this.goBack()}>
                                <YouTube
                                    videoId={this.state.videoId}
                                    opts={opts}
                                />          
                        </Modal>
                    </div>
                </Page>    
            </Section>            
        )
    }
}

const style= { 
    color:'white' 
}

export default withRouter(TwVideoTraillerDetail);
