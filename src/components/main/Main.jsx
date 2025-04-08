import React from "react";
import "./Main.css";
import Card from "../card/Card";

const Main = (props) => {
  const handleInvite = () => {
    window.open(
      `https://discord.com/oauth2/authorize?client_id=${props.id}&permissions=8&integration_type=0&scope=bot`
    );
  };

  return (
    <div className="main">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-description">
          <h1>
            Make your Discord Server
            <br />
            <strong>More Professional</strong>
          </h1>
          <p>
            A very customizable multipurpose bot for welcome, Social commands,
            Moderation and many more ...
          </p>
        </div>
        <div className="btn-group">
          <button onClick={handleInvite}>Invite</button>
          <button>Login</button>
        </div>
      </div>

      {/* Bot Features  */}
      <div className="features">
        <h1>Features</h1>
        <div className="features-cards">
          <Card
            icon="fa-solid fa-gears"
            title="Moderation"
            description="Upto 15 different and easy to use moderation commands"
          />
          <Card
            icon="fa-solid fa-music"
            title="Music"
            description="High quality music streaming with manual controls"
          />
          <Card
            icon="fa-solid fa-door-open"
            title="Welcome"
            description="Easy to set-up welcome feature"
          />
          <Card
            icon="fa-solid fa-shield-halved"
            title="Security"
            description="Enhanced and active auto-moderation while you are AFK!"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
