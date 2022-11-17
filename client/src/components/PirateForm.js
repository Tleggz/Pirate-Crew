import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { Navigate } from 'react-router-dom';

const PirateForm = (props) => {

    const [pirateList, setPirateList] = useState([]);

    const [PirateName, setPirateName] = useState('');
    const [ImageURL, setImageURL] = useState('');
    const [PirateCatchPhrase, setPirateCatchPhrase] = useState('');
    const [NumberOfTreasureChests, setNumberOfTreasureChests] = useState('');
    const [CrewPosition, setCrewPosition] = useState('');
    const [PegLeg, setPegLeg] = useState('');
    const [EyePatch, setEyePatch] = useState('');
    const [HookHand, setHookHand] = useState('');
    const [errors, setErrors] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        axios
            .post("http://localhost:8000/api/pirates", { 
                PirateName,
                ImageURL,
                PirateCatchPhrase,
                NumberOfTreasureChests,
                CrewPosition,
                PegLeg,
                EyePatch,
                HookHand,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPirateList([...pirateList, res.data]);
                setPirateName("");
                setImageURL("");
                setPirateCatchPhrase("");
                setNumberOfTreasureChests("");
                setCrewPosition("");
                setPegLeg("");
                setEyePatch("");
                setHookHand("");
                setErrors([]);
                Navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <header>
                Add Pirate
            </header>
            <form onSubmit={handleSubmit}>
                <div className="form-fields">
                    <label>Pirate Name:</label>
                    {}
                    <input
                        onChange={(e) => setPirateName(e.target.value)}
                        value={PirateName}
                        type="text"
                        name="PirateName"
                        placeholder="Enter Pirate Name"
                        required
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Image URL:</label>
                    <input
                        onChange={(e) => setImageURL(e.target.value)}
                        value={ImageURL}
                        type="text"
                        name="ImageURL"
                        placeholder="Enter Image URL"
                        required
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label># of Treasure Chests:</label>
                    <input
                        onChange={(e) => setNumberOfTreasureChests(e.target.value)}
                        value={NumberOfTreasureChests}
                        type="number"
                        name="NumberOfTreasureChests"
                        placeholder="Enter # of Treasure Chests"
                        required
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Pirate Catch Phrase:</label>
                    <input
                        onChange={(e) => setPirateCatchPhrase(e.target.value)}
                        value={PirateCatchPhrase}
                        type="text"
                        name="PirateCatchPhrase"
                        placeholder="Enter Pirate Catch Phrase"
                        required
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Crew Position:</label>
                    <Select
                        options={[
                            { label: "Captain", value: "Captain" },
                            { label: "First Mate", value: "First Mate" },
                            { label: "Quarter Master", value: "Quarter Master" },
                            { label: "Boatswain", value: "Boatswain" },
                            { label: "Powder Monkey", value: "Powder Monkey" },
                        ]}
                        onChange={(e) => setCrewPosition(e.value)}
                        placeholder="Select a crew position"
                        value={CrewPosition}
                        required
                        name='CrewPosition'
                    />
                </div>
                
                <br />

                <div className="form-fields">
                    <label>Peg Leg:</label>
                    <input
                        onChange={(e) => setPegLeg(e.target.checked)}
                        value={PegLeg}
                        type="checkbox"
                        defaultChecked={true}
                        name="PegLeg"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Eye Patch:</label>
                    <input                
                        onChange={(e) => setEyePatch(e.target.checked)}                     
                        value={EyePatch}
                        type="checkbox"
                        defaultChecked={true}
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Hook Hand:</label>
                    <input
                        onChange={(e) => setHookHand(e.target.checked)}
                        value={HookHand}
                        type="checkbox"
                        defaultChecked={true}
                    />
                </div>
                <br />
                {}
                <input className="submit-input" type="submit" value="Add Pirate" />
            </form>
        </div>
    );
}

export default PirateForm;
