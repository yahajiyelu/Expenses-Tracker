import { Fragment } from "react";
import About from "../About";
import Footer from "../Footer";
import { HomeContainer, Button } from "./styledComponents";

const Home = () => (

    <Fragment>
        <HomeContainer>
        <h1>Welcome to Expense Tracker</h1>
            <p>Track and manage your expenses with ease!</p>
            <p>Get started by adding your expenses and keeping tabs on your financial activities.</p>
            <Button to="/track">Start Tracking Expenses</Button>
            
    </HomeContainer>
    <About/>
    <Footer/>
    </Fragment>
);


export default Home;
