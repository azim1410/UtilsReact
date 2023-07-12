import React, { useState } from "react";
import "./GitUS.scss";
const GitUS = () => {
  const [data, setData] = useState("");
  const [user, setUser] = useState("");
  const handleSearch = async () => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    try {
      if (response.ok) {
        const ans = await response.json();
        console.log(ans);
        setData(ans);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="git">
      <div className="inpblock">
        <input
          type="text"
          name=""
          id=""
          placeholder="UserId"
          className="userinp"
          onChange={(e) => setUser(e.target.value)}
        />
        <button className="inpbtn" onClick={handleSearch}>Search</button>
      </div>

      {data && (
        <div className="userInfo">
          <div className="container">
            <img src={data.avatar_url} alt="User Avatar" className="avatar"/>
            <h2>{data.name}</h2>
            
          </div>
          <p>{data.bio}</p>
            <p>Followers: {data.followers}</p>
            <p>Following: {data.following}</p>
            <p>Location: {data.location}</p>
            <p>Public Repos: {data.public_repos}</p>



        </div>
      )}
    </div>
  );
};

export default GitUS;
