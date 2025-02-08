import { createContext, useContext, useState, useEffect, useRef } from "react";
import io from 'socket.io-client';
import SimplePeer from "simple-peer"
import { userProfile } from "../utils";

const GlobalContext = createContext();
const socket = io.connect('http://localhost:5000', {query: {userNo: userProfile.phoneNumber}})


export const GlobalProvider = ({children}) =>{
    const [callState, setCallState] = useState(''); //incoming, Calling, Ringing, answered, failed
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [stream, setStream] = useState(null);
    const [caller, setCaller] = useState(null);
    const [receiver, setReceiver] = useState(null);
    const [callerSignal, setCallerSignal] = useState(null);
    const peerRef = useRef(null);
    const audioRef = useRef(null);
    // auth the call

    useEffect(() => {
        socket.emit('registerUser', userProfile.phoneNumber);

        socket.on('incomingCall', ({from, signal}) => {
            setCaller(from);
            setCallerSignal(signal)
            socket.emit('ringing', {caller, status: 'Ringing'})
        })

        return () => {
            if (peerRef.current) peerRef.current.destroy();
            socket.disconnect();
        }
    }, [])

    async function acceptCall(){

        try {
            const userStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            setStream(userStream)

            const peer = new SimplePeer({initiator: false, trickle: false, stream: userStream});

            peer.on('signal', (signal) =>{
                socket.emit('answerCall', { signal: signal, to: caller });
            })
            
            peer.on('stream', (remoteStream) => {
                if(audioRef.current) audioRef.current.srcObject = remoteStream;
            })

            // this connects to the callers signal
            peer.signal(callerSignal);
            setCallState('answered');
            peerRef.current = peer;
        } catch (err) {
            console.log(err.message);
        }

    }

    async function startCall(phoneNumber){

        setCallState('Calling');
        try{

            //this gets the device audio
            const userStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            setStream(userStream);
            // this creates the peer connection
            const peer = new SimplePeer({ initiator: true, trickle: false, stream: userStream})

            // this sets the connection signal
            peer.on('signal', (signal) => {
                socket.emit( "callUser", { form: userProfile.phoneNumber, userToCall: phoneNumber, signal: signal})
            });

            // this sets the connection stream
            peer.on('stream', (remoteStream) => {
                if(audioRef.current) audioRef.current.srcObject = remoteStream;
            });

            socket.on('ringing', (status)=>{
                setCallState(status);
            })

            socket.on('callAccepted', (signal)=>{
                peer.signal(signal);
            })

            peerRef.current = peer;
        }
        catch(err){
            console.log(err.message);
        }

    }

    function endCall(){
        setCallState('');
        setCaller(null);
        setCallerSignal(null);
        setReceiver(null);
    
        if (peerRef.current) {
            peerRef.current.destroy();
            peerRef.current = null;
        }

        if (stream) {
            stream.getAudioTracks().forEach(track => track.stop()); // Stop audio tracks
            stream.getVideoTracks().forEach(track => track.stop()); // Stop video tracks (if any)
            setStream(null);
        }

            
        if (audioRef.current) {
            audioRef.current.current.srcObject = null;
        }
    
    }

    return(
        <GlobalContext.Provider 
        value={{
            callState, setCallState,  receiver,
            setIsAuthenticated, isAuthenticated, 
            isLoading, setIsLoading, audioRef, 
            acceptCall, startCall, endCall,
            setReceiver, caller
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalState = () => useContext(GlobalContext)