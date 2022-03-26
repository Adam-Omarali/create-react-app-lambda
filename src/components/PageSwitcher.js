import React, { useState } from 'react';
import Editor from '../pages/Editor';
import Home from '../pages/LandingPage';
import Results from '../pages/Results';

function PageSwitcher(){
    const [currPage, setCurrPage] = useState("home")

    switch(currPage){
        case "home":
            return <Home setPage={setCurrPage}/>
        case "editor":
            return <Editor setPage={setCurrPage}/>
        case "results":
            return <Results setPage={setCurrPage}/>
        default:
            return <>page does not exist</>
    }
}

export default PageSwitcher;