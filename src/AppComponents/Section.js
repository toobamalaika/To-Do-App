import React from "react";

const Section = ({ children }) => {
    return(
        <div className="ui container" style={{ margin:"30px 0 30px 0" }}>
            {children}
        </div>
    );
}

export default Section;