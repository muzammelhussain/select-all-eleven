 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import AvailablePlayers from './coponents/AvailablePlayers/AvailablePlayers'
import Navbar from './coponents/Navbar/Navbar'
import SelectPlayers from './coponents/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'
import Banner from './coponents/Banner/Banner';


const fetchPlayers = async () => {
  const res = await fetch ("/player.json")
  return res.json()
}
const promisePlayers = fetchPlayers();

function App() {
  const [toggle,setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(30000000);
  const [purchasePlayers, setPurchasedPlayers] = useState([]);
  const removePlayer = (p) => {
    const filterData = purchasePlayers.filter(ply=> ply.player_id !==p.player_id);
    setPurchasedPlayers(filterData);
    setAvailableBalance(availableBalance + p.player_price);
    
     toast.success("Successfully deleted the player", {
  position: "top-right",
});
 
  }

  return (
    <>
     <div className="min-h-screen bg-white text-black w-[1200px] mx-auto">
      <Navbar availableBalance= {availableBalance}></Navbar>
      <Banner></Banner>

      <div className="flex justify-between items-center">
        <h1 className='font-bold text-2xl'>{toggle?"Available players": `Selected Players(${purchasePlayers.length}/6)`}</h1>
        <div className='font-bold'>
          <button onClick={()=>setToggle(true)} className={`py-3 px-4 border-2  border-gray-200 rounded-l-2xl border-r-0 ${toggle === true? "bg-[#E7FE29]" : ""}  `}>Available</button>
            <button onClick={()=>setToggle(false)} className={`py-3 px-4 border-2 border-gray-200 rounded-r-2xl border-l-0 ${toggle === false? "bg-[#E7FE29]" : ""}  `}>Selected <span>{purchasePlayers.length}</span></button>
        </div>
      </div>

      {toggle === true?  <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers 
        setPurchasedPlayers ={setPurchasedPlayers}
        purchasePlayers={purchasePlayers}
        availableBalance={availableBalance} setAvailableBalance = {setAvailableBalance} 
        promisePlayers = {promisePlayers}>
      </AvailablePlayers>
      </Suspense>: <SelectPlayers removePlayer= {removePlayer} purchasePlayers ={purchasePlayers}
      toggle = {toggle} setToggle = {setToggle}></SelectPlayers> }
     
      
      <ToastContainer/>
     </div>
    </>
  )
}

export default App
