import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const DisplayAll = (props) => {

    const { pirateList, setPirateList } = props;
    
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then((res) => {
                console.log(res.data);
                setPirateList(res.data);
            })
            .catch(err => console.log(err));
    }, [setPirateList]);

    const handleDeletePirate = (idFromBelow) => {
        axios
            .delete(`http://localhost:8000/api/pirates/${idFromBelow}`)
            .then((response) => {
                console.log('Successfully deleted pirate');
                console.log(response);
                const filteredPirates = pirateList.filter((pirate) => {
                    return pirate._id !== idFromBelow;
                });
                setPirateList(filteredPirates);
            })
            .catch((err) => {
                console.log('Error deleting pirate', err.response);
            });
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                        <button onClick={() => navigate(`/pirates`)}>Add Pirate</button>
                </div>
            </div>
            {
                pirateList.map((pirate, index) => (
                 <div key={pirate._id} className='row'>
                     {}
                     {}
                     <div className='col-md-12'>
                           <div className='card'>
                              <div className='card-body'>
                                 <h5 className='card-title'>{pirate.PirateName}</h5>
                                 <p className='card-text'>{pirate.imageURL}</p>
                                    <Link to={`/pirates/${pirate._id}`}>
                                     <button className='btn btn-primary'>View Pirate</button>
                                 </Link>
                                 <button onClick={() => handleDeletePirate(pirate._id)} className='btn btn-danger'>
                                     Delete Pirate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default DisplayAll;
// find a binary tree 

#include<bits/stdc++.h>
using namespace std;

struct Node
{
    int data;
    struct Node *left;
    struct Node *right;

    Node(int x)
    {

        data = x;
        left = right = NULL;

        