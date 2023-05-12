import React,{ useState, useEffect} from "react";
import axios from "axios";
import {PortfolioSection, Porttitle,PortBox,Portlist,Portitem,Img,Portoverlay,Portoverlayspan} from "./style";
const Portfolio =() => {
  const[images,setImages]=useState([]);

    useEffect(()=>{
      axios.get("js/data.json")
        .then(res => { setImages(res.data.portfolio) })
    },[]
    )

    const  portfolioimgs  =images.map((iamg) => {
          return (
            <div key={iamg.id}>
              <PortBox>
                <Img src={iamg.image} />
                  <Portoverlay >
                    
                          <Portoverlayspan>
                              Show Image
                          </Portoverlayspan>
                    </Portoverlay>
                  </PortBox> 
              </div>
            )
        })
    return (
    <PortfolioSection>
      <div >
            <Porttitle  ><span>My</span> Portfolio</Porttitle>
            <Portlist >
                <Portitem active='yes'>All</Portitem>
                <Portitem >HTML</Portitem>
                <Portitem >Photoshop</Portitem>
                <Portitem >Wordpress</Portitem>
                <Portitem >Mobile</Portitem>
            </Portlist>
            {portfolioimgs}
            
            
        </div>
    </PortfolioSection>
  )
  
}
export default Portfolio;

