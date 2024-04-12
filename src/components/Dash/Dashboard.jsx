import React, { useState } from 'react';
import {Box} from '@mui/material';
import attendAtEaseLogo from './attendatease.png';
import pic from './pic.jpg';
import pieChartImage from './piechart.jpeg';
import timetableImage from './timetable.jpeg';
import checkImage from './check.png';
import calendarImage from './calender2.jpg';
import InfoDrawer from '../drawer/InfoDrawer';
const Dashboard = () => {
  const handleTimeTableClick = () => {
    // Handle Time Table click event here
    // Redirect or perform any other action
  };
  const [openDrawer,setOpenDrawer]= useState(false);
        const toggleDrawer=() => {
            setOpenDrawer(!openDrawer);
        }
  return (
    <div>
      <style>
        {`
       
        * {
        font-family: monospace;
        background-color: ${openDrawer ? '' : 'black'}; /* Set background color to transparent when drawer is open */
        color: white;
      }

        #navbar {
          position: fixed;
          top: 0px;
          width: 100%;
          height: 80px;
          background-color: rgb(0, 0, 0);
        }

        #logo {
          margin-left: 10px;
          position: absolute;
          top: 20px;
        }

        #panda {
          background-size: cover;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 1px solid white;
          position: absolute;
          right: 5%;
          top: 7px;
        }

        #name {
          position: absolute;
          right: 15%;
          top: 23px;
          font-size: 20px;
        }

        #dashboard {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #otherpages {
          width: 60%;
          height: 100vh;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-content: flex-end;
        }

        #info {
          width: 40%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card {
          background-color: black;
          border: 2px solid grey;
          border-radius: 5px;
        }

        .card-title {
          color: grey;
          font-size: 20px;
        }

        h1 {
          color: grey;
        }

        #stats,
        #time-table,
        #submissions {
          display: flex;
          height: 180px;
          position: relative;
          top: 30px;
        }

        #heading {
          align-self: center;
          font-size: 35px;
        }

        #para {
          align-self: end;
          position: relative;
          bottom: 5px;
          right: 5px;
          color: rgb(151, 150, 150);
        }

        a {
          text-decoration: none;
        }
        `}
      </style>

      <div id="navbar">
      
        <a id="logo"> <img src={attendAtEaseLogo} width="300" alt="AttendAtEase Logo" /></a>
        <a id="name">Name </a>
       <Box><img id="panda" src={pic} alt="Profile Picture" onClick={()=> toggleDrawer()}/> 
        <InfoDrawer open={openDrawer} setOpen ={setOpenDrawer}/></Box>
      </div>

      <div id="dashboard">
        <div id="otherpages">
          <a href="#">
            <div id="stats">
              <img id="piechart" src={pieChartImage} width="200px" alt="Pie Chart" />
              <h1 id="heading">STATISTICS</h1>
              <p id="para">(Navigate your productivity voyage effortlessly)</p>
            </div>
          </a>

          <div id="time-table" onClick={handleTimeTableClick}>
            <img src={timetableImage} width="200px" height="150px" alt="Time Table" />
            <h1 id="heading">TIME-TABLE </h1>
            <p id="para">(Plan, prioritize, and conquer tasks with ease)</p>
          </div>

          <a href="#">
            <div id="submissions">
              <img id="tick" src={checkImage} width="170px" height="150px" alt="Check Mark" />
              <h1 id="heading">SUBMISSIONS</h1>
              <p id="para">(Submit 'why' behind missed classes)</p>
            </div>
          </a>
        </div>

        <div id="info">
          <div id="calender">
            <div className="card" style={{ width: '200px', height: '200px' }}>
              <a href="calendar.html">
                <img className="card-img-top" src={calendarImage} alt="Calendar" style={{ width: '170px' }} />
                <div className="card-body">
                  <h5 className="card-title">Calender</h5>
                  <p className="card-text">Know your present</p>
                </div>
              </a>
            </div>
          </div>
          <div id="reminder"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;