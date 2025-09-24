import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedCards from "./SelectedCards/SelectedCards";

const SelectPlayers = ({purchasePlayers,removePlayer, toggle, setToggle }) => {
    console.log(purchasePlayers)
    return (
        <div className="space-y-2">
            {
            purchasePlayers.map(player => 
                <SelectedCards removePlayer={removePlayer} player = {player}></SelectedCards>
            
            )
            }
            <button onClick={()=>setToggle(true)} className="btn btn-outline btn-warning">Add Players</button>

           
        </div>
        //  {/* {toggle === true? <AvailablePlayers></AvailablePlayers> : " "
        //     } */}
    )
}


export default SelectPlayers;