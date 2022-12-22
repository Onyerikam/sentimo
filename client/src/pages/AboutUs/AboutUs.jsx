import React, {lazy} from "react";
import { Sidebar } from "./../../components";
import { data } from './aboutUsdata.js';
import { Slide } from "react-awesome-reveal";

import "./AboutUs.css";

import ishwarImg from '../../assets/avatars/ishwar_avatar.png'
import { ProfileCard } from "./../../elements";
// const ProfileCard = lazy(() => import("./../../elements"));

export default function AboutUs() {
  return (
    //make about us card in components and make 3 of them here
    <div className="aboutUsBody">
      <Sidebar />
      <div className="profileCardParent">
        <Slide direction="up" triggerOnce>
        <div className="profileCard">
          <ProfileCard
            name={data?.godwin?.name}
            whatWork={data?.godwin?.whatWork}
            content={data?.godwin?.content}
            socialLinks={data?.godwin?.socialLinks}
            profileImg={ishwarImg}
          />
        </div>
        </Slide>
      </div>
    </div>
  );
}
