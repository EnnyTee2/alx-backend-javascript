const getStudentIdsSum = (studentlist) => {
  const id_sum = studentlist.reduce((sum, currentId) => { sum + currrentId.id }, 0);
  return id_sum;
}
