import React from "react";
import "./portfolioList.scss"

function PortfolioList({id,title,active,setSelected}){
    return(
        <li key={id} className={active ? "portfolioList active" : "portfolioList"} 
        onClick={() => setSelected(id)}>
                {title}
        </li>
    )
}

export default PortfolioList