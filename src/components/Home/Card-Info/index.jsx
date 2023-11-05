/* eslint-disable react/prop-types */
import Evolution from "./Evolution";
import Logo from "./Logo"
import TypeEffect from "./Type-Effect";

const CardInfo = ({title}) => {
    return (
    <>
        <h2> {title} </h2>
        <Evolution title="Evolution by Joy"/>
        <Logo title="Logo by Joy"/>
        <TypeEffect title="TypeEffect by Joy"/>
    </>
    )
};

export default CardInfo;