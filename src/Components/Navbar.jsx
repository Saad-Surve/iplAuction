import React,{useState,useEffect} from 'react';
import '../styles/Navbar.css';
import { Link, useParams } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalculateIcon from '@mui/icons-material/Calculate';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Fab } from '@mui/material';
import {Drawer} from '@mui/material';
export default function Navbar() {
    const p = useParams()
    const [isOpen, setIsOpen] = useState(false)
    const teams = ["CSK","DC","GT","KKR","LSG","MI","PBKS","RCB","RR","SRH"]
    useEffect(() => {
      setIsOpen(false)
    }, [p])
    
  return (
    <nav>
        <div className='nav1'>
            <div className="logo">
                <Link to="/dashboard"><img src='/media/logo.jpg' alt="" /></Link>
            </div>
            
            <span>
                <Link to="/dashboard">Welcome to IPL Auction 2023</Link>
            </span>
        </div> 
        <div className="nav2">
            <Link to="/dashboard">
                <button className="nav-item"><DashboardIcon /> Dashboard</button>
            </Link>
            <Link to="/search">
                <button className="nav-item"><SearchIcon /> Search</button>
            </Link>
            <Link to="/leaderboard">
                <button className="nav-item"><EmojiEventsIcon />Leaderboard</button>
            </Link>
            <Link to="/calculator">
                <button className="nav-item"><CalculateIcon /> Calculator</button>
            </Link>
            <Fab style={{backgroundColor:'#040112',color:'white'}} size="small" onClick={()=>{setIsOpen(true)}} >
                <MenuIcon />
            </Fab>
        </div>
        <Drawer anchor='left' open={isOpen} onClose={()=>setIsOpen(false)} >
            <div  className='sidebar'>
                <div className='sidebar-team-names' >Other Teams</div>
                {
                    teams.map((t,i)=>{
                        return <Link className='sidebar-team-names' key={i} to={`/otherteams/${t}`}  ><img src={`/media/teamlogo/${t.toLowerCase()}.png`}/>{t}</Link>
                    })
                }
            </div>
        </Drawer>
    </nav>
  )
}
