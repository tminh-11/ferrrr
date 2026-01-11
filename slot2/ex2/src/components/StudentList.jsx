import About from "./About";
import listOfStudent from "../data/listOfStudent";
import "./StudentList.css";

function StudentList() {
    return (
        <div className="student-grid">
            {listOfStudent.map(student => (
                <About key={student.id} student={student} />
            ))}
        </div>
    );
}

export default StudentList;
