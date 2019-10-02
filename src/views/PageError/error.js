import React from  'react';
import Error from  '../../assets/images/Error.png';

class PageError extends React.Component{
    render(){
        return <div align="center" style={ style }><img src={ Error }/></div>
    }
}

const style={
    marginTop:'10%'
}

export default PageError