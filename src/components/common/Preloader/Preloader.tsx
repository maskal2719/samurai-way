import React from 'react';
import preloader from "../../../assets/images/loading-animation.gif";

const Preloader = () => {
    return (
        <img style={{width: '200px', display: "flex", margin: '0 auto', marginTop: '200px'}} src={preloader} alt={'prealoader'}/>
    );
};

export default Preloader;
