import React from "react";
import styled from "styled-components";
import "./Home.css"


export default function Home() {
    return (
        <div>
            <div className="home-div">
                <h1 className="home-header">Connect to your future, rewrite the past</h1>
                <p>Search for mentors</p>
                <p>Sponser a mentee</p>
                <p>Customize your search</p>
                <p>Be apart of a community</p>
                 <img className="home-pic" src={require('./photos/joshua-unsplash.jpg')} alt="Mentor and Mentee drinking coffee"/>
            </div>
               
        </div>
    )
}