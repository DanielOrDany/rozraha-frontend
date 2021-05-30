import React from "react";
import { Link } from "react-router-dom";
import Book from "../../assets/Book";
import GraduationCap from "../../assets/GraduationCap";
import Monitor from "../../assets/Monitor";
import "./HomePage.css"

const HomePage = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div id="branding">
                        <h1>Libraby</h1>
                    </div>
                    <nav>
                        <ul >
                            <Link to="/login" className="link">
                                <li>Login</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="showcase">
                <div className="container">
                    <h1>Afordable professional work</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit beatae culpa laboriosam. Obcaecati reiciendis assumenda, dolorum, culpa placeat numquam consectetur velit officiis quas voluptatem minus cum facere veniam alias nisi! </p>
                </div>
            </section>

            <section id="boxes">
                <div className="container">
                    <div className="box">
                        <GraduationCap />
                        <h3>section 1</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit beatae culpa laboriosam. Obcaecati reiciendis assumenda, dolorum, culpa placeat numquam consectetur velit officiis quas voluptatem minus cum facere veniam alias nisi! </p>
                    </div>
                    <div className="box">
                        <Monitor />
                        <h3>section 2</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit beatae culpa laboriosam. Obcaecati reiciendis assumenda, dolorum, culpa placeat numquam consectetur velit officiis quas voluptatem minus cum facere veniam alias nisi! </p>
                    </div>
                    <div className="box">
                        <Book />
                        <h3>section 3</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit beatae culpa laboriosam. Obcaecati reiciendis assumenda, dolorum, culpa placeat numquam consectetur velit officiis quas voluptatem minus cum facere veniam alias nisi! </p>
                    </div>
                </div>
            </section>

            <footer>
                <p>Library</p>
            </footer>
        </>
    );
};

export default HomePage;
