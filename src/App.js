import React from 'react';
import bgimg from "./assets/background.png"
import "./App.css"
 
const Secondpage = () => {
    return (
        <>
            <div className="secondpagecontainer">
                <div className='backgrnd'></div>
                <img className='bgimg' src={bgimg} alt='backgroundimage'/>
                <div className='content'>
                    <div className='contentcontainer'>
                        Digital Interface
                    </div>
                    <p>
                      
                    </p>
                </div>
            </div>
        </>
    );
};
 
export default Secondpage;