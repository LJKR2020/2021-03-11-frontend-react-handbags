import React from "react";

function Button ({type, text, log, disable}) {
    return (
        <button disabled={disable}
                type={type}
                onClick={() => console.log({log})}>
            {text}
        </button>
    );
}

export default Button;
