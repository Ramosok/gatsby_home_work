import React from 'react';
import {Link} from "gatsby";
import Helmet from "react-helmet";
import {FacebookIcon, FacebookShareButton} from "react-share";
import './index.css';

const productOne = {
    title: 'Scooter',
    body: 'Description_Scooter',
    url: 'https://camokat.by/userfiles/image/catalog/photoimg_1256519793.jpg',
};

const product = () => {
    return (
        <div>
            <Helmet>
                <title>Scooter</title>
                <meta property="og:title" content={productOne.title}/>
                <meta property="og:image" content={productOne.url}/>
            </Helmet>
            <p>PRODUCT Scooter</p>
            <div className='link__class'><Link to="/">Go home</Link></div>
            <div className='container__product'>
                <div>{productOne.title}</div>
                <div>{productOne.body}</div>
                <div className="product__class"><img src={productOne.url} width="200" height="200" alt=""/></div>
                <FacebookShareButton
                    quote={productOne.title}
                    url={productOne.url}
                >
                    <FacebookIcon size={32} round={true}/>

                </FacebookShareButton>
            </div>
        </div>

    );
};

export default product;