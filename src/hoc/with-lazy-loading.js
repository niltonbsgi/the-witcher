import React from 'react';
import LazyImport from '../components/lazy-import';

export default function WithLazyLoading ( WrappedComponent, data ){
    return class extends React.Component{
        constructor(props) {
            super(props);
        }

        render(){

            WrappedComponent = LazyImport({
                loader: () => import(data),
              })
            return (
                <WrappedComponent data={this.state.data} {...this.props} />
            );
        }
    }
}

