import React from "react";

function Tile({title, paragraf1, paragraf2, image, alternatief}) {
    return (<section>
            <h2>{title}</h2>
            <p>{paragraf1}</p>
            <p>{paragraf2}</p>
            <img src={image} alt={alternatief}/>
        </section>
    )
}

export default Tile