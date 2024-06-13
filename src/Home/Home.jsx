import React from 'react'
import profilepic from '../assets/profile.jpeg'
import { VscLocation } from "react-icons/vsc";
import { RiGitRepositoryFill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { VscRepoForked } from "react-icons/vsc";
import { MdOutlineStar } from "react-icons/md";
import { TbExternalLink } from "react-icons/tb";
import { IoLink } from "react-icons/io5";
import '../Home/Home.css'

function Home() {
  return (
    <div className='homeSection'>
        <div className="profilesection">
            <div className="profile">
                <div className="img">
                    <img src={profilepic} alt="profile pic" />
                </div>
                <div className="profileinfo">
                <h1 className="name">Lydia</h1>
                <p className="nickname">Katamii</p>
                <p className="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat</p>
                <button className='profbtn'><TbExternalLink />View On Github</button>
                <p className="location"><span><VscLocation />  </span>Sans Francisco,CA</p>
                <p className="reps"><span><RiGitRepositoryFill /> </span> 400 repository</p>
                <p className="followers"><span><IoPeopleSharp /> </span> 233 followers</p>
                <p className="following"><span><IoPeopleSharp /> </span> 0 following</p>
                </div>
            </div>
      </div>
      <div className="right">
       <div className="repositoriesSection">
         <h1 className="head">Repositories(30)</h1>
         <div className="all">
            <div className="repo1">
                <div className="start">
                  <h5 className="repotitle">zaph_tours</h5>
                  <p className="inf">Lorem, ipsum dolor.</p>
                </div>
                <div className="end">
                  <p className="fork"><VscRepoForked /> 0 fork</p>  
                  <p className="star"><MdOutlineStar /> 0 star</p>
                </div>
            </div>
         </div>
       </div>
       <div className="followerssection">
            <h1 className="head">Followers(30)</h1>
            <div className="followerdiv">
                <div className="follower1">
                    <div className="img3">
                        <img src={profilepic} alt="follower picture" />
                    </div>
                    <h5 className="repotitle">Richard Maina</h5>
                    <button className='profbtn' id='btn3'> <IoLink />  View Richard Maina</button>
                </div>
           </div>
       </div>
       <div className="followerssection">
            <h1 className="head">Following(30)</h1>
            <div className="followerdiv">
                <div className="follower1">
                    <div className="img3">
                        <img src={profilepic} alt="follower picture" />
                    </div>
                    <h5 className="repotitle">Richard Maina</h5>
                    <button className='profbtn' id='btn3'> <IoLink />  View Richard Maina</button>
                </div>
           </div>
       </div>
   </div>
</div>
  )
}

export default Home
