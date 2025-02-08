import { FaDoorOpen, FaEdit, FaPencilAlt, FaSignOutAlt } from "react-icons/fa"
import { userProfile } from "../utils"

export function Profile(){
    const {name, phoneNumber, status, bio} = userProfile

    return(
        <div className="profile-container">
            <div className="profile-pic">
                <button><FaPencilAlt size={15}/></button>
                <img src="/Snapchat-384940917.jpg" alt="" />
            </div>
            <div className="profile-name">Nnamdi Amaga</div>
            <div className="profile-details">
                <div className="detail"><span>Phone</span>: 07043952140</div>
                <div className="detail"><span>Status</span>: {status}</div>
                <div className="detail"><span>Email</span>: nnamdiamaga@gmail.com</div>
                <div className="detail"><span>Bio</span>: {bio}</div>
                <button> <FaPencilAlt /> Edit Profile</button>
                <button> <FaSignOutAlt /> Logout</button>
            </div>
        </div>
    )
}