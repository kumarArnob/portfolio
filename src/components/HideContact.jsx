import React from 'react'

import Contact from './Contact';
const HideContact = () => {

    function show(){
        var x = document.getElementById("mydiv");
        if(x.style.display=="none"){
            x.style.display="block";
        }
        else{
            x.style.display="none";
        }
    }

    return (
        <div>
            
            <div className="col-md-12 no-padding mt-20">

            <button className="btn btn darkColor" onClick={show}>
                <b>Contact</b> 
            </button>
            </div>
               <div id="mydiv" style={{display:"none"}}>
                   <Contact/>
                </div> 
        </div>
    )
}

export default HideContact
