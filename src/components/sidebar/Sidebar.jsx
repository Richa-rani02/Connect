import {NavLink, useNavigate } from "react-router-dom";
import "./sidebar.scss";
import {navItems} from "./constantData";
export const Sidebar=()=>{

    const getActiveNavStyle = ({ isActive }) =>
    isActive
        ? {
            background: '#ebefff',
        }
        : {
            background: '#ffffff'
        } 
          
    return(
        <div className="sidebar p-1-5">
         {navItems.map((item,index)=>(
            <NavLink key={index} to={`${item.path}`} className="navlink flex flex-align-center p-1 my-1" style={( getActiveNavStyle)}>
           <item.icons size={22} className="navlink__icon"/>
           <span className="navlink__title">{item.title}</span>
           </NavLink>
            ))} 
        
    
        </div>
    )
}