
import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { LoggedAtom } from '../../../App';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    useEffect(() => {
        setLogged(false);
        localStorage.setItem("user", "");
        localStorage.setItem("pass", "");
        setTimeout(()=>{navigate("/")},200)
    })
    const navigate = useNavigate();
    const [logged, setLogged] = useAtom(LoggedAtom);

    return (
        <div>
            logout
        </div>
    );
};

export default Logout;