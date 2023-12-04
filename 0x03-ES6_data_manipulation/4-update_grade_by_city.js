export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((item) => item.location === city)
    .map((student) => {
      const gradeI = newGrades
        .filter((item) => item.studentId === student.id)
        .map((x) => x.grade)[0];
      const grade = gradeI || 'N/A';
      return { ...student, grade };
    });
}
