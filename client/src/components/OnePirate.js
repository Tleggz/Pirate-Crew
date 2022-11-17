import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const OnePirate = (props) => {

    const { id } = useParams();
    const [OnePirate, setOnePirateState] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/pirates/${id}`)
            .then((res) => {
                console.log(res.data);
                setOnePirateState(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div className="onePirate-component">
            <header className="onePirate-component-header">
                <h1>{OnePirate.PirateName}</h1>
            </header>
            <div className="onePirate-component-body">
                <div className="onePirate-component-body-left-top-left">
                    <img src={OnePirate.imageUrl} alt="pirate" />
                </div>
                <div className="onePirate-component-body-left-right">
                    <h2 className="onePirate-component-body-left-right-title">
                        About
                    </h2>
                    <div className="onePirate-component-body-left-right-text">
                        <p>Position: {OnePirate.CrewPosition}</p>
                        <p>Treasures: {OnePirate.NumberOfTreasureChests}</p>
                        <p>Peg Leg: {OnePirate.PegLeg ? "Yes" : "No"}</p>
                        <p>Eye Patch: {OnePirate.EyePatch ? "Yes" : "No"}</p>
                        <p>Hook Hand: {OnePirate.HookHand ? "Yes" : "No"}</p>
                    </div>
                </div>
                <div className="onePirate-component-body-left-bottom">
                    <h2>"{OnePirate.PirateCatchPhrase}"</h2>
            </div>
        </div>
    </div>
    );
}

export default OnePirate;
