import React from "react";
import {
    connect
} from "react-redux";

const Loading = ({ isFetching }) => {
    if (!isFetching) return null;
    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                top: 0,
                right: 0,
                left: 0,
                fontSize: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 999999,
                color: "#49eeee"
            }}
            className="Loading">
            {/* <div className="boxLoading"></div> */}
            <i className="fas fa-spinner fa-pulse" />
        </div>
    )
}

export default connect((store) => ({
    isFetching: store.common.isFetching
}))(Loading);