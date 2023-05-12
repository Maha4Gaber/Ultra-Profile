import React,{ useState, useEffect} from "react";
import axios from "axios";
import { SocialmediaSection ,Social, Icon, Parg,Span} from "./style";

const SocialMedia = () => {
  const [socials,setSocials] = useState([]);
    useEffect(()=>{
      axios.get("js/data.json")
        .then(res => { setSocials(res.data.social) })
    },[]
    )
    const  SocialMediadiv  =socials.map((so) => {
            return (
              <div key={so.id}>
                <Social face={so.type} >
                <Icon className={so.icon}></Icon>
                <Parg>
                    <Span >{so.title}</Span>
                    <Span info2="info2">{so.body}</Span>
                </Parg>
            </Social>
            </div>
            )
        })
  return (
    <div>
      <SocialmediaSection class="social-media">
            {SocialMediadiv}
            
            
        </SocialmediaSection>
        

        
    </div>
  )
}
export default SocialMedia;
