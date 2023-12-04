const getListStudentIds = (studentList) => {
  if (studentList && Array.isArray(studentList)) {
    return studentList.map((item) => item.id);
  } else {
    return [];
  }
};

export default getListStudentIds;
