import React from 'react';

export default function withHoc ( WrappedComponent, data ){
    return class extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                data: data
            };
        }

        render(){
            return (
                <WrappedComponent data={this.state.data} {...this.props} />
            );
        }
    }
}

