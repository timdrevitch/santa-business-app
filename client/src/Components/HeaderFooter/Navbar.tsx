import { FC } from "react"
// import { Link } from "react-router-dom"
import {
  NavigationContainer,
  NavigationHeader,
  // NavigationImage,
  // NavigationImageCentered,
  NavigationImageContainer,
  NavigationLI,
  // NavigationLink,
  NavigationLinkContainer,
  NavigationUL,
  NavigationUserContainer,
  NavigationUserImageContainer,
} from "../../Styles/HeaderFooterStyles"

const Navbar: FC = (): JSX.Element => {
  const user = null

  return (
    <>
      {user ? (
        <NavigationHeader>
          <NavigationContainer>
            <NavigationImageContainer>
              {/* <Link to="/"> */}
              {/* <NavigationImage
                src={require("../../Assets/download.jpeg")}
                alt="Santa"
              /> */}
              {/* </Link> */}
            </NavigationImageContainer>
            <NavigationLinkContainer>
              {/* <NavigationLink to="/logs">
                <em>Waste Logs</em>
              </NavigationLink> */}
            </NavigationLinkContainer>
            <NavigationUserContainer>
              <NavigationUL>
                <NavigationLI>
                  Hello User{/* Hello, {user} */}
                  Logout Button{/* <LogOut /> */}
                </NavigationLI>
              </NavigationUL>
              <NavigationUserImageContainer>
                Profile Image
                {/* <NavigationUserImg src={image} alt="Profile Image" /> */}
              </NavigationUserImageContainer>
            </NavigationUserContainer>
          </NavigationContainer>
        </NavigationHeader>
      ) : (
        <NavigationHeader>
          {/* <Link to="/"> */}
          {/* <NavigationImageCentered
            src={require("../../Assets/download.jpeg")}
            alt="Santa"
          /> */}
          {/* </Link> */}
          <h1 style={{ margin: "auto 2rem", lineHeight: "4rem" }}>
            <span style={{ color: "white" }}>Santa</span>
            <span style={{ color: "yellowgreen" }}>Dan</span>
          </h1>
        </NavigationHeader>
      )}
    </>
  )
}

export default Navbar
