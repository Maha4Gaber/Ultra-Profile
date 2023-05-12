import React from "react";
import { Creative ,Creativeinfo,Infotitle,Infodir,Infodesc,Href} from "./style";

const About = () => {
  return (
    <Creative >
            <div className="container">
                <Creativeinfo >
                    <Infotitle ><span>This is</span> Me</Infotitle>
                    <Infodir >Creative Director</Infodir>
                    <Infodesc >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Enim est <Href href="#">explicabo</Href> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Infodesc>
                    <Infodesc >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam
            deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Infodesc>
                </Creativeinfo>
            </div>
        </Creative>
  )
}
export default About;