/**
 * [(lv.4)행렬-뒤집기.js]
 *
 * 1) rotateMatrix 함수는 N x N 형태의 2차원 배열(matrix)을
 *    90도 시계방향으로 회전한 새로운 배열을 반환해야 합니다.
 * 2) 원본 배열(matrix)을 변경하지 않아야 합니다.
 * 3) 이중 반복문을 사용하고, 회전 규칙을 적용하세요.
 *
 * 힌트:
 * 1. 90도 회전의 규칙을 찾아보세요:
 *    - matrix[i][j]는 rotated[j][n-1-i]가 됩니다
 *    - 여기서 n은 배열의 크기입니다
 * 2. 새로운 2차원 배열을 만들고 위 규칙에 따라 값을 채워넣으세요
 * 3. 이중 반복문을 사용하면 됩니다
 *
 * 예시:
 * const matrix = [
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ];
 *
 * rotateMatrix(matrix) => [
 *   [7, 4, 1],
 *   [8, 5, 2],
 *   [9, 6, 3]
 * ]
 *
 * @param {number[][]} matrix - N x N 2차원 배열
 * @returns {number[][]} 90도 회전된 새로운 배열
 */

//TODO: 2차원 배열을 90도 회전한 새로운 배열을 반환하는 함수를 작성하세요.
function rotateMatrix(matrix) {
  //0,0 > 0,2 // 0,1> 1,2 //0,2 > 2,0 // 1,0 > 0,1 // 1,1 > 1,1 // 1,2 > 2,1
  // //matrix[i][j]는 rotated[j][n-1-i]

  let n = matrix.length;
  if (n === 0) {
    return [];
  }

  //Array(n) : 길이가 n인 배열을 만듦 > [undefined, ... undefined] n개
  //.fill(0) : 0으로 채움 > [0 , 0 ... , 0] n개
  //Array.from({객체}) : 객체 기반 길이가 객체인 배열 만듦
  //[0 , 0 ... , 0] 이거를 n개의 줄에 하나씩 넣음
  //Array.from()이 map과 같은 역할을 한다
  let newarr = Array.from({ length: n }, () => Array(n).fill(0));
  //그 다음 자리를 바꾸자자
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      newarr[j][n - 1 - i] = matrix[i][j];
    }
  }

  return newarr;
}

// export 를 수정하지 마세요.
export { rotateMatrix };
