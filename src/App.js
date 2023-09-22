import React from 'react';
import bgimg from "./assets/background.png"
import example from "./assets/example.png"
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
                      Choreograph every element of your shower experience with built-in Wi-Fi, Bluetooth and voice activated technology when paired with google home or amazon ro alexa pluz use the DFC@Home app to craft up to twelve shower preset with spa options remotely warm your steam shower and customize the interface
                    </p>
                    <img className='btmimg' src={example} alt='example/>'/>
                </div>
            </div>
        </>
    );
};
 
export default Secondpage;