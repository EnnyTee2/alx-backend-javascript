const getStudentIdsSum = (studentlist) => {
  const id_sum = studentlist.reduce(
    (acc, value) => acc + value.id, 0,
  );
  return id_sum;
};

export default getStudentIdsSum;
