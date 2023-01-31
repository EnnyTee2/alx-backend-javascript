const getStudentIdsSum = (studentlist) => {
  const id = studentlist.reduce(
    (acc, currentid) => acc + currentid.id, 0,
  );
  return id_sum;
};

export default getStudentIdsSum;
