const getStudentsByLocation = (studentlist, city) => {
  return studentist.filter((student) => student.location === city);
};

export default getStudentsByLocation;
