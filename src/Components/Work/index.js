import axios from "axios";
import React, { Component } from "react";
import { WorkSection,WorkPart,Worktitle,Partdesc,Icon, Parttitle,HR} from "./style";
class Work extends Component {

    state = {
        works: []
    };
    componentDidMount(){
        axios.get("js/data.json")
            .then(res=>{this.setState({works:res.data.works })})
    };
    
    render() {
        const { works } = this.state;
        const worlslist = works.map((workitm) => {
            return (
                <WorkPart first={workitm.id} key={workitm.id}>
                    <Icon className={workitm.icon_name}></Icon>
                    <Parttitle >{workitm.title}</Parttitle>
                    <HR />
                    <Partdesc >
                        {workitm.body}
                    </Partdesc>
                </WorkPart>
            )
        })
        return (
            <div>
                <WorkSection >
                    <div className="container">
                        <Worktitle ><span>My</span> Work</Worktitle>
                        {worlslist}
                
                    </div>
                </WorkSection>
            </div>
        )
    }
}
export default Work;