import { signOut } from "next-auth/react";

const LogoutButton = () => {
    return (
        <button 
        onClick={() => signOut()}
        className="text-sm text-gray-400 hover:text-forgeBlue"
        >
            Sign out
        </button>
    )
}

export default LogoutButton;