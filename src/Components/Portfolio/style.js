import styled from "styled-components";


export const PortfolioSection = styled.div`
    background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
    height: calc(100vh - 158px);
`
export const Porttitle = styled.div`
    text-align: center;
    font-size: 35px
`
export const Portlist = styled.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0
`
export const Portitem = styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    background-color: ${props =>  props.active==='yes'?'#eb5424':''};
    color: ${props =>  props.active==='yes'?'#fff':''};
    border-radius:2px;
    &:hover {
    background:  ${props =>  props.active==='yes'?'':'#eb5424'};
    color:  ${props =>  props.active==='yes'?'':'#fff'};
}
`

export const PortBox = styled.div`
    width: 25%;
    float: left;
    font-size: 0;
    position: relative;
    &:hover >p {
    opacity: 1
}
`
export const Span = styled.span`
    font-weight: normal
`
export const Img = styled.img`
width: 100%
}
`
export const Portoverlay = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0;
    transition:all .5s;
`
export const Portoverlayspan = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;
`
