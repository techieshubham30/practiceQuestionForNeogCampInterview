var readlineSync = require('readline-sync');
var noOfStudents = Number(readlineSync.question('Enter number of students '));

var topperStudentDetail=studenthighestMarks(noOfStudents);

console.log(`${topperStudentDetail[0]} scored highest among all with average marks ${topperStudentDetail[1]}`);

function studenthighestMarks(n){
  var topperStudentName=" ";
  var highestMarks=-1;
  var sumOfMarks=0;
  var avg=0;
  for(var i=0;i<n;i++){
    var name=readlineSync.question(`Enter student-${i+1} name `);
    var unitTestMarks=Number(readlineSync.question(`Enter student-${i+1} unit test marks `));

    var preFinalMarks=Number(readlineSync.question(`Enter student-${i+1} pre final marks `));

     var finalMarks=Number(readlineSync.question(`Enter student-${i+1} final marks `));
     sumOfMarks=unitTestMarks+preFinalMarks+preFinalMarks;
     console.log("...........................");
     if(highestMarks<sumOfMarks){
       highestMarks=sumOfMarks;
       topperStudentName=name;
       avg=highestMarks/3;
     }
  }

  return [topperStudentName,avg];
  
}
