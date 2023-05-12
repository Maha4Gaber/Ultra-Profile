import styled from "styled-components";


export const Profileskills = styled.div`
    padding: 50px 0;
    overflow: hidden;
    height: calc(100vh - 238px);

`
export const ProfileC = styled.div`
    width: 50%;
    float: left;
`
export const Profilelist = styled.ul`
    list-style: none
`
export const Profileitem = styled.li`
    margin: 8px 0;
    padding: 5px 0;
`

export const Skills = styled.div`
    width: 50%;
    float: left;
`
export const Span = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: ${props=> props.web==="web"?'bold':'normal'};
    color:  ${props=> props.web==="web"?'#eb5424':''};
`
export const Bar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`
export const Skillsdesc = styled.div`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`
export const Title = styled.span`
    float: left;
`
export const Perc = styled.span`
    float: right;
    margin-right: 100px
`

export const Parent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`
export const SpanWidth = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props=> props.width};
`
