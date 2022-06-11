import React from "react"
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children, handleName }) => {

    return (

        <div>

            <h1 style={{color:"white"}}>{fullName}</h1>
            <p>{bio}</p>
            <h2>{profession}</h2>
            <div>{children}</div>
            <div> {handleName(fullName)}</div>
        </div>

    )
}
Profile.propTypes = {
    children: PropTypes.any,
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
}
Profile.defaultProps = {
    fullName: "Amal",
    bio: "x",
    profession: "ENG",
    children: "img",
    handleName: alert("hello")
}

export default Profile