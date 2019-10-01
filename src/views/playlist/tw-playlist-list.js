import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { _List } from  './tw-playlist-action';
import Card from '../../components/card';
import logo_dark from  '../../assets/logo_dark.png';
import Section from '../../components/section';
import { LogOut } from '../../utils/utils';
import Page from 'react-page-loading';
import { playlist_request, playlist_request_next_page } from '../../services/list_requests';

function mapStateToProps(state) {
    const { list, error } = state.PlaylistReducer;
    return { list, error };
  }

  function mapDispatchToProps(dispatch) {
    return {
        onGetList: (url_request) => { 
            const promise = _List( url_request );
            dispatch(promise);
            return promise;
        }
    }
  }


class TwPlayList extends React.Component {

    constructor(props){
        super(props)

        this.state={
            playlist: [],
            nextPageToken:''
        }

        this.handleLogOut = this.handleLogOut.bind(this)
        this.handleNextPage = this.handleNextPage.bind(this)
        this.handleModal = this.handleModal.bind(this)
    }    

    componentDidMount(){

        const { onGetList } = this.props

        onGetList(playlist_request)
            .then(()=>{
                this.setState({
                    ...this.state, 
                    playlist: this.props.list.items,
                    nextPageToken: this.props.list.nextPageToken
                })})
            .catch((err)=> {
                this.props.history.push('/500/')
            })
        
    }
    
    handleLogOut(){
        const { history } = this.props
        LogOut()
        history.push('/signin/')
    }

    handleModal(videoId){
        const { history } = this.props
        history.push(
            {
                pathname: `/video_trailler/`,
                state : { videoId: videoId }                    
            }
        );
    }

    handleNextPage(){
        if(this.state.nextPageToken !=='') {
            
            if (this.state.nextPageToken !== undefined){
                const { onGetList } = this.props
                let url_request = playlist_request_next_page.replace('@pageToken',this.state.nextPageToken)

                onGetList(url_request)
                    .then(()=>{
                        let { playlist } = this.state
                        this.props.list.items.forEach(element => {
                            playlist.push(element)    
                        });                    

                        this.setState({
                            ...this.state, 
                            playlist: playlist,
                            nextPageToken: this.props.list.nextPageToken
                        })})
                    .catch((err)=> {
                        this.props.history.push('/500/')
                    })
                    
            }
        }
    }


    render(){

        return (
            <Section history={ this.props.history }>
                <Page loader={"bar"} color={"#A9A9A9"} size={4}>
                    <div className="flex-container">
                        <div className="div_menu">
                            <div align="center">
                                <img style={ style.styleImageAlign } src={ logo_dark }/>
                                <div>
                                    <button style={ style.styleButtonTrailler }>TRAILLERS</button>
                                </div>
                                <div>    
                                    <button onClick={()=>this.handleLogOut()}  style={ style.styleButtonLogOut }>LOGOUT</button>
                                </div>    
                            </div>
                        </div>
                        <div className="div_list" style={ style.styleDivList }>
                            { this.state.playlist.map((element, i) => {
                                return ( 
                                    <Card 
                                        onClick={() => this.handleModal(element.contentDetails.videoId)} 
                                        key={ i } 
                                        url={element.snippet.thumbnails.standard.url}
                                    />
                                )                    
                            })}
                            <div align="center">
                                <button onClick={ ()=> this.handleNextPage() } style={ style.styleButtonLoadMore }>SHOW MORE</button>
                            </div>                    
                        </div>                
                    </div>
                </Page>    
            </Section>    
        )   
    }
} 

const style = {
    styleDivList: { 
        maxHeight: window.innerHeight -47 
    },
    styleButtonLogOut: { 
        height: '40px', 
        width:'60%', 
        marginTop:'7%',
        background:'none', 
        color: 'white', 
        border:'none' 
    },
    styleButtonTrailler: { 
        marginTop: '28%',
        cursor: 'pointer', 
        background:'none', 
        color: '#fffdd0', 
        border: '0.02px solid #fffdd0', 
        height: '40px', 
        width:'60%' 
    },
    styleButtonLoadMore: { 
        cursor: 'pointer', 
        background:'none', 
        color: '#fffdd0', 
        border: '0.02px solid #fffdd0', 
        height: '40px', 
        width:'20%' 
    },
    styleImageAlign: { 
        width: '65%', 
        marginTop:'19%'         
    },
    tagStyle: { 
        borderBottom:'solid 0.05em', 
        width:'95%', 
        fontWeight:'bold', 
        fontSize:'18px'         
    },
    tagTitle: { 
        fontWeight:'bold', 
        paddingRight:'5px', 
        paddingTop:'6px', 
        display: 'inline-block' 
    },
    styleTextDecoration: {
        textDecoration: 'underline',
        color:'#CFB53B',
        cursor:'pointer'
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TwPlayList));