import React from "react";
import { HomeSection,HomeInfo,HomeTitle,Homeinfo,Homedesc,Span,Homebtn } from "./style";

const Home = () => {
  return (
    <div>
        <HomeSection>
            <div className="container">
                <HomeInfo >
                    <HomeTitle >Hamza Nabil</HomeTitle>
                    <Homeinfo >Creative Director</Homeinfo>
                    <Homedesc >
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </Homedesc>
                    <Homebtn >Let's Begin</Homebtn>
                  </HomeInfo>
          </div>
        </HomeSection>
        
    </div>
  )
}
export default Home;