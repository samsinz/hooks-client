import React from "react"
import useAuth from "../auth/useAuth";

const Profile = () => {
	const { currentUser } = useAuth()

	return (
		<div>
			<p>Welcome to your protected profile! {currentUser.name}</p>
		</div>
	)
}

export default Profile
