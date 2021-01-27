import React from 'react';
import '../src/css/realtedTopics.css';
import python from '../src/video&img/python.jpg'; 
import cPlusPlus from '../src/video&img/cPlusPlus.jpg';
import C from '../src/video&img/C.jpg';
import GameDevelopment from '../src/video&img/GameDevelopment.png';

function RelatedTopics() {
   
  return (
    <div className="App">
    <main>
        <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="topicSliderHolder">
                <div id="relatedT"><a href="#">RELATED TOPICS</a></div>
                    <ul id="topicSliderContent">
                        
                        <li>
                           <div class="card">
                               <div class="image">
                               <img class="img" src={python} alt="python" />
                               </div>
                               <div class="cardContent">
                               <h4>PYTHON</h4>
                               <p>
                               Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace. 
                               </p>
                               </div>
                            </div> 
                        </li>
                        <li>
                           <div class="card">
                                  <div class="image">
                                  <img class="img" src={cPlusPlus} alt="cPlusPlus" />
                               </div>
                               <div class="cardContent">
                              <h4>C++</h4>
                              <p>C++ is a general-purpose programming language created by BjarneStroustrup as an extension of the C programming language. The language has expanded significantly over time </p>
                               </div>
                            </div> 
                        </li>
                        {/*  <li>
                           <div class="card">
                                 <div class="image">
                                 <img class="img" src={C} alt="C" />;
                               </div>
                               <div class="cardContent">
                               <h4>C</h4>
                               <p>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computer architectures that range from supercomputers to PLCs and embedded systems.</p>
                               </div>
                            </div> 
                        </li>  */}
                        <li>
                           <div class="card">
                                <div class="image">
                                <img class="img" src={GameDevelopment} alt="GameDevelopment"/>
                               </div>
                               <div class="cardContent">
                               <h4>Game Development</h4>
                               <p>Game Development is the art of creating games and describes the design, development and release of a game. It may involve concept generation, design, build, test and release.  </p>
                               </div>
                            </div> 
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </main>
   
     
    </div>
  );
}
export default RelatedTopics;