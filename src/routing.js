import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Garden from './Components/Pages/Garden'
import Manifesto from './Components/Pages/Manifesto'
import Mindmap from './Components/Pages/Mindmap'
import Update from './Components/Pages/updates'
import Music from './Components/Pages/Music'

function routing() {
    return (
        <div className="position-relative">
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/garden" >
                <Garden/>
            </Route>
            <Route path="/manifesto" >
                <Manifesto/>
            </Route>
            <Route path="/mindmap" >
                <Mindmap/>
            </Route>
            <Route path="/update" >
                <Update/>
            </Route>
            <div className="position-fixed d-lg-block d-none" style={{bottom:"60px",left:"40px",width:"114px",height:"56px"}}>
                <div className="w-100 h-100 position-relative"></div>
                <Music className="position-absolute" style={{top:"0px",left:"0px",zIndex:"10"}}/>
            </div>
        </div>
    )
}

export default routing
