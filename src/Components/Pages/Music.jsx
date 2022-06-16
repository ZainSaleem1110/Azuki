import React, { useState } from 'react'
import MusicPic from '../../assests/images/jax.png'
import { BsPlusLg } from 'react-icons/bs'
import { GrSubtract } from 'react-icons/gr'
import { FaPlay } from 'react-icons/fa'
import { CgPlayTrackNext, CgPlayTrackPrev, CgPlayPause } from 'react-icons/cg'
import Music4 from '../../assests/images/music/1.m4a'
import Music5 from '../../assests/images/music/2.m4a'
import Music1 from '../../assests/images/music/tom-1.mp3'
import Music2 from '../../assests/images/music/tom-2.mp3'
import Music3 from '../../assests/images/music/tom-3.mp3'

function Updates() {
    var MusicArr = [Music4, Music2, Music3, Music1, Music5]
    const [check, setCheck] = useState(0)
    const [play, setPlay] = useState(0)
    const [count, setCount] = useState(0);

    let handleMaximize = () => {
        setCheck(1)
    }
    let handleMinimize = () => {
        setCheck(0)
    }
    let handlePlay = () => {
        var start = document.getElementById("myAudio")
        setPlay(1)
        start.play()
    }
    let handleStop = () => {
        var stop = document.getElementById("myAudio")
        setPlay(0)
        stop.pause()
    }
    console.log(count)
    return (
        <>
            {check == 0 && (
                <div className="position-absolute" style={{ top: "0px", left: "0px" }}>
                    <div className="d-flex align-items-end position-relative" style={{ width: "134px", height: "80px" }}>
                        <div className="bg-white rounded position-relative" style={{ width: "114px", height: "56px" }}>
                            <img src={MusicPic} className="position-absolute" style={{ bottom: "0px", left: "0px", width: "64px", height: "64px" }} alt="" srcset="" />
                            <h1 className="d-flex justify-content-end pr-3 pt-1" style={{ fontWeight: "300" }}>...</h1>
                        </div>
                        <div className="bg-white position-absolute rounded-circle d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px", top: "0px", right: "0px", border: "5px solid #E5E5E5" }} onClick={handleMaximize}>
                            <BsPlusLg />
                        </div>
                    </div>
                </div>
            )}
            {check == 1 && (
                <div className="position-absolute" style={{ top: "0px", left: "0px" }}>
                    <div className="d-flex align-items-end position-relative" style={{ width: "520px", height: "80px" }}>
                        <div className="bg-white rounded position-relative d-flex flex-wrap" style={{ width: "500px", height: "56px" }}>
                            <img src={MusicPic} className="position-absolute" style={{ bottom: "0px", left: "0px", width: "80px", height: "80px" }} alt="" srcset="" />
                            {play == 0 && (
                                <h1 className="col-4 d-flex justify-content-end pr-3 pt-1" style={{ fontWeight: "300" }}>...</h1>
                            )}
                            {play == 1 && (
                                <div className="col-4 d-flex justify-content-end pr-3 pt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="equilizer" viewBox="0 0 128 128">
                                        <g>
                                            <title>Audio Equilizer</title>
                                            <rect class="bar" transform="translate(0,0)" y="15"></rect>
                                            <rect class="bar" transform="translate(25,0)" y="15"></rect>
                                            <rect class="bar" transform="translate(50,0)" y="15"></rect>
                                            <rect class="bar" transform="translate(75,0)" y="15"></rect>
                                            <rect class="bar" transform="translate(100,0)" y="15"></rect>
                                        </g>
                                    </svg>
                                </div>
                            )}
                            <div className="col-3 mt-2">
                                <h5 className="p-0 m-0" style={{ fontSize: "16px", fontWeight: "700" }}>LEVEL UP</h5>
                                <p className="pt-1 m-0" style={{ color: "#E5E5E5", fontSize: "11.2px" }}>MALIKAII</p>
                            </div>
                            <div className="col-4 pl-5 pr-0 d-flex justify-content-between align-items-center">
                                <CgPlayTrackPrev style={{ fontSize: "20px" }} onClick={() => {
                                    if (count == 0) {
                                        setCount(MusicArr.length - 1)
                                    }
                                    else {
                                        setCount(count - 1)
                                    }
                                }} />
                                {play == 0 && (
                                    <FaPlay style={{ fontSize: "16px" }} onClick={handlePlay} />
                                )}
                                {play == 1 && (
                                    <CgPlayPause style={{ fontSize: "30px" }} onClick={handleStop} />
                                )}
                                <CgPlayTrackNext style={{ fontSize: "20px" }} onClick={() => {
                                    if (count == MusicArr.length - 1) {
                                        setCount(0)
                                    }
                                    else {
                                        setCount(count + 1)
                                    }
                                }} />
                            </div>

                        </div>
                        <div className="bg-white position-absolute rounded-circle d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px", top: "0px", right: "0px", border: "5px solid" }} onClick={handleMinimize}>
                            <GrSubtract />
                        </div>
                    </div>
                </div>
            )}
            {count == 0 && (
                <audio id="myAudio" autoPlay onEnded={() => setCount(count + 1)}>
                    <source src={MusicArr[0]} type="audio/ogg" />
                    <source src={MusicArr[0]} type="audio/mpeg" />
                </audio>
            )}
            {count == 1 && (
                <audio id="myAudio" autoPlay onEnded={() => setCount(count + 1)}>
                    <source src={MusicArr[1]} type="audio/ogg" />
                    <source src={MusicArr[1]} type="audio/mpeg" />
                </audio>
            )}
            {count == 2 && (
                <audio id="myAudio" autoPlay onEnded={() => setCount(count + 1)}>
                    <source src={MusicArr[2]} type="audio/ogg" />
                    <source src={MusicArr[2]} type="audio/mpeg" />
                </audio>
            )}
            {count == 3 && (
                <audio id="myAudio" autoPlay onEnded={() => setCount(count + 1)}>
                    <source src={MusicArr[3]} type="audio/ogg" />
                    <source src={MusicArr[3]} type="audio/mpeg" />
                </audio>
            )}
            {count == 4 && (
                <audio id="myAudio" autoPlay onEnded={() => setCount(count + 1)}>
                    <source src={MusicArr[4]} type="audio/ogg" />
                    <source src={MusicArr[4]} type="audio/mpeg" />
                </audio>
            )}
        </>
    )
}

export default Updates
