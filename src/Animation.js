import React from 'react';
import Navbar from './navbar'


import '../src/css/nav.css';
import '../src/css/animation.css'
import { render } from '@testing-library/react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


class Animation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            like:0, dislike:0
        }
       
    }
    handleClick=()=>{
        this.setState({like:this.state.like+1})
    }
    handleClick2=()=>{
        this.setState({dislike:this.state.dislike+1})
    }
    render(){
        let {like}=this.state;
        let {dislike}=this.state;
    return (
        <div classname="App">
            <Navbar />
            <div class="container-as">
                <div class="row"> 
                <div class="col-4">
                    <div class="side-bar">
                    <h1>JUMP TO</h1>
                    <ol>
                        <li><a href="#traditional-animation">Traditional Animation</a></li><hr></hr>
                        <li><a href="#2D-animation">2D Animation</a></li><hr></hr>
                        <li><a href="#3D-animation">3D Animation</a></li><hr></hr>
                        <li><a href="#motion-graphics">Motion Graphics</a></li><hr></hr>
                        <li><a href="#stop-motion">Stop Motion</a></li>
                    </ol>
                </div>
                <div class="sign-in">
                    <h3><b>Sign in for more Conents.</b></h3>
                   <form>
                     <input class="form-i" type="text" placeholder="Your Name" required></input>
                     <input class="form-i" type="email" placeholder="Your Email ID" required></input>
                     <input class="form-i" type="number" placeholder="Phone" required></input>
                     <input class="form-i" type="password" placeholder="password" required></input>
                     <button class="form-i-s" type="submit">Submit</button>
                   </form>
                </div>
                </div>
                    <div class="col-8">
                        <div class="body-t">
                        <h1>ANIMATION</h1><hr></hr>
                        <p> Animation is the process of designing, drawing, making layouts and preparation of photographic which are
                            integrated in the multimedia and gaming products. Animation involves the exploitation and management of
                            still images to generate the illusion of movement. A person who creates animations is called animator. 
                            He/she use various computer technologies to capture the still images and then to animate these in desired
                            sequence.</p>
                        <h3 id="traditional-animation">1)Traditional Animation</h3>
                        <p>This is one of the oldest forms of animation in film. It’s sometimes called Cel animation. As mentioned 
                        above, in traditional animation objects are drawn on celluloid transparent paper. In order to create the 
                        animation sequence, the animator must draw every frame. It’s the same mechanism as a flipbook just on a grander
                        scale. Traditional is most often 2D animation. Aladdin, The Lion King, and other earlier cartoons are the best 
                        examples of this. In the earlier years of traditional animation, the animator would draw on a table that had a 
                        light inside of it, so the creator could see his or her previous animation. While traditional animation is not 
                        nearly as prevalent today, drawings are generally done on tablets. And manual colouring hasn’t been used by 
                        Disney since The Little Mermaid in 1989. </p>
                        <p>In the traditional animation process, animators will begin by drawing sequences of animation on sheets of
                        transparent paper perforated to fit the peg bars in their desks, often using coloured pencils, one picture or
                        "frame" at a time. A peg bar is an animation tool used in traditional (cel) animation to keep the drawings in 
                        place. The pins in the peg bar match the holes in the paper. It is attached to the animation desk or light table,
                        depending on which is being used. A key animator or lead animator will draw the key drawings in a scene, using 
                        the character layouts as a guide. The key animator draws enough of the frames to get across the major poses
                        within a character performance; in a sequence of a character jumping across a gap, the key animator may draw 
                        a frame of the character as he is about to leap, two or more frames as the character is flying through the 
                        air and the frame for the character landing on the other side of the gap.</p>
                        <p>Timing is important for the animators drawing these frames; each frame must match exactly what is going on
                        in the soundtrack at the moment the frame will appear, or else the discrepancy between sound and visual will
                        be distracting to the audience.The cel is an important innovation to traditional animation, as it allows some
                        parts of each frame to be repeated from frame to frame, thus saving labour. A simple example would be a scene
                        with two characters on screen, one of which is talking and the other standing silently. Since the latter
                        character is not moving, it can be displayed in this scene using only one drawing, on one cel, while multiple 
                        drawings on multiple cels are used to animate the speaking character.</p>
                        <h3 id="2D-animation">2)2D Animation</h3>
                        <p>2D animation is the art of creating movement in a two-dimensional space. This includes characters, creatures, FX and backgrounds.The illusion of movement is created when individual drawings are sequenced together over time. One second of time is usually divided into 24 frames. Depending on the style of animation there can be as many as 24 unique drawings in one second of animation (24fps) or as little as two. Conventionally animation is done on "2s" meaning there is a drawing every 2 frames (12fps). This allows artists to save on production time/costs and gives 2D animation its unique look</p>
                        <p>2D is a popular and diverse medium that's making a massive comeback. It can be seen prevalently in TV shows, video games, feature films, advertisements, mobile apps and on websites. Popular modern examples of 2D include TV shows Rick and Morty and F is for Family. Social media platforms like Snapchat are launching 2D animated series with snappy 1-3 minute episodes. And there's even been a recent surge in 2D platform video games such as Cuphead.</p>
                        <p>“Animation is used for everything online (advertising, entertainment), even if you don't realize it initially,” says Scott Claus, 2D Animation Mentor at CG Spectrum. “The medium is evolving quickly. Television animation has taken off, and streaming services are constantly looking for new content.”</p>
                        <p>Demand for 2D animators who can create entertaining and engaging content has grown significantly in the last decade. There’s a need for skilled and enthusiastic artists who love motion graphics and are adept at creating original and appealing content.</p>
                        <h3 id="3D-animation">3)3D Animation</h3>
                        <p>3D animation or computer animation is the most common type. But just because computers have stepped in instead of actual drawings, it’s not necessarily easier. The computer is just another tool, and 3D animation is still a long, intense process. In 3D animation, the animator uses a program to move the character’s body parts around. They set their digital frames when all of the parts of the character are in the right position. They do this for each frame, and the computer calculates the motion from each frame. Animators adjust and tweak the curvatures and movements their characters make throughout. 3D animation is also unique in that, unlike 2D, or other traditional methods, the character’s entire body is always visible. If a character turns to the side, the animator only needs to draw the side profile in 2D animation, but in 3D, the entire body still needs to be visible. So again, even though computers are being used, with new technology comes with way more considerations.</p>
                        <h3 id="motion-graphics">4.Motion Graphics</h3>
                        <p>Motion Graphics are pieces are digital graphics that create the illusion of motion usually for ads, title sequences in films, but ultimately exist to communicate something to the viewer. They’re often combined with sound for multimedia projects. They’re a type of animation used mostly in business, usually with text as a main player</p>
                        <p>Motion graphics are pieces of animation or digital footage which create the illusion of motion or rotation, and are usually combined with audio for use in multimedia projects. Motion graphics are usually displayed via electronic media technology, but may also be displayed via manual powered technology.Motion graphics extend beyond the most commonly used methods of frame-by-frame footage and animation. Motion graphics can be distinguished from typical animation in that they are not strictly character driven or story based and often represent animated abstract shapes and forms such as logos or logo elements.Motion graphics continue to evolve as an art form with the incorporation of sweeping camera paths and 3D elements. Maxon's CINEMA 4D, plugins such as MoGraph and Adobe After Effects. Despite their relative complexity, Autodesk's Maya and 3D Studio Max are widely used for the animation and design of motion graphics, as is Maya and 3D Studio which uses a node-based particle system generator similar to Cinema 4D's Thinking Particles plugin. There are also some other packages in Open Source panorama, which are gaining more features and adepts in order to use in a motion graphics workflow, while Blender integrates several of the functions of its commercial counterparts.</p>
                        <p>Many motion graphics animators learn several 3D graphics packages for use according to each program's strengths. Although many trends in motion graphics tend to be based on a specific software's capabilities, the software is only a tool the broadcast designer uses while bringing the vision to life.</p>
                        <h3 id="stop-motion">5)Stop Motion</h3>
                        <p>Stop motion animation encompasses Claymation, pixelation, object-motion, cut-out animation, and more. But the basic mechanics are similar to traditional animation or a flipbook. However, instead of drawings, stop motion adjusts physical objects in each frame. If moved in small increments, captured one frame at a time, the illusion of motion is produced.  Whether puppets, clay, or even real people, these manual adjustments can make it a long, arduous process.</p>
                        <p>Stop motion is an animated filmmaking technique in which objects are physically manipulated in small increments between individually photographed frames so that they will appear to exhibit independent motion or change when the series of frames is played back. Any kind of object can thus be animated, but puppets with movable joints (puppet animation) or plasticine figures (clay animation or Claymation) are most commonly used. Puppets, models or clay figures built around an armature are used in model animation. Stop motion with live actors is often referred to as pixilation. Stop motion of flat materials such as paper, fabrics or photographs is usually called cut-out animation.</p>
                        <p>The term "stop motion," relating to the animation technique, is often spelled with a hyphen as "stop-motion." Both orthographical variants, with and without the hyphen, are correct, but the hyphenated one has a second meaning that is unrelated to animation or cinema: "a device for automatically stopping a machine or engine when something has gone wrong" .Stop motion should not be confused with the time-lapse technique in which still photographs of a live scene are taken at regular intervals and then combined to make a continuous film in which time appears to be moving faster.</p>
                        <p>There are certain advantages and disadvantages to using animation in education and training</p>
                        <h4>Advantages   </h4>
                        <ol>
                            <li>Using interactive animations improve the skills of students as well as teachers. It engages the students in the entire learning process. It helps their imagination and learn concepts with ease. Instructors can use a different method of teaching to the traditional classroom lecture. Emphasis is on learning is less time and effort.</li>
                            <li>Interactive animation holds the audience's attention. The use of audio, graphics, and video interactive animation makes it interesting, engaging.</li>
                            <li>Real-life experiments hazardous in nature can be sorted using animation. It provides flexibility and safety in re-attempting the experiment</li>
                            <li>Computer animation is made for a flexible interactive way of learning. This builds interest in students wanting to learn more and motivates them. Animation allows one to assess their skills and abilities and attempt risk-free experiments in a safe environment.</li>
                            <li>It helps build practical skills. Animation provides real to life scenarios faced in daily life during learning. This learning uses methods of learning by viewing, doing and coaching.  This helps in practical skill development and better knowledge retention.</li>
                            <li>Animation adds fun to learning and motivates one to look for more information to learn.</li>
                        </ol>
                        <h4>Disadvantages  </h4>
                        <ol>
                            <li>Animation requires a lot of effort and time to create. It works well from a technical perspective. But educators may find it difficult to place it in their curriculum. </li>
                            <li>It cannot judge the level of every student in a class. It becomes difficult to adapt to individual IQ levels. It becomes easy for teachers to handle it with some technical knowledge know-how. It might not fit in well for all.</li>
                            <li>The animation technology is created to interact with the students. It cannot recognize the creative factor in the batch of students. Some might be able to use it while others may not</li>
                            <li>Animation technology uses more storage and memory space. It uses more bandwidth and requires high speed and uninterrupted internet connection.</li>
                        </ol>
                        </div>
                    </div>
                </div>
                <div class="com-like">
                    <div class="comment">
                        <form>
                            <input type="text" placeholder="Write your thaughts..." class="form-i"></input>
                            <button class="form-i-c"> Comment </button>
                        </form>
                    </div>
                    <div class="like"style={{ marginTop:"20px"}}>
                        <div style={{marginRight:"10px"}}>
                            <button onClick={(e)=>this.handleClick()}><ThumbUpIcon/></button>
                            <p>{like} likes</p>
                        </div>
                        <div style={{marginRight:"20px"}}>
                            <button onClick={(e)=>this.handleClick2()} ><ThumbDownIcon/></button>
                            <p>{dislike} dislikes</p>

                        </div>
                    </div>
                </div>
                
            </div>
       
        </div>
    );
    }
}
export default Animation;