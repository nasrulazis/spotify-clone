import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Auth() {
    const isLoading = useRef(false);
    const navigate = useNavigate();
    const [dots, setDots] = useState('');

    function handleAuth() {
        const hashParams = new URLSearchParams(window.location.hash.substr(1));
        const token = hashParams.get("access_token");
        localStorage.setItem('token', token);
        // console.log(token);
        setTimeout(() => {
            navigate('/homepage');
        }, 2000);
        
    }

    useEffect(handleAuth, [navigate]);
    useEffect(() => {
        if (isLoading.current) return;
        isLoading.current = true;

        setInterval(() => {
            setDots(d => d.length >= 3 ? '' : d + '.');
        }, 500);
    }, );

    return (
        <p>You will immediately be redirected to the home page{dots}</p>
    );
}