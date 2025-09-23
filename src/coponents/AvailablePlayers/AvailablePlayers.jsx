import React, { use } from "react"
import PlayerCard from "../PlayersCard/PlayerCard";

export default function AvailablePlayers ({promisePlayers,availableBalance, setAvailableBalance, purchasePlayers, setPurchasedPlayers}) {
    const players = use(promisePlayers);

    const [player_id,player_name,player_image,player_country,playing_role,playing_position,player_price,player_rating] = players;

    return (
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6"> 

        {
           players.map(player => <PlayerCard player={player} availableBalance= {availableBalance} setAvailableBalance ={setAvailableBalance} purchasePlayers={purchasePlayers} setPurchasedPlayers ={setPurchasedPlayers}></PlayerCard>) 
        }
 
        </div>
    )
}