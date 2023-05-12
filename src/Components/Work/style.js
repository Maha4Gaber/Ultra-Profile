import styled from "styled-components";


export const WorkSection = styled.div`
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff;
    height: calc(100vh - 238px);

`
export const Worktitle = styled.h2`
    font-size: 60px; 
`
export const WorkPart = styled.div`
    margin-top: 20px;
    width: 30%;
    float: left;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5%;
    margin-left: ${ (props) => props.first === 1 ? '0' : '5%'};
`
export const Icon = styled.i`
    color: #888;
    margin-bottom: 20px
`

export const HR = styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`
export const Span = styled.span`
    font-weight: normal

`
export const Parttitle = styled.h4`
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px
}
`

export const Partdesc = styled.div`
    font-size: 14px;
    color: #888;
    padding: 20px
`

