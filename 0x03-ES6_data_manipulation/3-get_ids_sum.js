const getStudentIdsSum = (studentlist) => {
  const id_sum = studentlist.reduce((accumulator, currentValue) => { accumulator + currrentValue });
  return id_sum;
}
