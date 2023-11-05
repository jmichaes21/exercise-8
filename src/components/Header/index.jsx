/* eslint-disable react/prop-types */
import Generation from "./Generation"
import Logo from "./Logo"

const Header = ({title}) => {
    return (
        <>
            <h1>{title}</h1>
            <Generation title="Generation by Putri" />
            <Logo title="Logo by Putri" />
        </>
    )
}

export default Header