interface Student {
  id: string;
  name: string;
}

interface StudentListProps {
  students: Student[];
}

const StudentList = ({ students }: StudentListProps) => {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
};

export default StudentList;
