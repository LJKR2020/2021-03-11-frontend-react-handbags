import React from "react";

function Product({title, image, alternatief, producttitle, productprice}) {
    return (
        <article>
            <span>
            {title}
            </span>
            <img
                src={image}
                alt={alternatief}
            />
            <p>{producttitle}</p>
            <h4>{productprice}</h4>
        </article>
    )
}


export default Product
