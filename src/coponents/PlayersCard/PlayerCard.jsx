import userImg from "../../assets/Group-1.png"
import flag from "../../assets/Group.png"
import React, { useState } from "react";
import { toast } from "react-toastify";
const PlayerCard = ({player,availableBalance, setAvailableBalance, setPurchasedPlayers, purchasePlayers}) => {
    const [isSelected, setSelected] = useState(false);

    const handleSelected = (playerData) => {
      if(availableBalance >= playerData.player_price ){
        setSelected(true);
        setAvailableBalance(availableBalance-playerData.player_price);
      
        setPurchasedPlayers([...purchasePlayers,playerData])
      
    //  toast.success("Purchase is done!!", {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 2000,
    //   });
      }  else if (purchasePlayers.length === 6) {
      // toast.error("You cannot buy more than 6 players!", {
      //   position: "top-left",
      //   autoClose: 2000,
     // });/
     alert("You cannot buy more than 6 players!")
    } else {
  //  toast.error("Not enough coins!!", {
  //       position: toast.POSITION.TOP_LEFT,
  //       autoClose: 2000,
  //     });
    alert("not enough coin.....")
      }
        
        
    }

    return(
        <div className="card bg-white w-96 shadow-sm">
  <figure className="m-6 rounded-md">
    <img className="w-[350px] h-[200px] bg-cover"
      src={player.player_image}
      alt="Shoes" />
  </figure>
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