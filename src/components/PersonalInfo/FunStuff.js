import React from 'react';
import {Container, Row, Col, Image} from 'reactstrap'
import {
    Button,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Modal,
    UncontrolledTooltip,
    PopoverBody,
    PopoverHeader,
    UncontrolledPopover,
  } from "reactstrap";

const FunStuff = () => {
    const floatLow = {
        paddingTop: '10px'
    }
    const red = {
        color: 'red'
    }
    const [modalOne, setModalOne] = React.useState(false);
    const toggleModalOne = () => {
      setModalOne(!modalOne);
    };
    const [modalTwo, setModalTwo] = React.useState(false);
    const toggleModalTwo = () => {
      setModalTwo(!modalTwo);
    };
    const [modalThree, setModalThree] = React.useState(false);
    const toggleModalThree = () => {
      setModalThree(!modalThree);
    };
    const [modalFour, setModalFour] = React.useState(false);
    const toggleModalFour = () => {
      setModalFour(!modalFour);
    };
    return ( 
        <Container>
            <h4>
                And Now For the Fun Stuff;
            </h4>
            <br>
            </br>
            <Row>
                <Col md={3}>
                    <strong>A Few of My Favorite Books!</strong>
                    <p style={floatLow}><em style={red} className='fancy'>Grendel</em> by John Gardner</p>
                    <p><em className='fancy' style={red}>Catch 22</em> by Joseph Heller</p>
                    <p><em className='fancy' style={red}>The Stranger</em> by Albert Camus</p>
                    <p><em className='fancy' style={red}>Astrophysics for People in a Hurry</em> by Neil Degrasse Tyson</p>
                    <p><em className='fancy' style={red}>A Clockwork Orange</em> by Anthony Burgess</p>
                </Col>
                <Col md={3}>
                    <strong>Lover of Good Music! Here's Some of My Favorite Songs</strong>
                    <p style={floatLow}><em style={red} className='fancy'>All Along The Watchtower</em> by Jimi Hendrix</p>
                    <p><em className='fancy' style={red}>Shine On You Crazy Diamond Pt I</em> by Pink Floyd</p>
                    <p><em className='fancy' style={red}>Sing About Me, I'm Dying of Thirst</em> by Kendrick Lamar</p>
                    <p><em className='fancy' style={red}>Something Good Can Work For You</em> by Two Door Cinema Club</p>
                </Col>
                <Col md={6}>
                    <strong>
                        Some Pieces of Literature I've Amassed Over The Years!
                    </strong>
                    <Row>
                    <Col md={3}>
                <div className="title">
                    <strong>The 4:40 Bus Departing Binghamton Bus Terminal</strong>
                </div>
              {/* Button trigger modal */}
              <Button
                className="btn-round"
                color="danger"
                outline
                type="button"
                onClick={toggleModalOne}
              >
               Take a Read 
              </Button>
              {/* Modal */}
              <Modal isOpen={modalOne} toggle={toggleModalOne}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModalOne}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    The 4:40 Bus Departing Binghamton Bus Terminal
                  </h5>
                </div>
                <div className="modal-body">
<p>A friend had sat across the aisle from me</p>
<p>on a hot and arid bus</p>
<p>that was already late departing Binghamton.</p>
<p>Next to her sat</p>
<p>an elder man with an untrimmed</p>
<p>salt and pepper beard.</p>
<p>He wore a black shirt,</p>
<p>with a velcro New York hat</p>
<p>that was gray.</p>
<p>He smiled to reveal</p>
<p>crooked and yellowed teeth.</p>
<p>When he spoke,</p>
<p>he spoke of his wife of thirty years,</p>
<p>who is waiting for him back in Kansas City.</p>
<p>He spoke of her gently,</p>
<p>as if she was the one fragile thought</p>
<p>he didn’t want his sandpaper hands to damage.</p>
<p>He has pictures of his baby granddaughter</p>
<p>who was born with faint traces of cocaine</p>
<p>already in her blood.</p>
<p>He has not seen his daughter</p>
<p>since last Christmas.</p>
<p>He smiles though,</p>
<p>he’s never seen Manhattan before</p>
<p>and he is excited to see it now.</p>
<p>I have seen it many times</p>
<p>since I was a child,</p>
<p>and have never borne the excitement</p>
<p>of this elder man before me.</p>
<p>He speaks of his dreams,</p>
<p>with us strangers on the bus.</p>
<p>He wants to sail,</p>
<p>west across the Pacific</p>
<p>and island hop across</p>
<p>Hawaii and the Philippines,</p>
<p>eventually reaching Australia.</p>
<p>He says that if he spent 2 days on each island of the Philippines,</p>
<p>he could not see them all in his lifetime.</p>
<p>I hope he’s wrong.</p>
<p><br></br></p>
<p>As we near the city,</p>
<p>my friend says that its funny</p>
<p>to look at all the thousands of cars on the road</p>
<p>and picture real people driving them</p>
<p>with destinations and dreams,</p>
<p>and real lives ahead of them.</p>
<p>Not just cars.</p>
<p>She says it plainly,</p>
<p>in passing thought</p>
<p>almost unaware that she has spoken it aloud.</p>
<p>When the bus arrives in Manhattan,</p>
<p>We part ways with the elder man,</p>
<p>not bothering to exchange numbers</p>
<p>or names, or meanings.</p>
<p>We head for the 9:02 train home</p>
<p>on the Babylon line stopping in Massapequa.</p>
<p>Across the aisle from me sit two</p>
<p>mid twenties men, and an elder man</p>
<p>in a black suit brandishing a polished</p>
<p>United States Marine Corps pin.</p>
<p>He knows I am listening in on his stories,</p>
<p>and it is rude I suppose, but</p>
<p>nothing has interested me more.</p>
<p>He speaks of his time in Somalia.</p>
<p>He speaks of the time,</p>
<p>where he was sent to check a hut,</p>
<p>and when he arrived the parents were already dead,</p>
<p>being eaten by rats and</p>
<p>the gnats were engulfing their bodies.</p>
<p>He speaks of the 3 year old girl</p>
<p>also in the house, with gnats circling her body,</p>
<p>and a faint pulse to keep her suffering.</p>
<p>He said he waited by her side for a day,</p>
<p>because she wailed when he left.</p>
<p>And when she passed,</p>
<p>he buried her himself</p>
<p>and named her Nicole</p>
<p>because it was his daughter’s name.</p>
<p>He closes his eyes when he speaks,</p>
<p>and shakes, as if when he reopens them</p>
<p>he is afraid it will be to the sight of</p>
<p>burying the body of a young Somalian girl,</p>
<p>whose suffering is told in passing</p>
<p>on the 9:02 train to Massapequa.</p>
<p>When his stop arrives,</p>
<p>I shake his hand,</p>
<p>and thank him for his service.</p>
<p>He replies with gratitude,</p>
<p>but I know he will never think of me again.</p>
<p>I am only a stranger on a train.</p>
<p>He will never know that</p>
<p>he is all I can think of days later at night,</p>
<p>and that the sight and smell of a hot desolate land,</p>
<p>with plots of land holding the lives never lived,</p>
<p>and never remembered except for</p>
<p>in passing on the 9:02 train to Massapequa.</p>
<p><br></br></p>
<p>I hope that the first elder man sails</p>
<p>his way across the world</p>
<p>and sees every Philippine island.</p>
<p>And I hope he names his boat Nicole,</p>
<p>and it will have no significance to anyone</p>
<p>except me. No meaning beside meaning</p>
<p>that some young girl,</p>
<p>in a ditch in Somalia is not rotting in the sand</p>
<p>simply to be forgotten.</p>
<p>I hope the veteran’s hands stop shaking one day.</p>
<p>I hope he opens his eyes when he speaks</p>
<p>and has not died in the sand</p>
<p>with Nicole so many years ago.</p>
<p>I hope that one day they read this,</p>
<p>and know that even if this has all been for nothing,</p>
<p>I remembered, and I still do.</p>
<p>Even if I’m simply a stranger</p>
<p>on a bus, or a train,</p>
<p>or a passing car amongst thousands</p>
<p>and someone remembers I’m a person</p>
<p>with dreams and destinations.</p>
<p>It’s now 11:12 p.m. on the</p>
<p>9:30 bus back to Binghamton,</p>
<p>and nobody has asked me my dreams,</p>
<p>or my stories.</p>

                </div>
                <div className="modal-footer">
                  
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModalOne}
                    >
                      Done Feeling?
                    </Button>
                </div>
              </Modal>
            </Col>
            <Col md={3}>
                <div className="title">
                    <strong>A Poem You Wrote For the Girl You Used to Love</strong>
                </div>
              {/* Button trigger modal */}
              <Button
                className="btn-round"
                color="danger"
                outline
                type="button"
                onClick={toggleModalTwo}
              >
               Take a Read 
              </Button>
              {/* Modal */}
              <Modal isOpen={modalTwo} toggle={toggleModalTwo}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModalTwo}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    A Poem You Wrote For the Girl You Used to Love
                  </h5>
                </div>
                <div className="modal-body">
