import React, { useState } from "react";
import { Route } from "react-router-dom";
import Projects from "./components/Projects";
import Project from "./components/Project";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import { faFile, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Popover from "@material-ui/core/Popover";
import "./App.css";

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);

  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="App">
      {/* <div className="box">
        <h2>Lauren Emick | Software Engineer</h2>
      </div> */}

      <Route exact path="/" component={Projects} />
      <Route exact path="/projects/:id" component={Project} />

      <div className="blurr-box-container">
        <footer className="blurr-box">
          <div className="panel-items">
            <div>
              <div className="icon" onClick={handleClick}>
                <FontAwesomeIcon icon={faUserCircle} size="3x" />
              </div>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div>
                  <img className="profileImage" src="https://avatars.githubusercontent.com/u/64444915?s=460&u=a9c3af2aa4f156e00677aef2e7fd2b210898c311&v=4" alt="profile" />
                  <div style={{ margin:"10px"}}>
                    <h2 style={{paddingBottom:"8px"}}>Lauren Emick</h2>
                    <p style={{paddingBottom:"8px"}}>Email: <a href="mailto: laurenemick6@gmail.com">laurenemick6@gmail.com</a></p>
                    <p>Phone: 206.445.8300</p>
                  </div>
                </div>
              </Popover>
            </div>
            <a className="icon" href="https://www.linkedin.com/in/laurenemick/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
            </a>
            <a className="icon" href="https://github.com/laurenemick" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="3x" /> 
            </a>
            <a className="icon" href="https://docs.google.com/document/d/1xbm-TAFPL4u8C0MKFJxBRrO503JLa_g_-k700thaw-U/edit?usp=sharing" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFile} size="3x" /> 
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
