const SelectedCards = ({player,removePlayer}) => {
    const handleRemove = () => {
        removePlayer(player)
    }
    return (
          <div className="mt-7 px-4 py-2 rounded-2xl flex justify-between items-center border-2 border-gray-200">
                <div className="flex justify-between items-center gap-2">
                    <img className="w-[72px] h-[72px] rounded-2xl" src={player.player_image} alt="" />
                    <div >
                        <h1 className="font-bold">{player.player_name}</h1>
                        <p>{player.playing_position}</p>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    <img src="https://i.ibb.co.com/xS7s0Y5y/Frame.png" alt="" />
                </div>
            </div>
    )
}


export default SelectedCards;