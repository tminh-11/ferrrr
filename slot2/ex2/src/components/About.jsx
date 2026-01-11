function About({ student }) {
    const { id, name, avatar, age, grade } = student;

    return (
        <div className="student-card">
            <img src={avatar} alt={name} className="student-avatar" />
            <h3>{name}</h3>
            <p>ID: {id}</p>
            <p>Age: {age}</p>
            <p>Grade: {grade}</p>
        </div>
    );
}

export default About;

