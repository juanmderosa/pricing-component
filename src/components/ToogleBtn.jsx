import React from 'react'

export const ToogleBtn = ({setPeriod, period}) => {

    const handleClick = () =>{
        setPeriod(!period)
    }

return (
<aside className="toogle-btn-container">
<p className="toogle-p">Anually</p>
    <div className="optin-container">
    <button className="option-btn" onClick={handleClick}></button>
    <span className={period === false ? "selector-container selector-container-right" : "selector-container selector-container-left"}></span>
    </div>
<p className="toogle-p">Monthly</p>
</aside>
)
}
