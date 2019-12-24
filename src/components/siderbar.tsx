import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import API from '../api'
const { SubMenu } = Menu;
export class siderbar extends Component {
    handleClick = (e:any) => {
        // console.log('click ', e);
    };
    render() {
        return (
            <div className='siderbar'>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['0']}
                    defaultOpenKeys={['sub0']}
                    mode="inline"
                >
                    {
                    API.map((apiItem, index)=> {
                        return (<SubMenu
                            key={'sub'+index}
                            title={<span>
                                    <Icon type="appstore" />
                                    <span>{apiItem.key}</span>
                                </span>}>
                                {
                                    apiItem.children.map((item :any, idx :number)=>
                                    (<Menu.Item key={idx}>
                                        <Link to={`/Admin/${idx}`}>{item.name}</Link>
                                    </Menu.Item>))
                                }
                            </SubMenu>)
                    })
                }
                </Menu>
            </div>
        )
    }
}

export default siderbar
