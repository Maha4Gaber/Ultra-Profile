import styled from "styled-components";


export const SocialmediaSection = styled.div`
       height: auto;
    overflow: hidden;
    height: calc(100vh - 138px);

`
export const Social = styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background:${ props =>  props.face === 'face' ? '#3b5998' : '' };
    background:${ props =>  props.face === 'twitter' ? '#498cbf' :''};
    background:${ props =>  props.face === 'pin' ? '#cc2127' :''};
`
export const Icon = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px
`
export const Parg = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff
`

export const Homedesc = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px
`
export const Span = styled.span`
    display: block;
    margin-bottom: 8px;
    font-weight: ${props=> props.info2==="info2"?'normal':''}
`