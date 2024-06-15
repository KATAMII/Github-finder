import React, { useEffect } from 'react';
import profilepic from '../assets/Github.jpeg';
import { VscLocation } from "react-icons/vsc";
import { RiGitRepositoryFill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { VscRepoForked } from "react-icons/vsc";
import { MdOutlineStar } from "react-icons/md";
import { TbExternalLink } from "react-icons/tb";
import { IoLink } from "react-icons/io5";
import usemyStore from '../Store/mystore';
import '../Home/Home.css';

function Home() {
  const { userData, repos, followers, following, fetchUserData, clearUserData } = usemyStore();
  const defautuser = 'github'
  useEffect(()=>{
    fetchUserData(defautuser)
  }, [fetchUserData])
  
  const handleSearch = (e, username) => {
    e.preventDefault();
    if (username) {
      fetchUserData(username);
    }
  };

  return (
    <div className='homeSection'>
      <div className="profilesection">
        <div className="profile">
          <div className="img">
            <img src={userData.avatar_url || profilepic} alt="profile pic" />
          </div>
          <div className="profileinfo">
            <h1 className="name">{userData.name}</h1>
            <p className="nickname" id='nick'>{userData.login}</p>
            {userData.bio && <p className="info">{userData.bio}</p>}
            <a href={userData.url} target='blank'><button className='profbtn'><TbExternalLink />View On Github</button> </a>
            {userData.location && <p className="location"><span><VscLocation />  </span>{userData.location}</p>}
            <p className="reps"><span><RiGitRepositoryFill /> </span> {userData.public_repos} repository</p>
            <p className="followers"><span><IoPeopleSharp /> </span> {userData.followers} followers</p>
            <p className="following"><span><IoPeopleSharp /> </span> {userData.following} following</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="repositoriesSection">
          <h1 className="head">Repositories ({userData.public_repos})</h1>
          <div className="all">
            {repos.map(repo => (
              <div className="repo1" key={repo.id}>
                <div className="start">
                  <h5 className="repotitle">{repo.name}</h5>
                  {repo.description && <p className="inf">{repo.description}</p>}
                </div>
                <div className="end">
                  <p className="fork"><VscRepoForked /> {repo.forks} fork</p>
                  <p className="star"><MdOutlineStar /> 0 star</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="followerssection">
          <h1 className="head">Followers ({userData.followers})</h1>
          <div className="followerdiv">
            {followers.map(follower => (
              <div className="follower1" key={follower.id}>
                <div className="img3">
                  <img src={follower.avatar_url} alt="follower picture" />
                </div>
                <h5 className="repotitle">{follower.login}</h5>
                <button
                  className='profbtn'
                  id='btn3'
                  onClick={(e) => handleSearch(e, follower.login)}
                >
                  <IoLink /> View {follower.login}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="followerssection">
          <h1 className="head">Following ({userData.following})</h1>
          <div className="fooo">
            {following.map(user => (
              <div className="followerdiv" key={user.id}>
                <div className="follower1">
                  <div className="img3">
                    <img src={user.avatar_url} alt="following picture" />
                  </div>
                  <h5 className="repotitle">{user.login}</h5>
                  <button
                    className='profbtn'
                    id='btn3'
                    onClick={(e) => handleSearch(e, user.login)}
                  >
                    <IoLink /> View {user.login}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
