import {Link} from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import {fadeInDown, fadeIn} from 'react-animations'


const fdInDown = keyframes`${fadeInDown}`

const FadeForm = styled.form`
    animation: 2s ${fdInDown}
`
const jobFade = keyframes`${fadeIn}`
const JobForm = styled.div`
width: 35%;
margin-left: 30%;
margin-top: 10%;
backdrop-filter: blur(10px);
padding: 25px;
border-radius: 10px;
box-shadow: -5px -5px 27px #486a87, 5px 5px 27px #486a87;
form {
  display: block;
  align-items: center;
  width: 100%;
  text-align: center;
  justify-content: center;
}
input {
  width: 25%;
  margin-bottom: 20px;
  box-shadow: 2px 2px 2px 2px whitesmoke;
  border-radius: 10px;
}
label {
  color: #0d3b4c;
  text-shadow: 2px 2px 2px whitesmoke;
}
animation: 5s ${jobFade};
`

const Cancel = styled.button`
color: #ffffff;
text-decoration: none;
text-shadow: 2px 2px 2px black;
border-radius: 10px;
padding: 0.5rem 1rem;
background: #6999c3;
box-shadow: inset 2px 2px 5px #486a87, inset -2px -2px 5px #486a87;
font-weight: bold;
margin-bottom: 20px;
margin-right: 20px;
:hover {
  transition: all 0.3s ease-out;
  background-color: #ed474a !important;
  color: #0d3b4c;
  font-weight: bold;
  text-shadow: 2px 2px 2px whitesmoke;
}
@media screen and (max-width: 560px) {
  margin-right: 0px;
}
`

const Deleted = styled.button`
    color: #0d3b4c;
    text-decoration: none;
    text-shadow: 2px 2px 2px whitesmoke;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    background: #f4f4ed;
    box-shadow: inset 2px 2px 5px #486a87, inset -2px -2px 5px #486a87;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 20px;
:hover {
  transition: all 0.3s ease-out;
  background-color: #ed474a !important;
  color: #0d3b4c;
  font-weight: bold;
  text-shadow: 2px 2px 2px whitesmoke;
}
`

const CreateJob = styled.button`
    color: #0d3b4c;
    text-decoration: none;
    text-shadow: 2px 2px 2px whitesmoke;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    background: #f4f4ed;
    box-shadow: inset 2px 2px 5px #486a87, inset -2px -2px 5px #486a87;
    font-weight: bold;
    margin-bottom: 20px;
    margin-right: 20px;
:hover {
  transition: all 0.3s ease-out;
  background-color: #308834 !important;
  color: #0d3b4c;
  font-weight: bold;
  text-shadow: 2px 2px 2px whitesmoke;
}
@media screen and (max-width: 560px) {
  margin-right: 0px;
}
`



export {
    FadeForm,
    JobForm,
    Cancel,
    Deleted,
    CreateJob
}