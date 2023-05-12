import React from "react";
import { FooterP, FooterSection ,FooterP2,Icon} from "./style";

const Footer = () => {
  return (
    <FooterSection class="footer">
            <FooterP> copyright &copy; 2018 by ultra profile </FooterP>
            <FooterP2> Made with <Icon className="fa fa-heart fa-1x"></Icon>  by Maha Gaber </FooterP2>
      </FooterSection>
  )
}
export default Footer;