import { callHistory, formatDate } from "../utils"
import { FaPhoneAlt, FaUser, FaVideo } from "react-icons/fa";
import { useGlobalState } from "./GlobalContext";

export function Calls(){
    const {startCall, setReceiver} = useGlobalState();

    return(
        <>
            <h4 className="callH-header">CALL HISTORY</h4>
            <div className="contacts-container call-size">
                        {
                        callHistory.map((user, index) => {
                            let {name, type, status, date, phoneNumber} = user 
                            date = formatDate(date);
                            return(
                            <div className="contact" key={index}>
                                <div className="contact-left">
                                <div className="contact-pic">
                                    <span><FaUser /></span>
                                </div>
                                <div className="contact-details">
                                    <span className="username">{name}</span>
                                    <span className="number">{status} {date}, 8:30pm</span>
                                </div>
                                </div>
                                <div className="contact-right">
                                    {
                                        type === 'Video' ? 
                                        <button className="call-b-btn"><FaVideo size={'14px'} color='white'/> </button>
                                         : 
                                        <button className="call-b-btn" 
                                        onClick={() => {
                                            startCall(phoneNumber);
                                            setReceiver({name, phoneNumber})
                                        }}
                                        ><FaPhoneAlt size={'14px'}/></button>
                                    }
                                </div>
                            </div>
                            )
                        })
                        }
                  
                    </div>
        </>
    )
}