<p>He sits reclined and</p>
<p>Half tepid, half stoned,</p>
<p>Peering through the acrid</p>
<p>Smoke from his cigarette</p>
<p>That hangs in the air of his room</p>
<p>Like an unwanted visitor,</p>
<p>Refusing to leave him</p>
<p>With a clear breath or</p>
<p>Or clear sight. Plants grow</p>
<p>Around him in the piercing</p>
<p>Sunlight that enters through</p>
<p>The window in massive</p>
<p>Blinding beams. He remembers</p> 
<p>To water each plant even</p>
<p>When he forgets to drink,</p>
<p>When he forgets to eat,</p>
<p>When he forgets himself, he remembers</p>
<p>The tulips on the window sill</p>
<p>Because tulips were her</p>
<p>Favorite. As the tulips</p>
<p>Bask in radiant light, he retreats</p>
<p>Into the sanctity of his memory</p>
<p>Unaware that his cigarette</p>
<p>Has burned to ash in his hand.</p>

                </div>
                <div className="modal-footer">   
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModalTwo}
                    >
                      Done Feeling?
                    </Button>
                </div>
              </Modal>
            </Col>
            <Col md={3}>
                <div className="title">
                    <strong>A Song For Yossarian as He Sits in The Dead Oak Tree</strong>
                </div>
              {/* Button trigger modal */}
              <Button
                className="btn-round"
                color="danger"
                outline
                type="button"
                onClick={toggleModalThree}
              >
               Take a Read 
              </Button>
              {/* Modal */}
              <Modal isOpen={modalThree} toggle={toggleModalThree}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModalThree}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    A Song For Yossarian as He Sits in The Dead Oak Tree
                  </h5>
                </div>
                <div className="modal-body">
