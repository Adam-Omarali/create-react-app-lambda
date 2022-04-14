import { Button, TextField } from "@mui/material";
import { useState } from "react";
import AutoDisplay from "../sections/Auto";
import ClimbDisplay from "../sections/Climb";
import GeneralDisplay from "../sections/General";
import TeleopDisplay from "../sections/Teleop";
import '../static/page.css'
import state from "../static/state";

function Editor(props){
    const [teamNumber, setTeamNumber] = useState(0)
    const [save, setSave] = useState(false)
    const [notes, setNotes] = useState("")
    const [matchNumber, setMatchNumber] = useState("")

    if(save){
        state.general.teamNumber = teamNumber
        state.general.notes = notes
        state.general.match = matchNumber
    }

    return(
        <div className="background">
            <div className="side-by-side">
                <div style={{flexBasis: "50%"}}>
                    <AutoDisplay save={save}/>
                    <ClimbDisplay save={save}/>
                    <GeneralDisplay save={save}/>
                </div>

                <div>
                    <TeleopDisplay save={save}/>
                </div>
            </div>

            <div className="padding-top">
                <hr></hr>
                <div className="padding-top">
                    <TextField label="Team Number" value={teamNumber} onChange={(e) => {setTeamNumber(e.target.value)}}/>
                </div>
                <div className="padding-top">
                    <TextField placeholder="Notes" value={notes} onChange={(e) => {setNotes(e.target.value)}}>Notes</TextField>
                 </div>
                <div className="padding-top">
                    <TextField placeholder="Match Number" value={matchNumber} onChange={(e) => {setMatchNumber(e.target.value)}}>Match Number</TextField>
                 </div>
                <div className="padding-top">
                    <Button style={{backgroundColor: 'green', color:'white'}} variant="contained" onClick={() => setSave(!save)}>{save ? "Done" : "Save"}</Button>
                </div>
                {save && teamNumber !== 0 && <div className="padding-top">
                    <Button variant="contained" onClick={() => props.setPage("results")}>Finish Match</Button>
                </div>}
                <div className="padding-top">
                    <Button onClick={() => props.setPage("home")}>Back Home</Button>
                </div>
            </div>
            
        </div>
    )
}

export default Editor;