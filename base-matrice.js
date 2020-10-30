/*
var A = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 8],

];
var B = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];

multiplier(A, B);
*/


var A = [
  [1, 2, 0],
  [4, 3, -1],

];
var B = [
  [5, 1],
  [2, 3],
  [3, 4],
];

showMatrice(A);
showMatrice(B);
multiplier(A, B);

function multiplier(mat1, mat2) {
}

function showMatrice(mat) {
  var str = '';
  for (var i = 0; i < mat.length; i++) {
    str += '| ';
    str += mat[i].join('\t');
    str += '\t|\n';
  }

  console.log(str);
}



