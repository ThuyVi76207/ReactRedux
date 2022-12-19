import React from "react";
import { useDispatch, useSelector } from "react-redux";
import casual from 'casual-browserify';
import { addNewHobby, setActiveHobby } from "../actions/hobby";
import './HomePage.css';
const HomePage = () => {
    const hobbyList = useSelector(state => state.hobby.list); //get state
    console.log(hobbyList);
    const activeId = useSelector(state => state.hobby.activeId);
    console.log(activeId);
    const dispatch = useDispatch();

    const handleAddHobbyClick = () => {
        //Random a hobby object: id + title
        const newHobby = {
            id: casual.uuid, //unit ID
            title: casual.title
        }
        //Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    };

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div className="home-page">
            <h2>Home page</h2>
            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <ul className="hobby-list">
                {
                    hobbyList.map(hobby => (
                        <li key={hobby.id}
                            className={hobby.id === activeId ? 'active' : ''}
                            onClick={() => handleHobbyClick(hobby)

                            } > {hobby.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HomePage;