import styled from "styled-components";


export const Drop = styled.div`
    padding: 50px 0;
    text-align: center;
height: calc(100vh - 238px);


`
export const Droptitle = styled.h2`
    font-size: 60px;
    margin-bottom: 30px
`
export const Dropform = styled.form`
    width: 70%;
    margin: auto;
`
export const Dropinput = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 10px;
    margin-bottom: 10px;
    border:none;
    border-radius: 5px;
    background: #ccc;
`

export const Forminput = styled.div`
overflow: hidden
`
export const Textinput = styled(Dropinput)`
    float: left;
    width: 49%;
`
export const Mailinput = styled(Dropinput)`
    float: right;width: 49%;
`
export const Sub = styled(Dropinput)`
    width: 100%;
`
export const Text = styled.textarea`
    width: 100%;
    outline: none;
    background: #ccc;
    border:none;
    padding: 10px;
    border-radius: 5px;
`
export const Span = styled.span`
    font-weight: normal
`
export const Submit = styled.input`
    width: 60%;
    background: #eb5424;
    margin:20px 0;
    border:none;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
`