import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import "./App.css";
import Header from "./components/Header";
import Particles from "react-tsparticles";

function App() {
    return (
        <>
            <Particles
                id="tsparticles"
                options={{
                    background: {
                        color: {
                            value: "#fff",
                        },
                        opacity: 0.1,
                    },
                    particles: {
                        color: {
                            value: "#FFAB4C",
                        },
                        links: {
                            color: "#FFAB4C",
                            distance: 20,
                            enable: true,
                            opacity: 0.2,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 900,
                            },
                            value: 20,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                }}
            />
            <Navbar />
            <Header />
        </>
    );
}

export default App;
