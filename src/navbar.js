import React from 'react';
import '../src/css/nav.css';
/* import Video  from "./AirBubbles.mp4" ; */
function Navbar(){
    return(
    <div className="App">
        
         <section>
          {/*   <video controls autostart autoPlay src={Video}></video> */}
            <div class="register">

                <a href="#">Register</a>/
                <a href="#">login</a>
            </div>
            <div class="clear-fix"></div>
            <div class="row justify-content" >
                <div class="col-7 center" id="searchWrapper">
                   
                        <form id="search">
                            <input type="search" placeholder="Explore More"></input>
                            <button><svg xmlns="http://www.w3.org/2000/svg" width="18.5" height="12.5" fill="currentColor" class="bi bi-search" viewBox="0 0 15 15">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg></button>
                        </form>
                    
                </div>
            </div>
        </section>
    
        <nav >
            <div class="container">
                <div class="navWrap">
                <div class="navbar">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT AUTHER</a></li>
                    <li><a href="#">RELATED TOPICS</a></li>
                    <li><a href="#">MORE</a></li>
                </ul>
                </div>
                </div>
            </div>
      </nav>
    </div> 
    );
}
export default Navbar;