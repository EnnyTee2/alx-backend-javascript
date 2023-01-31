const getStudentsByLocation = (studentList, city) => {
  const arr = studentList.filter(student => student.location == city);
  return arr;
};

export default getStudentsByLocation;
