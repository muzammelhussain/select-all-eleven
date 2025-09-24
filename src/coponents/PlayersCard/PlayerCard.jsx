import userImg from "../../assets/Group-1.png"
import flag from "../../assets/Group.png"
import React, { useState } from "react";
import { toast } from "react-toastify";
const PlayerCard = ({player,availableBalance, setAvailableBalance, setPurchasedPlayers, purchasePlayers}) => {
    const [isSelected, setSelected] = useState(false);

    const handleSelected = (playerData) => {
      if (purchasePlayers.length === 6) {
     toast.error("You cannot buy more than 6 players!", {
  position: "top-right",
});
    return;
    } else if(availableBalance >= playerData.player_price ){
        setSelected(true);
        setAvailableBalance(availableBalance-playerData.player_price);
      
        setPurchasedPlayers([...purchasePlayers,playerData])
      
    toast.success("Player has been added!", {
  position: "top-right",
});
      }  else {
     
    toast.error("Not enough coins!!", {
  position: "top-right",
});

      }
        
        
    }

    return(
        <div className="card bg-white w-96 shadow-sm">
  <div className={`w-[350px] min-h-[250px] rounded-md bg-cover bg-top-center mx-auto my-3`} style={{backgroundImage: `url(${player.player_image})`}}></div>
  <div className="card-body space-y-2">
    <h2 className="card-title"><img src={userImg} alt="" />{player.player_name}</h2>
    <div className="flex justify-between items-center  border-b-1 border-gray-400">
        <div className="flex justify-between gap-2 font-normal items-center">
            <img src={flag} alt="" />
            <p className="">{player.player_country}</p>
        </div>
        <div className="py-2 px-4 mb-2 bg-[#D9D9D9] rounded-md"><p>
            {player.playing_position}
            </p></div>
    </div>

    <div className="flex justify-between items-center font-bold">
        <div>
            <h1 >Rating</h1>
        </div>
        <div>
            <h1>{player.player_rating}</h1>
        </div>
    </div>
    <div className="flex justify-between items-center">

        <div>
        <h1 className="font-bold">{player.playing_role}</h1>
        </div>
        <div>
        <p>{player.playing_role}</p>
        </div>
    </div>
    <div className="card-actions justify-between items-center">
        <div>
            <h1 className="font-bold">Price: <span>${player.player_price} USD</span> </h1>
        </div>
      <button disabled= {isSelected} onClick={()=>{handleSelected(player)}} className="btn bg-white text-black">{isSelected?"Selected" :"Choose Player"}</button>
    </div>
  </div>
</div>
    );
}

export default PlayerCard;