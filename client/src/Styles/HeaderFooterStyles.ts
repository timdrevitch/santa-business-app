import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"

//Animations
const shine = keyframes`
    0% { box-shadow: 1px 0 25px 2px white; }
    50% { box-shadow: 1px -4px 25px 2px white; }
    100% { box-shadow: 1px 0 25px 2px white; }
`

//Header
export const NavigationLink = styled(Link)`
  border: 1px solid darkgreen;
  background: linear-gradient(180deg, #ffffff 0%, #c6d1ba 44%, #788a78 100%);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 15px 10px 0 10px;
  margin-left: 2%;
  color: darkgreen;
  text-decoration: none;
  font-family: Trebuchet MS, sans-serif;
  transition: all 0.5s ease-in-out;
  animation: ${shine} 3s infinite 0s;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: green;
    padding-top: 40px;
    border: 1px solid green;
  }
`
export const NavigationLinkContainer = styled.div`
  width: 35%;
  display: inline-block;
  text-align: center;
`
export const NavigationHeader = styled.header`
  overflow: hidden;
  background: darkred;
  height: 4rem;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.4), 0 7px 20px 0 rgba(0, 0, 0, 0.4);
  font-family: Trebuchet MS, sans-serif;
`
export const NavigationContainer = styled.div`
  width: 95%;
  margin: auto;
`
export const NavigationImageContainer = styled.div`
  width: 9rem;
  display: inline-block;
`
export const NavigationImage = styled.img`
  width: 100%;
  height: 2.3rem;
  margin: 1rem 0;
  display: inline;
  vertical-align: center;
`
export const NavigationImageCentered = styled.img`
  width: 12rem;
  height: 3rem;
  margin: 1rem auto;
  display: block;
  text-align: center;
`
export const NavigationUserContainer = styled.div`
  display: inline;
  float: right;
`
export const NavigationUL = styled.ul`
  display: inline-block;
  text-align: right;
`
export const NavigationLI = styled.li`
  display: inline-block;
  color: white;
`
export const NavigationUserImageContainer = styled.div`
  display: inline-block;
  margin: auto 0.5rem;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0px 0px 150px 60px rgba(237, 245, 243, 0.788);
`
export const NavigationUserImg = styled.img`
  width: 2rem;
  height: 2rem;
`

//Footer
export const FooterContainer = styled.div`
  text-align: center;
  font-family: Trebuchet MS, sans-serif;
  color: white;
`
