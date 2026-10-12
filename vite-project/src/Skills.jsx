import { useState } from "react";
function Skills() {

    const [city,setCity]=useState('Kanpur');
    return (
        <>
            <h2>Select Your City</h2>

            <label htmlFor="city">Choose a city: </label>

            <select id="city" onChange={(event)=>{setCity(event.target.value)}} defaultValue="Kanpur">
                <option value="Kanpur">Kanpur</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Jaipur">Jaipur</option>
            </select>
            <h1>Selected City: {city}</h1>
        </>
    );
}

export default Skills;