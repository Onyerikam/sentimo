import React, {lazy} from "react";
import { Sidebar } from "./../../components";
import { data } from './aboutUsdata.js';
import { Slide } from "react-awesome-reveal";

import './Supportme.css';

export default function Support () {
    return (
        <div className="aboutUsBody">
        <Sidebar />
        <div className="profileCardParent">
          <Slide direction="up" triggerOnce>
          <div className="profileCard">
           <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="Onyerikam" data-description="Support me on Buy me a coffee!" data-message="Thanks for visiting, You can now buy me a coffee" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
          </div>
          </Slide>
        </div>
      </div>
    );
}