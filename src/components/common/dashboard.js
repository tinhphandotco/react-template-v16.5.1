import React from "react";
import { Layout, Menu, Icon } from 'antd';
import { _staticUrl } from "config/utils";
import PropTypes from "prop-types"

import { Link } from "react-router-dom"

const { Header, Sider, Content } = Layout;

class Dashboard extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div className="Dashboard">
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <div className={`logo ${this.state.collapsed ? "logo__collapsed" : ""}`}>
                            <Link to="/profile">
                                {/* <img src={_staticUrl(this.props.logo)} alt="" /> */}
                                {
                                    !this.state.collapsed ? <span>{this.props.title}</span> : <span>{this.props.title.slice(0,1)}</span>
                                }
                            </Link>
                        </div>
                        <Menu onClick={this.props.onClickMenuItem} theme="dark" mode="inline" defaultSelectedKeys={[this.props.menuSelected]}>
                            {
                                this.props.menu.filter(item => !item.hidden).map(item => (
                                    <Menu.Item key={item.key}>
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </Menu.Item>
                                ))
                            }
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: "0 15px" }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <span onClick={this.props.onClickLogout} style={{ float: "right", cursor: "pointer" }}>Log out <Icon type="logout" theme="outlined" /></span>
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
                            {
                                this.props.children
                            }
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

Dashboard.propTypes = {
    title: PropTypes.string,
    logo: PropTypes.string,
    menu: PropTypes.array,
    onClickMenuItem: PropTypes.func,
    menuSelected: PropTypes.string,
}

Dashboard.defaultProps = {
    path: "",
    title: "",
    logo: "assets/images/logo.png",
    menu: [],
    onClickMenuItem() { },
    menuSelected: "",
}

export default Dashboard;