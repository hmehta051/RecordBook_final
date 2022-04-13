export default function allotment(students, colleges) {
    console.log(colleges);
    const sCopy = students.map((student) => ({ ...student }));
  const cCopy = colleges.map((college) => ({ ...college }));
  let CAList = [];
  for (let i = 0; i < sCopy.length; i++) {
    let student = sCopy[i];
    let cAllot = {};
    let cp_1_i = cCopy.findIndex(
      (college) => college.name === student.college_preference1
    );
    let cp_2_i = cCopy.findIndex(
      (college) => college.name === student.college_preference2
    );
    let cp_3_i = cCopy.findIndex(
      (college) => college.name === student.college_preference3
    );
    if (cCopy[cp_1_i].noOfSeats > 0) {
      cCopy[cp_1_i].noOfSeats = cCopy[cp_1_i].noOfSeats - 1;
      cAllot.name = student.student_nam;
      cAllot.college = student.college_preference1;
      cAllot.rank = student.rank;
      cAllot.id = student.id;
      CAList.push(cAllot);
    } else if (cCopy[cp_2_i].noOfSeats > 0) {
      cCopy[cp_2_i].noOfSeats = cCopy[cp_2_i].noOfSeats - 1;
      cAllot.name = student.student_nam;
      cAllot.college = student.college_preference2;
      cAllot.rank = student.rank;
      cAllot.id = student.id;
      CAList.push(cAllot);
    } else if (cCopy[cp_3_i].noOfSeats > 0) {
      cCopy[cp_3_i].noOfSeats = cCopy[cp_3_i].noOfSeats - 1;
      cAllot.name = student.student_nam;
      cAllot.college = student.college_preference3;
      cAllot.rank = student.rank;
      cAllot.id = student.id;
      CAList.push(cAllot);
    }
  }
  return CAList;
  }
