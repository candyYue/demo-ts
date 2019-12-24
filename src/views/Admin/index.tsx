import React, { Component } from 'react'
import Siderbar from '../../components/siderbar';
import Content from './content';
import '../../assets/css/views/admin.scss';
export class Admin extends Component {
    render() {
        return (
            <div>
                <Siderbar/>
                <Content/>
            </div>
        )
    }
}

export default Admin
