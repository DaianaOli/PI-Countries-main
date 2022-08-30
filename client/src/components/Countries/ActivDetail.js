import React from "react";
import { Link } from "react-router-dom";
import "../../styles/activdetail.css"


const Activity = ({ activities, countryName }) => {
    if (activities && activities.length > 0) {
        console.log(activities);
        return (
        <div >
            <h3>Activities planed in {countryName}</h3>
            <table className='activities'>
            <thead>
                <tr>
                <th>Name</th>
                <th>Duration (hours)</th>
                <th>Season</th>
                <th>Diff.</th>
                </tr>
            </thead>
            <tbody>
                {activities &&
                activities.map((a) => (
                    <tr key={a.id}>
                    <td>{a.name}</td>
                    <td>{a.duration}</td>
                    <td>{a.season}</td>
                    <td>{a.difficulty}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
        );
    } else {
        return <Link className='link' to="/activities"><h3>Plan activities for this country!</h3></Link>
    }
};

export default Activity;