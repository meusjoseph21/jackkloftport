import React, {Component} from "react"
import {FaInstagram} from "react-icons/fa"
import {AiFillYoutube} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"

class Footer extends Component {
    state = {};
    render() {
      return (
          <footer>
              <a href="https://www.instagram.com/jack.kloft/?hl=en" target="_blank" rel="noreferrer" className="icons">
              <FaInstagram size="30" color="white"/>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="icons">
              <AiFillYoutube size="30" color="white"/>
              </a>
              <a href="mailto:jackmkloft@gmail.com" target="_blank" rel="noreferrer" className="icons">
              <AiOutlineMail size="30" color="white"/>
              </a>
          </footer>
       
      );
    }
  }
  
  export default Footer;
  