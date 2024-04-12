import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignature, faIdCard, faCodeBranch, faPhone, faEnvelope, faPen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';





import { Drawer } from "@mui/material";
import './style3.css'; 
const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const drawerStyle = {
    left: 20,
    top: 17,
    height: '95%',
    width: '30%',
    boxShadow:'none',
    
  };

  return (
    <Drawer visible={true}
      anchor="left"
    open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      sx={{
        '& .MuiBackdrop-root': {
          backgroundColor: 'transparent', 
        },
        zIndex: 100,
      }}
     
    >
   <div className="sidebar">
            <header>PROFILE</header>
            <ul>
            <li><a href="#"><FontAwesomeIcon icon={faSignature} /> :- NAME</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faIdCard} /> :-REG. NUMBER</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faCodeBranch} /> :-BRANCH </a></li>
        <li><a href="#"><FontAwesomeIcon icon={faPhone} /> :-CONTACT NO.</a></li>
        <li><a href="#"><FontAwesomeIcon icon={farEnvelope} /> :-MAIL ID</a></li>
        <li><a id="edit" href="#"><FontAwesomeIcon icon={faPen} /> :-EDIT</a></li>
            </ul>
        </div>
    </Drawer>
  );
};

export default InfoDrawer;
