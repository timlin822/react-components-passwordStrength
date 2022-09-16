import {useState} from 'react';
import {FaEye,FaEyeSlash} from 'react-icons/fa';

import PasswordStrength from 'components/passwordStrength/PasswordStrength';

import './App.css';

function App() {
  const [password,setPassword]=useState("");
  const [passwordIsShow,setPasswordIsShow]=useState(false);

  const changeHandler=(e)=>{
    setPassword(e.target.value);
	};
	
	const passwordToggleHandler=()=>{
		setPasswordIsShow(!passwordIsShow);
	};

  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <div className="input-group">
          <label htmlFor="password">密碼:</label>
          <div className="input-group-flex">
            <input type={passwordIsShow?"text":"password"} className="input" id="password" name="password" placeholder="請輸入密碼" value={password} onChange={changeHandler} />
            <div className="eye-icon">{passwordIsShow?<FaEye className="icon-cursor" onClick={passwordToggleHandler} />:<FaEyeSlash className="icon-cursor" onClick={passwordToggleHandler} />}</div>
          </div>
          <PasswordStrength password={password} />
        </div>
      </div>
    </section>
  );
}

export default App;