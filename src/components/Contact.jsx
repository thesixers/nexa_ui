import { FaPhoneAlt, FaUser, FaVideo } from "react-icons/fa";
import { contacts } from "../utils";
import { useState } from "react";
import { useGlobalState } from "./GlobalContext";

export function Contacts(){
    // const [displayBoxInfo, setDisplayBoxInfo] = useState(null)
    const {startCall, setReceiver} = useGlobalState();
    const [search, setSearch] = useState('')
    const filteredContacts = contacts.filter((val) =>  {
        if(val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || val.phoneNumber.includes(search)) return true;
    } );


    return(
        <>
        <div className="search-contact-wrapper"><input type="text" onChange={(e)=> {setSearch(e.target.value)}} placeholder="Search for contact"/></div>
            <div className="contacts-container contact-size">
            
            {
            filteredContacts.map((user, index) => {
                const {name, phoneNumber} = user 
                return(
                <div className="contact" key={index}>
                    <div className="contact-left">
                    <div className="contact-pic">
                        <span><FaUser /></span>
                    </div>
                    <div className="contact-details">
                        <span className="username">{name}</span>
                        <span className="number">{phoneNumber}</span>
                    </div>
                    </div>
                    <div className="contact-right">
                    <button><FaVideo size={'14px'}/></button>
                    <button 
                    onClick={() => {
                        startCall(phoneNumber)
                        setReceiver({name, phoneNumber})
                        }}><FaPhoneAlt size={'14px'}/></button>
                    </div>
                </div>
                )
            })
            }
      
        </div>
        </>
    )
}