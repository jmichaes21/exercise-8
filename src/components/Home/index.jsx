/* eslint-disable react/prop-types */
import CardInfo from "./Card-Info"
import Search from "./Search"

const Home = ({title}) => {
    return (
    <>
        <h1>{title}</h1>
        <CardInfo title="CardInfo by angel"/>
        <Search title="Search by angel" />
    </>
    )
}

export default Home