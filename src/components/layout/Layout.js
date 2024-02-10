import BodyContent from "./bodyContent/BodyContent";
import Header from "./header/Header";
import "./Layout.css";
import { Container } from "@mui/material";

const Layout = () => {
    return (
        <>
            <div>
                <Container className="bg">
                    <Header />
                    <BodyContent />
                </Container>
                <div classname='vector vector-color vector-borders' />
            </div>
        </>
    )
};

export default Layout;