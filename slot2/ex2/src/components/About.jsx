import { useState } from "react";

function About({ student }) {
    const { id, name, avatar, age, grade } = student;
    const [show, setShow] = useState(false);

    return (
        <div className="student-card">
            <img src={avatar} alt={name} className="student-avatar" />
            <h3>{name}</h3>

            {show && (
                <>
                    <p>ID: {id}</p>
                    <p>Age: {age}</p>
                    <p>Grade: {grade}</p>
                </>
            )}

            <button
                className="btn-detail"
                onClick={() => setShow(!show)}
            >
                {show ? "Hide Info" : "Show Info"}
            </button>
        </div>
    );
}

export default About;
