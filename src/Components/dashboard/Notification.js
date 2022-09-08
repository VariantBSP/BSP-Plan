import React from "react";
import paul from "./paul.jpg";

const Notifications = () => {
    return ( 
        <div className="notification">
            <div className="card">
            <h2>Bayo Seye Paul</h2>
                <div className="images">
                    <img src={paul} alt="profile pic"/>
                </div>
                <p>Some of my other Web-apps include :</p>
                <ul>
                <li><a href= "#"><button>BSP Blogspot</button></a></li>
                <li><a href= "#"><button>Lenry Hotel and Suite</button></a></li>
                <li><a href= "#"><button>BSP's Todo's</button></a></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Notifications;