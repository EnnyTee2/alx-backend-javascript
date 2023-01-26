export default class HolbertonCourse {
  constructor(name, length, students) {
     if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }
    if (!Array.isArray(students)) {
      throw new TypeError('must be a array');
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }
  get length() {
    return this._length;
  }
  get students() {
    return this._students
  }

  set name(nam) {
    if (typeof na !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nam;
  }
  set length(leng) {
   if (typeof leng !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = leng;
  }
  set students(stud) {
    if (!Array.isArray(stud)) {
      throw new TypeError('must be a array');
    }
    this._students = stud;
  }
}
