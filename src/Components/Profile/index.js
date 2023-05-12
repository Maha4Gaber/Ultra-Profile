import React,{ useState, useEffect} from "react";
import axios from "axios";
import {
    Profileskills,ProfileC,Profilelist,Profileitem,Span,Bar,Skillsdesc
    ,Title,Perc,Parent,SpanWidth
} from "./style.js"
const Profile = () => {
    const [bars,setbars] = useState([]);
    useEffect(()=>{
      axios.get("js/data.json")
        .then(res => { setbars(res.data.profile) })
    },[]
    )
    const  porfile_bars  =bars.map((bar) => {
            return (
            <div key={bar.id}>
                <Bar >
                        <Title>{bar.name}</Title>
                        <Perc >{bar.width}</Perc>
                        <Parent >
                            <SpanWidth width={bar.width}></SpanWidth>
                        </Parent>
                    </Bar>
                </div>
            )
        })
    return (

        <Profileskills >
            <div className="container">
                <ProfileC >
                    <h2 ><span>My </span>Profile</h2>
                    <Profilelist >
                        <Profileitem >
                            <Span>Name</Span>
                            Hamza Nabil
                        </Profileitem>
                        <Profileitem>
                            <Span>Birthday</Span>
                            21/1/1996
                        </Profileitem>
                        <Profileitem >
                            <Span>Address</Span>
                            Ain shams
                        </Profileitem>
                        <Profileitem >
                            <Span>Phone</Span>
                            4444 5555 6666
                        </Profileitem>
                        <Profileitem >
                            <Span>Email</Span>
                            hamza@hamza.com
                        </Profileitem>
                        <Profileitem >
                            <Span>Website</Span>
                            <Span web="web">www.google.com</Span>
                        </Profileitem>
                    </Profilelist>
                </ProfileC>
                
                <div >
                    <h2 >Some <span>skills</span></h2>
                    <Skillsdesc >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </Skillsdesc>
                </div>
                    {porfile_bars}
            </div>
        </Profileskills>
    
    )
}
export default Profile;
