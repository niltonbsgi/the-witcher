import React from  'react';
import notFound from  '../../assets/images/not-found.png';

class Page404NotFount extends React.Component{
    render(){
        return <div align="center" style={ style }><img src={ notFound }/></div>
    }
}

const style={
    marginTop:'10%'
}

export default Page404NotFount