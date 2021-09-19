import React from 'react';
import {Helmet} from "react-helmet";
import {Link} from "gatsby";

const catalog = () => {
    return (

        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Catalog_product</title>
            </Helmet>
            <p>Catalog</p>
            <div><Link to="/">Go home</Link>.</div>
            <div><Link to="/Catalog/product">product</Link>.</div>
        </div>
    );
};

export default catalog;