<p>“I want to live, I want to live,”</p>
<p>Bellows from the cockpit</p>
<p>As shrapnel breaches the B-52</p>
<p>And slits holes the sixteen year old Snowden</p>
<p>Whose secrets spill out in messy</p>
<p>Clumps across the floor, leaving</p>
<p>Blood and youth dripping from the holes</p>
<p>In the floor, at twenty two thousand feet.</p>
<p><br></br></p>
<p>The bombardier sits perched upon</p>
<p>The branch of a leafless oak.</p>
<p>There is life, there is a world,</p>
<p>But not here- Here, he watches the burial</p>
<p>And lets decay sit on his skin</p>
<p>Like grime and mud.</p>
<p>There is no life here, save for the dead</p>
<p>That walk gun in hand, and pretend to</p>
<p>Survive long past they’ve expired.</p>
<p><br></br></p>
<p>There lies bags unpacked in a tent,</p>
<p>From the boy who died over Avignon</p>
<p>From shrapnel to his stomach.</p>
<p>In these bags lies a photo,</p>
<p>Of a sixteen year old girl,</p>
<p>With blonde hair and blue irises,</p>
<p>Wearing a sundress and smiling.</p>

                </div>
                <div className="modal-footer">   
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModalThree}
                    >
                      Done Feeling?
                    </Button>
                </div>
              </Modal>
            </Col>
            <Col md={3}>
                <div className="title">
                    <strong>The Piano Sits Forlorn and Dusty In a Pub on 32nd Street</strong>
                </div>
              {/* Button trigger modal */}
              <Button
                className="btn-round"
                color="danger"
                outline
                type="button"
                onClick={toggleModalFour}
              >
               Take a Read 
              </Button>
              {/* Modal */}
              <Modal isOpen={modalFour} toggle={toggleModalFour}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModalFour}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    The Piano Sits Forlorn and Dusty In a Pub on 32nd Street
                  </h5>
                </div>
                <div className="modal-body">
<p>The barstool supporting his weight</p>
<p>is being held together by off brand duct tape,</p>
<p>doing its best to keep the foam inside,</p>
<p>and the ravages of time out.</p>
<p><br></br></p>
<p>Frank sits, leaning both elbows on the bar</p>
<p>accompanied only by his pack of Marlboro Reds</p>
<p>and the filthy glass that’s stains</p>
<p>never seem to wash clean off.</p>
<p><br></br></p>
<p>The bar is desolate,</p>
<p>barely alive with the hum of dim lighting;</p>
<p>there are no conversations, only murmurs</p>
<p>of tumbling grunts slipping out between sips.</p>
<p><br></br></p>
<p>The air surrounding Frank is thick</p>
<p>with the acrid fumes of cigarette smoke,</p>
<p>and the cutting waft of</p>
<p>stale beer and fresh Jim Beam.</p>
<p><br></br></p>
<p>In the corner there is a wooden weathered piano,</p>
<p>next to a broken jukebox,</p>
<p>collecting dust and being overlooked-</p>
<p>belonging to an age past.</p>
<p><br></br></p>
<p>Frank’s fingers twitch on the bar,</p>
<p>from a faint recollection</p>
<p>of having purpose- a muscular memory</p>
<p>brought from the image of white keys.</p>
<p><br></br></p>
<p>Instead, Frank closes his fingers into a fist</p>
<p>and knocks hard on the bar twice,</p>
<p>not feeling the wood, or the blood</p>
<p>dripping from his cracked and dry knuckles.</p>
<p><br></br></p>
<p>He is met with a fresh bourbon,</p>
<p>and he forgets the white keys within seconds.</p>
<p>He forgets he is a father.</p>
<p>He forgets he is Frank.</p>
<p><br></br></p>
<p>There are no songs playing tonight,</p>
<p>save for the rhythmical knuckle taps</p>
<p>from Frank every few minutes</p>
<p>reminding himself and the bar that he’s still alive.</p>


                </div>
                <div className="modal-footer">   
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModalFour}
                    >
                      Done Feeling?
                    </Button>
                </div>
              </Modal>
            </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
     );
}
 
export default FunStuff;