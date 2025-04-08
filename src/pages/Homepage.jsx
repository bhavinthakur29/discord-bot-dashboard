import { Title } from "react-head";
import { HeroSection, Navbar } from "../components";

export default function Homepage({ id, name }) {
    return (
        <>
            <Title>{name} – Discord Bot Dashboard</Title>
            <Navbar />
            <HeroSection id={id} botName={name} />
        </>
    )
}