import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LeftAside from "../components/Main-Layouts/LeftAside";
import RightAside from "../components/Main-Layouts/RightAside";
import Navbar from "../components/Navbar";


const Home = () => {
    return (
        <div>
            
            <header>
                <Header></Header>
            </header>
            <nav className="w-11/12 mx-auto ">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <aside className="col-span-3">
                    <LeftAside></LeftAside>
                </aside>
                <section className="col-span-6"><Outlet></Outlet></section>
                <aside className="col-span-3">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Home;