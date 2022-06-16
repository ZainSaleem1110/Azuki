import React from "react";
import GardenBgImg from "../../assests/images/garden-bg.png";
import Navbar from "../MajorComponents/Navbar/navbar";
import {Link} from 'react-router-dom'
import Img01 from '../../assests/images/gardenSection02/1.png'
import Img02 from '../../assests/images/gardenSection02/2.png'
import Img03 from '../../assests/images/gardenSection02/3.png'
import Img04 from '../../assests/images/gardenSection02/4.png'
import Img05 from '../../assests/images/gardenSection02/5.png'
import Img06 from '../../assests/images/gardenSection02/6.png'
import Img07 from '../../assests/images/gardenSection02/7.png'
import Img08 from '../../assests/images/gardenSection02/8.png'
import Img09 from '../../assests/images/gardenSection02/9.png'
import Img10 from '../../assests/images/gardenSection02/10.png'
import Map from '../../assests/images/map.PNG'
import Blog01 from '../../assests/images/updates.png'
import Blog02 from '../../assests/images/manifesto.png'
import Blog03 from '../../assests/images/twitter.png'
import Blog04 from '../../assests/images/discord.png'
import {BsTwitter} from 'react-icons/bs'
import GirlImg from '../../assests/images/girl44.png'

function Garden() {
  return (
    <>
    <div className="page pt-4 d-lg-block d-none">
      <Navbar />
      <div className="d-lg-block d-none">
      <div className="col-12 container-fluid pt-3 d-flex">
        <div className="col-1">
          <div className="barList">
            <a className="barSlide"></a>
            <a className="barSlide"></a>
            <a className="barSlide"></a>
            <a className="barSlide"></a>
            </div>
        </div>
        <div className="col-5 m-0 p-0">
          <h1 className="heading">
            FROM THE ALLEY <br /> TO THE GARDEN{" "}
            <span className="head2">{"//"}</span>
          </h1>
          <div className="col-8">
          <p className="fontSize mt-4">
          Azuki is a brand.<br/>
          A new kind of brand that we build together.
          </p>
          <p className="garden-gradient m-0 px-2 py-1" style={{fontSize:"12px"}}>
          A brand for the metaverse. By the community.
              </p>
          <p className="mt-4 fontSize">A collection of 10,000 avatars that give you membership access to The Garden. It starts with exclusive streetwear collabs, NFT drops, live events, and much more that will be revealed over time. Community ownership in Azuki allows for a new genre of media which the world has yet to explore. An Azuki is your identity in the metaverse — let's build together.</p>
          <p className="fontSize mt-2">The Garden is a corner of the internet where art, community, and culture fuse to create magic. The lines between the physical and digital worlds are blurring and the rules are being rewritten.</p>
          <div className="d-flex justify-content-between col-12">
              <p className="fontSize">Take the Red Bean.</p>
              <p>{"//"}</p>
              <a className="text-white px-3 d-flex align-items-center" href="#section-2" style={{background:"black",borderRadius:"20px",height:"25px"}}>We Did {""}<span className="ml-2">↓</span></a>
          </div>
        </div>
        <div id="section-2" className="mb-5 pb-5">
        <h1 className="heading-garden mt-5 mb-4 pt-4">
        CREATED BY MANY{" "}
            <span className="head2">{"//"}</span>
          </h1>
          <p className="fontSize" style={{letterSpacing:"1px"}}>The core team is born in Los Angeles, CA - a team of human beans with backgrounds in crypto, technology, and gaming {" "}<span className="garden-gradient m-0 px-2 py-1">working to build a decentralized brand of the future.</span></p>
          <div className="d-flex flex-wrap col-12 mt-4 m-0 p-0">
              <div className="creators pt-3 d-flex flex-column justify-content-center align-items-center position-relative">
                  <img src={Img01} className="" alt="" srcset="" />
                  <h6 className="mt-3">ZZZAGB...</h6>
                  <p>HUMAN BEAN</p>
                  <div className="position-absolute bg-danger d-flex flex-column justify-content-center align-items-center text-white creatorsHover" style={{top:"-15px",left:"-10px",height:"auto",width:"130px"}}>
                  <img src={Img01} className="" alt="" srcset="" />
                  <h6 className="mt-3">ZZZAGB...</h6>
                  <p className="mb-2">HUMAN BEAN</p>
                  <p className="text-white p-0 mb-2" style={{fontSize:"10px"}}><BsTwitter/>{""}<span className="ml-2"><a href="https://twitter.com/ZZZAGABOND" className="text-white">@ZZZAGABOND</a></span></p>
                  <p className="text-white px-3" style={{fontSize:"10px"}}>Reformed DeFi builder. Ex-big tech. Collector of sweat shorts.</p>
                  </div>
              </div>
              <div className="creators pt-3 d-flex flex-column justify-content-center align-items-center position-relative">
              <img src={Img02} className="" alt="" srcset="" />
                  <h6 className="mt-3">STEAMBOY</h6>
                  <p>ARTIST</p>
                  <div className="position-absolute bg-danger d-flex flex-column justify-content-center align-items-center text-white creatorsHover" style={{top:"-15px",left:"-10px",height:"auto",width:"130px"}}>
                  <img src={Img02} className="" alt="" srcset="" />
                  <h6 className="mt-3">STEAMBOY</h6>
                  <p className="mb-2">ARTIST</p>
                  <p className="text-white p-0 mb-2" style={{fontSize:"10px"}}><BsTwitter/>{""}<span className="ml-2"><a href="https://twitter.com/steamboy33" className="text-white">@STEAMBOY33</a></span></p>
                  <p className="text-white px-3" style={{fontSize:"10px"}}>Overwatch Character Art director. Pushing jpegs since the late 90's. Never actually watched all of Steamboy.</p>
                  </div>
              </div>
              <div className="creators pt-3 d-flex flex-column justify-content-center align-items-center position-relative">
              <img src={Img03} className="" alt="" srcset="" />
                  <h6 className="mt-3">2PM.FLOW</h6>
                  <p>ENGINEER</p>
                  <div className="position-absolute bg-danger d-flex flex-column justify-content-center align-items-center text-white creatorsHover" style={{top:"-15px",left:"-10px",height:"auto",width:"130px"}}>
                  <img src={Img03} className="" alt="" srcset="" />
                  <h6 className="mt-3">2PM.FLOW</h6>
                  <p className="mb-2">ENGINEER</p>
                  <p className="text-white p-0 mb-2" style={{fontSize:"10px"}}><BsTwitter/>{""}<span className="ml-2"><a href="https://twitter.com/2pmflow" className="text-white">@2PMFLOW</a></span></p>
                  <p className="text-white px-3" style={{fontSize:"10px"}}>Amateur rapper, anime nerd, ex-BigTech. Down 80% on Top Shot moments but up 100% on good vibes.</p>
                  </div>
              </div>
              <div className="creators pt-3 d-flex flex-column justify-content-center align-items-center position-relative">
              <img src={Img04} className="" alt="" srcset="" />
                  <h6 className="mt-3">LOCATION...</h6>
                  <p>ENGINEER </p>
                  <div className="position-absolute bg-danger d-flex flex-column justify-content-center align-items-center text-white creatorsHover" style={{top:"-15px",left:"-10px",height:"auto",width:"130px"}}>
                  <img src={Img04} className="" alt="" srcset="" />
                  <h6 className="mt-3">LOCATION...</h6>
                  <p className="mb-2">ENGINEER</p>
                  <p className="text-white p-0 mb-2" style={{fontSize:"10px"}}><BsTwitter/>{""}<span className="ml-2"><a href="https://twitter.com/locationtba" className="text-white">@LOCATIONT...</a></span></p>
                  <p className="text-white px-3" style={{fontSize:"10px"}}>Ex-Facebook software engineer. Now racing Zuck to the metaverse.</p>
                  </div>
              </div>
              <div className="creators pt-3 d-flex flex-column justify-content-center align-items-center position-relative">
              <img src={Img05} className="" alt="" srcset="" />
                  <h6 className="mt-3">HOSHIBOY</h6>
                  <p>DESIGN</p>
                  <div className="position-absolute bg-danger d-flex flex-column justify-content-center align-items-center text-white creatorsHover" style={{top:"-15px",left:"-10px",height:"auto",width:"130px"}}>
                  <img src={Img05} className="" alt="" srcset="" />
                  <h6 className="mt-3">HOSHIBOY</h6>
                  <p className="mb-2">DESIGN</p>
                  <p className="text-white p-0 mb-2" style={{fontSize:"10px"}}><BsTwitter/>{""}<span className="ml-2"><a href="https://twitter.com/hoshiboyzen" className="text-white">@HOSHIBOYZEN</a></span></p>
                  <p className="text-white px-3" style={{fontSize:"10px"}}>Did Y-Combinator twice. Watches anime dubbed. ngmi.</p>
                  </div>
              </div>
              <div className="creators pt-3 d-flex flex-column justify-content-center align-items-center position-relative">
              <img src={Img06} className="" alt="" srcset="" />
                  <h6 className="mt-3">JOO</h6>
                  <p>ARTIST</p>
                  <div className="position-absolute bg-danger d-flex flex-column justify-content-center align-items-center text-white creatorsHover" style={{top:"-15px",left:"-10px",height:"auto",width:"130px"}}>
                  <img src={Img06} className="" alt="" srcset="" />
                  <h6 className="mt-3">JOO</h6>
                  <p className="mb-2">ARTIST</p>
                  <p className="text-white p-0 mb-2" style={{fontSize:"10px"}}><BsTwitter/>{""}<span className="ml-2"><a href="https://twitter.com/njoo" className="text-white">@NJOO</a></span></p>
                  <p className="text-white px-3" style={{fontSize:"10px"}}>Artist on Street Fighter Comic. Way too cool for a bio..</p>
                  </div>
              </div>
              <div className="creators pt-3 d-flex flex-column justify-content-center align-items-center position-relative">
              <img src={Img07} className="" alt="" srcset="" />
                  <h6 className="mt-3">GENGHISKWA...</h6>
                  <p>ARTIST</p>
                  <div className="position-absolute bg-danger d-flex flex-column justify-content-center align-items-center text-white creatorsHover" style={{top:"-15px",left:"-10px",height:"auto",width:"130px"}}>
                  <img src={Img07} className="" alt="" srcset="" />
                  <h6 className="mt-3">GENGHISKWA...</h6>
                  <p className="mb-2">ARTIST</p>
                  <p className="text-white p-0 mb-2" style={{fontSize:"10px"}}><BsTwitter/>{""}<span className="ml-2"><a href="https://twitter.com/GenghisKwan" className="text-white">@GENGHISKWAN</a></span></p>
                  <p className="text-white px-3" style={{fontSize:"10px"}}>Happy-go-lucky, HK Canadian boy by day, Azuki ninja artist by night. Nasty right roundhouse</p>
                  </div>
              </div>
              <div className="creators pt-3 d-flex flex-column justify-content-center align-items-center position-relative">
              <img src={Img08} className="" alt="" srcset="" />
                  <h6 className="mt-3">DAPH</h6>
                  <p>COMMUNITY</p>
                  <div className="position-absolute bg-danger d-flex flex-column justify-content-center align-items-center text-white creatorsHover" style={{top:"-15px",left:"-10px",height:"auto",width:"130px"}}>
                  <img src={Img08} className="" alt="" srcset="" />
                  <h6 className="mt-3">DAPH</h6>
                  <p className="mb-2">COMMUNITY</p>
                  <p className="text-white p-0 mb-2" style={{fontSize:"10px"}}><BsTwitter/>{""}<span className="ml-2"><a href="https://twitter.com/daphtheSHAFT" className="text-white">@DAPHTHESHAFT...</a></span></p>
                  <p className="text-white px-3" style={{fontSize:"10px"}}>From esports to e-money, now on Discord banning dummies.</p>
                  </div>
              </div>
              <div className="creators pt-3 d-flex flex-column justify-content-center align-items-center position-relative">
              <img src={Img09} className="" alt="" srcset="" />
                  <h6 className="mt-3">BEBOOP</h6>
                  <p>COMMUNITY</p>
                  <div className="position-absolute bg-danger d-flex flex-column justify-content-center align-items-center text-white creatorsHover" style={{top:"-15px",left:"-10px",height:"auto",width:"130px"}}>
                  <img src={Img09} className="" alt="" srcset="" />
                  <h6 className="mt-3">BEBOOP</h6>
                  <p className="mb-2">COMMUNITY</p>
                  <p className="text-white p-0 mb-2" style={{fontSize:"10px"}}><BsTwitter/>{""}<span className="ml-2"><a href="https://twitter.com/BeboopAzuki" className="text-white">@BEBOOPAZUKI...</a></span></p>
                  <p className="text-white px-3" style={{fontSize:"10px"}}>Formerly a PM at Google, whatever that means. Strong opinions, loosely held. Hates hiking.</p>
                  </div>
              </div>
              <div className="creators pt-3 d-flex flex-column justify-content-center align-items-center position-relative">
              <img src={Img10} className="" alt="" srcset="" />
                  <h6 className="mt-3">PIZOOKIE</h6>
                  <p>COMMUNITY</p>
                  <div className="position-absolute bg-danger d-flex flex-column justify-content-center align-items-center text-white creatorsHover" style={{top:"-15px",left:"-10px",height:"auto",width:"130px"}}>
                  <img src={Img10} className="" alt="" srcset="" />
                  <h6 className="mt-3">PIZOOKIE</h6>
                  <p className="mb-2">COMMUNITY</p>
                  <p className="text-white p-0 mb-2" style={{fontSize:"10px"}}><BsTwitter/>{""}<span className="ml-2"><a href="https://twitter.com/pizookie1" className="text-white">@PIZOOKIE1</a></span></p>
                  <p className="text-white px-3" style={{fontSize:"10px"}}>Baked bean chillin on the moon. Converted from 2 Chainz to blockchains.</p>
                  </div>
              </div>
          </div>
          <div className="d-flex justify-content-start mt-4 col-11">
              <p className="fontSize">Together with</p>
              <a className="text-white ml-3 px-3 d-flex align-items-center" href="#section-3" style={{background:"black",borderRadius:"20px",height:"25px"}}>The Azuki Community {""} <span className="ml-2">↓</span></a>
          </div>
        </div>
        <div id="section-3">
        <h1 className="heading-garden mt-5 pt-4">
        OWNED BY ALL{" "}
            <span className="head2">{"//"}</span>
          </h1>
          <p className="fontSize mt-4" style={{letterSpacing:"1px"}}>The real team is the broader Azuki community -<br/> {" "}<span className="garden-gradient m-0 px-2 py-1">a global community working together</span> to build a decentralized brand of the future:</p>
          <img src={Map} alt="" />
          <div className="d-flex justify-content-start mt-4 col-11">
              <p className="fontSize">Fall into the</p>
              <a className="text-white ml-3 px-3 d-flex align-items-center" href="#section-4" style={{background:"black",borderRadius:"20px",height:"25px"}}>Rabbit Hole  {""} <span className="ml-2">↓</span></a>
          </div>
        </div>
        <div id="section-4" className="pt-5 pb-5">
        <h1 className="heading-garden mt-5 mb-4 pt-5">
        INTO THE<br/>
        RABBIT HOLE {" "}
            <span className="head2">{"//"}</span>
          </h1>
          <p className="fontSize pb-5" style={{borderBottom:"2px solid #E5E5E5"}}>To the ones with the courage to jump down a peculiar rabbit hole.<br/>
            One that pulls you away from a world that's created by many and owned by few...</p>
            <div className="col-12 p-0 m-0 d-flex flex-wrap pb-5 mb-5" style={{height:"auto",width:"610px"}}>
                <Link to="/update" className="blog pr-1 pl-0 col-6 pb-2">
                    <div className="w-100 h-100 p-0 m-0 blogSection d-flex align-items-end rounded">
                        <img src={Blog01} style={{width:"95px",height:"75px"}} alt="" srcset="" />
                        <div className="h-50 mb-2 ml-3">
                            <h6 className="p-0 m-0">UPDATES</h6>
                            <p className="pb-3 mt-1">Thoughts & News</p>
                        </div>
                    </div>
                </Link>
                <Link to="/manifesto" className="blog col-6 pl-1 pr-0 pb-2 ">
                <div className="w-100 h-100 blogSection d-flex align-items-end rounded">
                <img src={Blog02} style={{width:"95px",height:"75px"}} alt="" srcset="" />
                        <div className="h-50 mb-2 ml-3">
                            <h6 className="p-0 m-0">MANIFESTO</h6>
                            <p className="pb-3 mt-1">Grow Together</p>
                        </div>
                </div>
                </Link>
                <a href="https://twitter.com/azukizen" className="blog col-6 pr-1 pl-0">
                <div className="w-100 h-100 blogSection d-flex align-items-end rounded">
                <img src={Blog03} style={{width:"95px",height:"75px"}} alt="" srcset="" />
                        <div className="h-50 mb-2 ml-3">
                            <h6 className="p-0 m-0">TWITTER</h6>
                            <p className="pb-3 mt-1">Tweet tweet</p>
                        </div>
                </div>
                </a>
                <a href="https://discord.com/invite/azuki" className="blog col-6 pl-1 pr-0">
                <div className="w-100 h-100 blogSection d-flex align-items-end rounded">
                <img src={Blog04} style={{width:"95px",height:"75px"}} alt="" srcset="" />
                        <div className="h-50 mb-2 ml-3">
                            <h6 className="p-0 m-0">Discord</h6>
                            <p className="pb-3 mt-1">Join the community</p>
                        </div>
                </div>
                </a>
            </div>
          </div>

        </div>
      </div>
      <div className="col-6 p-0 m-0 gardenImg">
        <img className="bgImg" style={{height:"100vh"}} src={GardenBgImg} alt="" srcset="" />
      </div>
      </div>
    </div>
      <div className="d-lg-none d-block gardenMob p-0 m-0 pt-5 position-relative">
        <Navbar/>
        <div id="carouselExampleIndicators" class="carousel slide pt-5 pl-5">
        <div class="carousel-inner">
    <div class="carousel-item active pb-5 mb-5">
    <h1 className="m-0 p-0" style={{fontSize:"24px",fontWeight:"700"}}>
            FROM THE ALLEY <br /> TO THE GARDEN{" "}
            <span className="" style={{fontSize:"12px",fontWeight:"300"}}>{"//"}</span>
          </h1>
          <div className="col-11 p-0 m-0">
          <p className="fontSize mt-2 m-0 p-0">
          Azuki is a brand.<br/>
          A new kind of brand that we build together.
          </p>
          <p className="garden-gradient m-0 px-2 py-1 col-sm-5 col-10" style={{fontSize:"12px"}}>
          A brand for the metaverse. By the community.
              </p>
          <p className="mt-4 fontSize">A collection of 10,000 avatars that give you membership access to The Garden. It starts with exclusive streetwear collabs, NFT drops, live events, and much more that will be revealed over time. Community ownership in Azuki allows for a new genre of media which the world has yet to explore. An Azuki is your identity in the metaverse — let's build together.</p>
          <p className="fontSize mt-2">The Garden is a corner of the internet where art, community, and culture fuse to create magic. The lines between the physical and digital worlds are blurring and the rules are being rewritten.</p>
          <div className="d-flex col-12 p-0 m-0">
              <p className="fontSize">Take the Red Bean.</p>
              <p className="ml-3">{"//"}</p>
              </div>
              </div>
    </div>
    <div class="carousel-item">
    <h1 className=" mt-5 mb-4 pt-4" style={{fontSize:"24px",fontWeight:"700"}}>
        CREATED BY MANY{" "}
            <span className="head2">{"//"}</span>
          </h1>
          <p className="fontSize" style={{letterSpacing:"1px"}}>The core team is born in Los Angeles, CA - a team of human beans with backgrounds in crypto, technology, and gaming {" "}<span className="garden-gradient m-0 px-2 py-1">working to build a decentralized brand of the future.</span></p>
    </div>
    <div class="carousel-item mb-5 pb-5">
    <h1 className="m-0 p-0" style={{fontSize:"24px",fontWeight:"700"}}>
            INTRO THE  <br /> RABBIT HOLE{" "}
            <span className="" style={{fontSize:"12px",fontWeight:"300"}}>{"//"}</span>
          </h1>
          <div className="col-11 p-0 m-0">
          <p className="fontSize mt-3 m-0 p-0 border-bottom pb-3">
          To the ones with the courage to jump down a peculiar rabbit hole.<br/>
          One that pulls you away from a world that's created by many and owned by few...
          </p>
          <div className="col-sm-10 col-12 p-0 mt-4 mb-5">
              <Link to="/update" className="rounded d-flex text-dark" style={{height:"72px",background:"#E5E5E5"}}>
              <img className="" src={Blog01} style={{width:"95px",height:"72px"}} alt="" srcset="" />
                        <div className="h-50 mt-3 ml-3">
                            <h6 className="p-0 m-0" style={{fontSize:"14px"}}>UPDATES</h6>
                            <p className="pb-3 mt-1" style={{fontSize:"12px"}}>Thoughts & News</p>
                        </div>
              </Link>
              <Link to="/manifesto" className="rounded mt-2 d-flex text-dark" style={{height:"72px",background:"#E5E5E5"}}>
              <img className="" src={Blog02} style={{width:"95px",height:"72px"}} alt="" srcset="" />
                        <div className="h-50 mt-3 ml-3">
                            <h6 className="p-0 m-0" style={{fontSize:"14px"}}>Manifesto</h6>
                            <p className="pb-3 mt-1" style={{fontSize:"12px"}}>Grow Together</p>
                        </div>
              </Link>
              <a href="https://twitter.com/azukizen" className="rounded mt-2 d-flex text-dark" style={{height:"72px",background:"#E5E5E5"}}>
              <img className="" src={Blog03} style={{width:"95px",height:"72px"}} alt="" srcset="" />
                        <div className="h-50 mt-3 ml-3">
                            <h6 className="p-0 m-0" style={{fontSize:"14px"}}>TWITTER</h6>
                            <p className="pb-3 mt-1" style={{fontSize:"12px"}}>Tweet tweet</p>
                        </div>
              </a>
              <a href="https://discord.com/invite/azuki" className="rounded mt-2 d-flex text-dark" style={{height:"72px",background:"#E5E5E5"}}>
              <img className="" src={Blog04} style={{width:"95px",height:"72px"}} alt="" srcset="" />
                        <div className="h-50 mt-3 ml-3">
                            <h6 className="p-0 m-0" style={{fontSize:"14px"}}>DISCORD</h6>
                            <p className="pb-3 mt-1" style={{fontSize:"12px"}}>Join the community</p>
                        </div>
              </a>
          </div>
          </div>
    </div>
  </div>
        </div>
        <ol class="carousel-indicators px-2 m-0 col-12 d-flex justify-content-between position-fixed" style={{height:"100px",background:"#E5E5E5",overflow:"hidden",bottom:"0px"}}>
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active h-75 w-75 px-2 bg-white mr-1">
        </li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active h-75 w-75 p-0  bg-white mx-1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active h-75 w-75 p-0  bg-white ml-1"></li>
        </ol>
        <img src={GirlImg} className="position-fixed col-6" style={{bottom:"100px",right:"0px"}} alt="" srcset="" />
      </div>
    </>
  );
}

export default Garden;
