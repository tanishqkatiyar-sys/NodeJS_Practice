import { useState } from 'react';

function Skills() {
    const [skills, setSkills] = useState([]);

    const handleSkills = (event) => {
        if (event.target.checked) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills(
                skills.filter((item) => item !== event.target.value)
            );
        }
    };

    return (
        <>
            <h2>Select Your Skills</h2>

            <label htmlFor="html">
                <input type="checkbox" id="html" value="HTML" onChange={handleSkills} />
                HTML
            </label>
            <br />

            <label htmlFor="css">
                <input type="checkbox" id="css" value="CSS" onChange={handleSkills} />
                CSS
            </label>
            <br />

            <label htmlFor="javascript">
                <input type="checkbox" id="javascript" value="JavaScript" onChange={handleSkills} />
                JavaScript
            </label>
            <br />

            <label htmlFor="react">
                <input type="checkbox" id="react" value="React" onChange={handleSkills} />
                React
            </label>

            <h3>Selected Skills:</h3>
            <p>{skills.join(', ')}</p>
        </>
    );
}

export default Skills;