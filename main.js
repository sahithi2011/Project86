
name_of_the_student_array = [];


function submit() {
  var display_student_array = [];

  var name_of_the_student = document.getElementById("name").value;
  var score_of_student = document.getElementById("Score").value;

  var temp = name_of_the_student.concat("-" + score_of_student);
  name_of_the_student_array.push(temp);
  console.log(name_of_the_student_array);

  var lenght_of_name_of_students_array = name_of_the_student_array.length;
  console.log(lenght_of_name_of_students_array);


  for (var k = 0; k < lenght_of_name_of_students_array; k++) {
    display_student_array.push(name_of_the_student_array[k] + "<br>");
    console.log(display_student_array);
  }

  var display_student_array=display_student_array.join(" ");
  document.getElementById("display_name_with_commas").innerHTML = display_student_array;
  
  var name_of_the_student = " ";
  var score_of_student = " ";
  document.getElementById("name").value=name_of_the_student;
  document.getElementById("Score").value=score_of_student;
  
}


function sort_function() {
  name_of_the_student_array.sort();
  console.log(name_of_the_student_array);
  var display_student_array = [];
  var lenght_of_name_of_students_array = name_of_the_student_array.length;
  console.log(lenght_of_name_of_students_array);
  for (var k = 0; k < lenght_of_name_of_students_array; k++) {
    display_student_array.push(name_of_the_student_array[k] + "<br>");
    console.log(display_student_array);
  }
  var display_student_array=display_student_array.join(" ");
  document.getElementById("display_name_with_commas").innerHTML = display_student_array;
}


function clear_function() {
  name_of_the_student_array = [];
  console.log(name_of_the_student_array);
  document.getElementById("display_name_with_commas").innerHTML = name_of_the_student_array;
  
}