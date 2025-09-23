import SelectedCards from "./SelectedCards/SelectedCards";

const SelectPlayers = ({purchasePlayers,removePlayer}) => {
    console.log(purchasePlayers)
    return (
        <div className="space-y-2">
            {
            purchasePlayers.map(player => 
                <SelectedCards removePlayer={removePlayer} player = {player}></SelectedCards>
            
            )
            }

        </div>
    )
}


export default SelectPlayers;