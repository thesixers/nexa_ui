import { FaArrowLeft, FaArrowRight, FaClock, FaNetworkWired, FaSlash, FaWifi } from "react-icons/fa";
import { contacts, countryPhoneCodes } from "../utils";
import { useEffect, useRef, useState } from "react";
import { useGlobalState } from "./GlobalContext";
import { use } from "react";
import axios from "axios";


export default function Authentication(){
    const [selectedCountry, setSelectedCountry] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState();
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isOtpcard, setIsOtpCard] = useState(false);
    const [isOtpAuth, setIsOtpAuth] = useState(false)
    const {callState, setCallState, setIsIncoming, isIncoming, isAuthenticated, setIsAuthenticated,  isLoading, setIsLoading} = useGlobalState();
    const [isName, setIsName] = useState(false);
    

    function handleChange(value, index){
        
        if(!isNaN(value) && value.length === 1){
            let otpUpdate = [...otp]
            otpUpdate[index] = value;
            setOtp(otpUpdate);
        }

        if(index < inputRefs.length - 1 && !isNaN(value)){
            inputRefs[index + 1].current.focus()
            // inputRefs[index].current.style.borderColor = 'red';
        }
    }


    function handleKeyDown(index, e) {
        if (e.key === "Backspace") {
            setOtp((prevOtp) => {
                let otpUpdate = [...prevOtp];
    
                if (otpUpdate[index] !== "") {
                    otpUpdate[index] = "";
                } 
    
                return otpUpdate;
            });

            setTimeout(() => {
                if (index > 0) {
                    inputRefs[index - 1].current.focus();
                }
            }, 0)
        }
    }

    // the number submit form and return this { isName: true, }
    async function handlePhoneSubmit(){
        try {
            let res = await axios.post('endpoint', { phoneNumber })



        } catch (error) {
            console.log(error);
        }
    }

    // otp comfirmation
    async function handleOtpConfirmation(){

    }

    useEffect(() => {
        if(isLoading) {
            setTimeout(() => {
                setIsLoading(false)
            }, 30 * 1000)
        }
    }, [isLoading])
    

    return(
        <div className="auth-wrapper">
            <div className="auth-top">
               <div className="top-details">
                <h2>Login</h2>
                    <div>
                        Enter your Mobile Phone
                    </div>
               </div>
            </div>
            <div className="auth-bottom">
                {
                    isOtpcard ? 
                        <>
                            <div className="err-message">Network timeout 
                                <span className="network-icon">
                                    <FaSlash className="net-slash" /> 
                                    <FaWifi />
                                </span>
                            </div>
                            <div className="bottom-top-otp"><FaClock/> 00:04 <button>Resend Code</button></div>
                            <div className="otp-input-wrapper">
                                {
                                    otp.map((digit, index) => {

                                        return(
                                            <input 
                                            type="text" 
                                            value={digit} 
                                            maxLength='1'
                                            key={index} 
                                            ref={inputRefs[index]}
                                            onChange={(e) => {handleChange(e.target.value, index)}}
                                            onKeyDown={(e) => {handleKeyDown(index, e)}}
                                            />
                                        )
                                    })
                                }
                                {/* <input type="text" />
                                <input type="text" />
                                <input type="text" /> */}
                            </div>
                            <div className="otp-btns">
                                <button title="back"><FaArrowLeft/></button>
                                <button title="submit otp" onClick={() => {setIsLoading(true)}}>Next  </button>
                            </div>
                        </>
                    :
                        <>
                            <div className="err-message">Network timeout 
                                <span className="network-icon">
                                    <FaSlash className="net-slash" /> 
                                    <FaWifi />
                                </span>
                            </div>
                            <div className="bottom-top">You will get a code via sms.</div>
                            <div className="bottom-bottom">
                            <div className="add-input">
                                <div className="contact-country">
                                    <span className="flag"><img src={`https://flagcdn.com/w40/${countryPhoneCodes[selectedCountry].flag}`} alt="Nigeria" width="20"/></span>
                                    <input type="text" value={`(${countryPhoneCodes[selectedCountry].code})`} disabled className="code" />
                                </div>
                                <input type="text" className="contact-number" onChange={(e) => {setPhoneNumber(e.target.value)}} placeholder="00 0000 0000"/>
                            </div>
                            <button onClick={() => {handlePhoneSubmit()}}>Get Otp</button>
                            </div>
                        </>
                }
                
                
            </div>
        </div>
    )
}