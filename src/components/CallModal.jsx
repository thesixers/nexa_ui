import { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaInfoCircle, FaMicrophone, FaMicrophoneSlash, FaPhone, FaPhoneAlt, FaVideo, FaVideoSlash, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useGlobalState } from "./GlobalContext";



export default function CallModal(props){
    const {callState, setCallState, setIsIncoming, isIncoming, acceptCall, startCall, endCall, receiver, caller, audioRef} = useGlobalState();
    const [isLoud, setIsLoud] = useState(false)
    const [isMute, setIsMute] = useState(false)
    const [min, setMin] = useState(58)
    const [sec, setSec] = useState(0)
    const [hour, setHour] = useState(0)
    const [isAns, setIsAns] = useState(false)
    const [displayName, setDisplayName] = useState(null);
    const [displayNo, setDisplayNo] = useState(null);

    
    useEffect(() => {
        if(receiver && caller) return;

        let user = receiver ? receiver : caller;
        console.log(user);
        setDisplayName(user?.name)
        setDisplayNo(user?.phoneNumber)

    }, [])
    
    useEffect(() => {
        let interval;
        
        if (callState === 'answered') {
            interval = setInterval(() => {
                setSec(prevSec => {
                    if (prevSec === 59) {
                        setMin(prevMin => {
                            if(prevMin === 59){
                                setHour(prevHour => prevHour + 1)
                                return 0;
                            }
                            return prevMin + 1;
                        });
                        return 0;
                    }
                    return prevSec + 1;
                });
            }, 1000);
        } else {
            setMin(0)
            setSec(0)
            setHour(0)
            clearInterval(interval); // Stop timer if callState is not "answered"
        }  

        if(callState === 'incoming'){
            setIsAns(false);
        }
        else{
            setIsAns(true);
        }

        return () => clearInterval(interval); // Cleanup when unmounting or callState changes
    }, [callState]);

    

    return(
        <>
            <div className="caller-container">
               <div className="caller-head">
                    <FaArrowLeft cursor="pointer"/>
                    <div className="call-head-center">
                        {
                            callState !== 'answered' 
                            ? 
                            <div className="call-status">{callState}...</div> 
                            : 
                            <div className="call-status">{(hour < 1 ? '' : `${hour}:`) +`${min}:${sec}`}</div>
                        }
                    </div>
                    <FaInfoCircle />
               </div>
               <div className="caller-mid">
                    <img src="/Snapchat-384940917.jpg" alt="" />
                    <div className="call-name">{displayName}</div>
                        <div className="calling-phone">{displayNo}</div>
               </div>
                <div className="caller-icons-wrapper">
                    <div className="caller-icons">
                        <audio ref={audioRef} autoPlay></audio>
                        {/* <div className="ans-call"><FaVideo /></div> */}
                         
                        { isAns && (
                            <>
                                <div className={isLoud ? "loud-active" : "call-vol"} onClick={() => {setIsLoud(!isLoud)}}><FaVolumeUp /></div>
                                <div className={isMute ? "mic-active" : "call-mic"} onClick={() => {setIsMute(!isMute)}}><FaMicrophoneSlash /></div>
                            </>
                        )}
                            
                        <div 
                        className="end-call" 
                        onClick={() => {
                            setCallState(""); 
                            setIsIncoming(''); 
                            endCall()
                        }}><FaPhoneAlt className="end-icon" /></div>
                        { !isAns && (
                            <div className="ans-call" 
                            onClick={() => {
                                setCallState("answered");
                                acceptCall()
                            }}><FaPhone className="ans-icon" /></div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}