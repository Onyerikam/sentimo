import React from "react";
import { Link } from "@mui/material";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Divider from "./../../elements/Divider/Divider";

import "./ProfileCard.css";

export default function ProfileCard({
  name = "Name",
  whatWork = "What Work do you do",
  whoAreYou = "Who am I ?",
  content = "More about you",
  socialLinks = ["#", "#", "#", "#"] /*Mail, Linkedin, Twitter, Github */,
  profileImg,
}) {
  return (
    <div className="profileCardContainer">
      <Divider text={` . `} />
      <div className="personData">
        <div className="personWhatWork">{whatWork}</div>
        <div className="personName">{name}.</div>
        <div className="personWhoAreYou">{whoAreYou}</div>
        <div className="personContent">{content}</div>

        <div className="profileCardSocial">
          <Link href={socialLinks[0]}>
            <MailOutlinedIcon sx={{ color: "black", fontSize: "40px" }} />
          </Link>

          <Link href={socialLinks[1]}>
            <FacebookIcon sx={{ color: "black", fontSize: "40px" }} />
          </Link>

          <Link href={socialLinks[2]}>
            <TwitterIcon sx={{ color: "black", fontSize: "40px" }} />
          </Link>

          <Link href={socialLinks[3]}>
            <GitHubIcon sx={{ color: "black", fontSize: "40px" }} />
          </Link>
        </div>
      </div>

      <div className="pfpContainer">
        <img className="avatars" src={profileImg} alt="" />
      </div>
    </div>
  );
}
