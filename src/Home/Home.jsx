import React from 'react'
import profilepic from '../assets/profile.jpeg'
import { VscLocation } from "react-icons/vsc";
import { RiGitRepositoryFill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { VscRepoForked } from "react-icons/vsc";
import { MdOutlineStar } from "react-icons/md";
import { TbExternalLink } from "react-icons/tb";
import { IoLink } from "react-icons/io5";
import usemyStore from '../Store/mystore';
import '../Home/Home.css'

function Home() {
  const {userData,repos,followers,following}=usemyStore()
  return (
    <div className='homeSection'>
        <div className="profilesection">
            <div className="profile">
                <div className="img">
                    <img src={userData.avatar_url || {profilepic}} alt="profile pic" />
                </div>
                <div className="profileinfo">
                <h1 className="name">{userData.name}</h1>
                <p className="nickname" id='nick'>{userData.login}</p>
                {userData.bio && <p className="info">{userData.bio}</p>}
                <a href={userData.url}target='blank'><button className='profbtn'><TbExternalLink />View On Github</button> </a>
                {userData.location && <p className="location"><span><VscLocation />  </span>{userData.location}</p>}
                <p className="reps"><span><RiGitRepositoryFill /> </span> {userData.public_repos} repository</p>
                <p className="followers"><span><IoPeopleSharp /> </span> {userData.followers} followers</p>
                <p className="following"><span><IoPeopleSharp /> </span> {userData.following} following</p>
                </div>
            </div>
      </div>
      <div className="right">
       <div className="repositoriesSection">
         <h1 className="head">Repositories({userData.public_repos})</h1>
         <div className="all">
            {repos.map(repos=>(
            <div className="repo1" key={repos.id}>
                <div className="start">
                  <h5 className="repotitle">{repos.name}</h5>
                  {repos.description && <p className="inf">{repos.description}</p>}
                </div>
                <div className="end">
                  <p className="fork"><VscRepoForked /> {repos.forks} fork</p>  
                  <p className="star"><MdOutlineStar /> 0 star</p>
                </div>
            </div>
            ))}
         </div>
       </div>
       
       <div className="followerssection">
            <h1 className="head">Followers(30)</h1>
            <div className="followerdiv">
            {followers.map(followers=>(
                <div className="follower1" key={followers.id}>
                    <div className="img3">
                        <img src={followers.avatar_url} alt="follower picture" />
                    </div>
                    <h5 className="repotitle">{followers.login}</h5>
                    <a href={followers.followers_url}target='blank'><button className='profbtn' id='btn3'> <IoLink />  View Richard Maina</button></a>
                </div>
             ))}
           </div>
       </div>
       
       <div className="followerssection">
            <h1 className="head">Following({userData.following})</h1>
            <div className="fooo">
            {following.map (following =>(
            <div className="followerdiv" key={following.id}>
                <div className="follower1">
                    <div className="img3">
                        <img src={following.avatar_url} alt="follower picture" />
                    </div>
                    <h5 className="repotitle">{following.login}</h5>
                    <a href={following.following_url}><button className='profbtn' id='btn3'> <IoLink />  View Richard Maina</button></a>
                </div>
           </div>
           ))}
           </div>
       </div>
   </div>
</div>
  )
}
export default Home