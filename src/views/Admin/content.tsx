import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
@(withRouter as any)
export class content extends Component<any,any>{
    render() {
        const { match, location, history } = this.props;
        return (
            <div className='content'>
                content{location.pathname}
            </div>
        )
    }
}

export default content
