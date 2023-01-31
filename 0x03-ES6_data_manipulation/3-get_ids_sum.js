const getStudentIdsSum = (studentlist) => {
  const id_sum = studentlist.reduce((sum, currentId) => { sum + currrentId }, 0);
  return id_sum;
}
