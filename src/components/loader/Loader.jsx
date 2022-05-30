import React, { Fragment } from "react";
import loader from "../../assets/img/Gear.gif";

const Loader = () => {
    return (
        <Fragment >
            <img src={loader} className="loader" alt="loading" />
        </Fragment>
    );
};

export default Loader;