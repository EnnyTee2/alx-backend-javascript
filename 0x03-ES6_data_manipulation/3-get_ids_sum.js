const getStudentIdsSum = (studentlist) => {
  const id_sum = studentlist.reduce(
    (sum, value) => sum + value.id, 0,
  );
  return id_sum;
};

export default getStudentIdsSum;
