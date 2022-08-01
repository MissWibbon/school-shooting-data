import './ColorMode.css';
import Switch from "react-switch";
import {state, useState} from 'react';

function ColorMode() {

const [dmState, setDMState] = useState('true')
const setColorMode = (e) => {
    setDMState(!dmState)
    document.querySelector('body').toggleAttribute('dark-mode')
}

    return (
      <div className="colorMode" 
      style={{
        position: 'absolute', 
        top:3, 
        right:3}}>
        <form>
            <label className="switch">
                <span className={!dmState ? 'dm-mode' : ''}>Dark Mode</span>
                <Switch onChange={setColorMode} checked={!dmState}
                offColor="#cbcbcb" onColor="#3473e4" />
            </label>
        </form>
      </div>
    )
}

export default ColorMode