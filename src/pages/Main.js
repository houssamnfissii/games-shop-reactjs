
import React ,{useState,useEffect}from 'react'
import './main.css'
import SideMenu from '../components/SideMenu'
import Header from './Header'
import Home from './Home';

function Main() {
    const [active,setActive]=useState(false);
    const [games,setGames]=useState([]);

    const handelToggleActive =()=>
    {
        setActive(!active);
    };
    const fetchData=()=>{
      fetch('http://localhost:3000/api/gamesData.json')
       .then(response=>response.json())
       .then(data=>{setGames(data)
        console.log(data)
 
       })
       
       .catch(error=>console.log(error.message));
    };
    useEffect(()=>{
        fetchData();
    },[]);
    console.log(games)

  return (
    <main>
        <SideMenu active={active}/>
        <div className={`banner ${active ? 'active' : undefined}`}>
            <Header ToggleActive={handelToggleActive}/>
            <div className="container-fluid">
                <Home games={games}/>
            </div>
        </div>

    </main>
  )
}

export default Main