import React, { useEffect, useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import Quokka from "../../_assets/quokkaCamera.png";
import "./CSS/Camera.css"
import ReplayRoundedIcon from '@material-ui/icons/ReplayRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
// import PhotoCameraRoundedIcon from '@material-ui/icons/PhotoCameraRounded';


function Camera(props) {
  const [source, setSource] = useState("");
  const [formData, setFormData] = useState({})
  
  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        const formData = new FormData();
        formData.append('file', file);
        setSource(newUrl);     
        setFormData(formData);
      }
    }
  };

  useEffect(()=>{
    if (props.location.state){
    setFormData(props.location.state.preFormData)
    setSource(props.location.state.preSource)
    }
  },[props.location.state])

  const sourceClear = () => {
    setSource("")
    setFormData({})
  }

  return (
    <div id="total">
      { source ? (
        <div className="catchVideo">
          <video 
            id="background-video" 
            className='videoTag' 
            src={source} 
            type='video/*'
            height="100%"
            width="100%"
            autoPlay 
            loop 
            muted 
          />
          <div id="button-wapper">
            <button id="retry" onClick={sourceClear}>
                <ReplayRoundedIcon id="retryIcon" color="disabled" fontSize="small"/>
                <h3>Retry</h3>
            </button>
            <button id="next">
              <Link to={{
                pathname: "/feed/feedmap",
                state: {
                  formData: formData,
                  source: source 
                }
              }}> 
                <ArrowForwardRoundedIcon  fontSize="small" color="disabled" />
                <h3 id="nextText">Next</h3>
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <div id="icon-wapper">
          <label htmlFor="icon-button-file" component="span">
            <img src= {Quokka} alt="Quokka" id="quokkaImg"/>
          </label>
          <h2 className="userAppTitle">맛을 보여주세요!</h2>

          <input
            accept="video/*"
            id="icon-button-file"
            type="file"
            name="file"
            capture="environment"
            onChange={(e) => handleCapture(e.target)}
          />
        </div>
      )}
    </div>
  );
}

export default withRouter(Camera);