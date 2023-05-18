import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type Props = {
    children: JSX.Element
}

export const RequireAuth = ({ children }: Props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) navigate('/signin');
        });
    }, []);

    return children;
}