function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList.map((obj) => obj.id);
}

export default getListStudentIds;
