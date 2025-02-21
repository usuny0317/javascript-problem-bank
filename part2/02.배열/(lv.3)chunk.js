/**
 * [(lv.3)chunk.js]
 *
 * chunkArray 함수를 작성하세요.
 * - 배열(arr)과 덩어리 크기(size)를 입력받아, 해당 크기로 배열을 나눈 2차원 배열을 반환합니다.
 * - 마지막 덩어리는 나머지 원소만 포함됩니다.
 *
 * @param {any[]} arr
 * @param {number} size
 * @returns {any[][]}
 */

function chunkArray(arr, size) {
  // 2차원 배열로... 그니까 arr이 있고 size가 주어지면 size만큼 자른다는 거지..?
  // 페이지네이션이랑 비슷한거 아닌지..
  // 그럴려면 arr size로 자르고, 다음 arr[size]를 arr[size+size]로 자르고.. 반복하다가
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    let row = Math.floor(i / size);
    if (!newarr[row]) {
      //undefinded.push를 막음
      newarr[row] = [];
    }
    newarr[row].push(arr[i]);
  }
  return newarr;
}

// export 를 수정하지 마세요.
export { chunkArray };
