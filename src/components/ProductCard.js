import React from 'react';
import StarRatings from 'react-star-ratings';

const ProductCard = ({ productInfo }) => {
    return(
        <div>
            <img src={productInfo.product_image} alt="image_product"/>
            <h4>{productInfo.product_title}</h4>
            <p>{productInfo.product_description}</p>
            <p>{productInfo.product_price}</p>
            <StarRatings
                rating={productInfo.rating}
                starRatedColor="blue"
                starDimension="40px"
            />
        </div>
    )
}

export default ProductCard;
