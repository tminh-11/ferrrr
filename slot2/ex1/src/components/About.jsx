function About() {
    const student = {
        id: 1,
        name: "Alice",
        avatar: "/img/alice.jpg", // đặt trong public/img
        age: 20,
        grade: "A"
    };

    const { id, name, avatar, age, grade } = student;

    return (
        <>
            <h2>This is about the student</h2>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Grade: {grade}</p>
            <img src={avatar} alt={name} width="150" />
        </>
    );
}

export default About;
