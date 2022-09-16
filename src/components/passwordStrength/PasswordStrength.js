import {useState,useEffect} from 'react';
import zxcvbn from 'zxcvbn';

import './PasswordStrength.css';

const PasswordStrength=({password})=>{
    const result=zxcvbn(password);
    const percentage=result.score*100/4;
    
    const [style,setStyle]=useState({});
    const [passwordStrength,setPasswordStrength]=useState("非常弱");

    const checkPasswordStrengthHandler=()=>{
        switch(percentage){
            case 0:
                setStyle({
                    width: `${percentage}%`,
                    backgroundColor: "#ddd",
                    opacity: 1
                });
                setPasswordStrength("非常弱");
                break;
            case 25:
                setStyle({
                    width: `${percentage}%`,
                    backgroundColor: "#ff1111",
                    opacity: 1
                });
                setPasswordStrength("弱");
                break;
            case 50:
                setStyle({
                    width: `${percentage}%`,
                    backgroundColor: "#ffdd00",
                    opacity: 1
                });
                setPasswordStrength("普通");
                break;
            case 75:
                setStyle({
                    width: `${percentage}%`,
                    backgroundColor: "#88bb44",
                    opacity: 1
                });
                setPasswordStrength("強");
                break;
            case 100:
                setStyle({
                    width: `${percentage}%`,
                    backgroundColor: "#00bb00",
                    opacity: 1
                });
                setPasswordStrength("非常強");
                break;
            default:
                setStyle({
                    width: "0%",
                    backgroundColor: "#ddd",
                    opacity: 1
                });
                setPasswordStrength("非常弱");
                break;
        }
    };

    useEffect(()=>{
        checkPasswordStrengthHandler();
    },[password]);

    return (
        <>
            <div className="password-strength">
                <div className="password-strength-bar" style={style}></div>
            </div>
            <p className="password-strength-text">{passwordStrength}</p>
        </>

    );
}

export default PasswordStrength;