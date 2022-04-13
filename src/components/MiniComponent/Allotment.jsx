function Allotment(s, c) {
  let studentList = [...s]
  let collegeList = [...c]
    studentList = studentList.sort((a, b) => {
        return a.rank-b.rank
    });

  let allotmentlist = [];
    for (let i = 0; i < studentList.length; i++) {
        let student = studentList[i];
        let preference1 = true
        let preference2 = true;
        let preference3 = true;
        if (preference1) {
            for (let j = 0; j < collegeList.length; j++) {
              let college = collegeList[j];
              if(
                student.college_preference1 === college.name &&
                college.noOfSeats > 0
              ) {
                allotmentlist.push({
                  id: student.id,
                  rank: student.rank,
                  student_name: student.student_name,
                  college_preference1: student.college_preference1,
                });
                collegeList[j].noOfSeats--;
                  preference1 = false;
                  preference2 = false;
                  preference3 = false;
                break;
              }
            }
        }

        if (preference2) {
            for (let j = 0; j < collegeList.length; j++) {
              let college = collegeList[j];
              if (
                student.college_preference2 === college.name &&
                college.noOfSeats > 0
              ) {
                allotmentlist.push({
                  id: student.id,
                  rank: student.rank,
                  student_name: student.student_name,
                  college_preference1: student.college_preference2,
                });
                collegeList[j].noOfSeats--
                 preference1 = false;
                 preference2 = false;
                 preference3 = false;
                break;
              }
            }
        }
        if (preference3) {
          for (let j = 0; j < collegeList.length; j++) {
            let college = collegeList[j];
            if (
              student.college_preference3 === college.name &&
              college.noOfSeats > 0
            ) {
              allotmentlist.push({
                id: student.id,
                rank: student.rank,
                student_name: student.student_name,
                college_preference1: student.college_preference3,
              });
              collegeList[j].noOfSeats--
              preference1 = false;
              preference2 = false;
              preference3 = false;
              break;
            }
          }
        }
    }
  return allotmentlist;
}

export {Allotment}

