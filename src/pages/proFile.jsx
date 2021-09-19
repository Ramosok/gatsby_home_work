import React from 'react';
import {Helmet} from "react-helmet";
import {Link} from "gatsby";

const proFile = () => {
    return (

        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ProFile_admin</title>
            </Helmet>
            <p>ProFile</p>
            <div><Link to="/">Go home</Link>.</div>
        </div>
    );
};

export default proFile;