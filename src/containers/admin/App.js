import React from "react";
import { Icon } from 'antd';
import { Dashboard as DashContainer } from "components/common";

const menuAdmin = [
    {
        id: 0,
        key: "dashboard",
        name: "Dashboard",
        path: "/",
        hidden: true,
        icon: <Icon type="dashboard" theme="outlined" />
    },
    {
        id: 1,
        key: "dashboard",
        name: "Dashboard",
        path: "/dashboard",
        icon: <Icon type="dashboard" theme="outlined" />,
    },
    {
        id: 2,
        key: "users",
        name: "Users",
        path: "/users",
        icon: <Icon type="user" theme="outlined" />
    },
    {
        id: 3,
        key: "categories",
        name: "Categories",
        path: "/categories",
        icon: <Icon type="ordered-list" theme="outlined" />
    }
]

const findMenu = (key, value) => (data) => data.find(item => item[key] == value) || {}


class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickMenuItem = (item) => {
        this.props.history.push(findMenu('key', item.key)(menuAdmin).path)
    }

    render() {
        return (
            <div className="Admin">
                <DashContainer
                    title="Admin"
                    onClickMenuItem={this.onClickMenuItem}
                    menu={menuAdmin}
                    menuSelected={findMenu('path', this.props.history.location.pathname)(menuAdmin).key}
                    onClickLogout={this.props.onClickLogout}
                >

                </DashContainer>
            </div>
        )
    }
}

export default Admin;