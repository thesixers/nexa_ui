// import { useState } from 'react'
import { useState } from "react";
import { FaArrowLeft, FaCog, FaCogs, FaDeploydog, FaHamburger, FaHome, FaPhone, FaPhoneAlt, FaPlus, FaSearch, FaUserCircle, FaUserFriends, FaUserNinja, FaEllipsisH, FaPlusSquare } from "react-icons/fa";
import { contacts, countryPhoneCodes } from "../utils";
import CallModal from "./CallModal";
import Authentication from "./Authentication";
import { useGlobalState } from "./GlobalContext";
import {DotLottieReact} from '@lottiefiles/dotlottie-react'


function Layout(props) {
    const {children, setNavChoice, navChoice} = props;
    const {callState, setCallState, setIsIncoming, isIncoming, isAuthenticated, setIsAuthenticated,  isLoading, setIsLoading} = useGlobalState();
    const [showAddContact, setShowAddContact] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const [searchUserValue, setSearchUserValue] = useState('');
    const [userValue, setUserValue] = useState(null);
    
    console.log(callState);
    
    function searchNewUser(){
        if(searchUserValue === '') {return false}
        let foundUser = contacts.find((user, i) => {
            if(user.phoneNumber === searchUserValue) {return true}
        });
        
        setUserValue(foundUser)
        console.log(userValue);
    }
    const Header = (
            <header className="header">
                <div className="header-wrapper">
                <h2 className="left">Nexa</h2>
                <div className="right">
                    {/* {(navChoice === 'Contacts' ? <div> <FaSearch /> </div> : '')}
                    <div onClick={() => {setShowAddContact(true)}} title="add new contact"> <FaPlus /> </div> */}
                   <button className="dropdown-icon" onClick={() => {setShowDropdown(!showDropdown)}}> <FaEllipsisH /></button>
                </div>
                {showDropdown &&(<div className="drop-down">
                    <div onClick={() => {setShowAddContact(true); setShowDropdown(false)} }><FaPlus />  Add Contact</div>
                    <div>Action</div>
                    <div><FaCog />  Setting</div>
                </div>)}
                </div>
            </header>
        );

    const Footer = (
        <footer>
                <div className="foot-cover">
                    <button className={ "nav-icon " + (navChoice === 'Contacts' ? ' icon-focus' : ' ')} onClick={ () => {setNavChoice('Contacts')} }> <FaUserFriends /> Contacts</button>
                    <button className={ "nav-icon " + (navChoice === 'Calls' ? ' icon-focus' : ' ')} onClick={ () => {setNavChoice('Calls')} }> <FaPhoneAlt /> Calls</button>
                    <button className={ "nav-icon " + (navChoice === 'Profile' ? ' icon-focus' : ' ')} onClick={ () => {setNavChoice('Profile')} }> <FaUserNinja /> Profile</button>
                    <button className={ "nav-icon " + (navChoice === 'Setting' ? ' icon-focus' : ' ')} onClick={ () => {setNavChoice('Setting')} }> <FaCog /> Settings</button>
                </div>
        </footer>
    );

    const AddContact = (
        <div className="add-contact-container">
                <div className="close-add" onClick={() => {setShowAddContact(false)}}></div>
                <div className="add-contact">
                    <div className="dash"> <div></div> </div>
                    <div className="add-header">
                        <button onClick={() => {setShowAddContact(false)}}><FaArrowLeft /></button>
                        <div>New Contact</div>
                    </div>
                    <div className="add-input-container">
                        <div className="add-input">
                            <span className="label">Enter Phone</span>
                            <input type="text" 
                            onInput={(e) => {setSearchUserValue(e.target.value)}} 
                            className="contact-number" 
                            placeholder="search for ur friends number"
                            />
                            <button onClick={() => {searchNewUser()}}>Search</button>
                        </div>
                        <div className="found-contact-container">
                            <div className="contact">
                                <div className="contact-left">
                                <div className="contact-pic add-pic-w">
                                    <span></span>
                                </div>
                                <div className="contact-details">
                                    <span className="username">Nnamdi</span>
                                    <span className="number new-user-phone">phoneNumber</span>
                                </div>
                                </div>
                                <div className="contact-right">
                                <button className="add-contact-btn">Add</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="add-input">
                            <span className="label">Last name</span>
                            <input type="text" className="contact-number" place/>
                        </div>
                        <div className="add-input">
                            <div className="contact-country">
                                <span className="flag"><img src={`https://flagcdn.com/w40/${countryPhoneCodes[selectedCountry].flag}`} alt="Nigeria" width="20"/></span>
                                <input type="text" value={`${countryPhoneCodes[selectedCountry].code}`} disabled className="code" />
                            </div>
                            <input type="text" className="contact-number" place/>
                        </div> */}
                        {/* <button>Create Contact</button> */}
                    </div>
                </div>
        </div>
    );
   
    
    const Loading = () => {
      return (
        <div className="load-animation-container">
            <div className="load-animation-card">
                {/* <div className="load-title">Loading</div> */}
                <DotLottieReact
                    src="https://lottie.host/5c13f23c-a4b0-4e99-8689-250c2f37cbb9/XoEmUKXrfZ.lottie"
                    loop
                    autoplay
                    className="card-loader"
                />
            </div>
        </div>
      );
    };
    
    return (
      <div className="app-wrapper">
        {isLoading && (
        <Loading/>
        )}
        {
            !isAuthenticated ? <Authentication/> : 
            <>
                {
                    (callState === '' ) ? "" : <CallModal setCallState={setCallState} callState={callState}/>
                }
                {Header}
                {showAddContact && (AddContact)}
                <main>
                    {children}
                </main>
                {Footer}
            </>
        }
            
        
      </div>
    )
  }
  
  export default Layout