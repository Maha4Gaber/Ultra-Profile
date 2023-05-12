import React from "react";
import {
  Drop,Dropform,Droptitle,Span,Forminput,Textinput,Mailinput
  ,Sub,Text,Submit
} from "./style";

const Contact = () => {
  return (
    <Drop class="drop">
        <div class="container">
            <Droptitle ><Span>Drop </Span>Me A line</Droptitle>
            <Dropform action="">
                <Forminput >
                    <Textinput type="text" placeholder="Your Name" />
                    <Mailinput type="email" placeholder="Your Email" />
                </Forminput>
                <Sub type="text"  placeholder="Your Subject" />
                <Text cols="30" rows="10" placeholder="Your Message"></Text>
                <Submit type="submit" value="Send Message" />
            </Dropform>
        </div>
    </Drop>
  )
}
export default Contact;