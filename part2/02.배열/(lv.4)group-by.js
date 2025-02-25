/**
 * [(lv.4)group-by.js]
 *
 * 객체 배열(arr)과 프로퍼티 이름(key)을 받아,
 * 해당 key의 값에 따라 객체를 묶어 { keyValue: Object[] } 형태로 반환하세요.
 * reduce 메서드를 사용하세요.
 *
 * 예:
 * const data = [
 *   { name: 'Alice', group: 'A' },
 *   { name: 'Bob', group: 'B' },
 *   { name: 'Charlie', group: 'A' }
 * ];
 * groupBy(data, 'group') =>
 * {
 *   A: [
 *     { name: 'Alice', group: 'A' },
 *     { name: 'Charlie', group: 'A' }
 *   ],
 *   B: [
 *     { name: 'Bob', group: 'B' }
 *   ]
 * }
 *
 * @param {Object[]} arr
 * @param {string} key
 * @returns {Object}
 */

// TODO: groupBy 함수를 작성하세요.
function groupBy(arr, key) {
  //reduce함수 사용 필수!!
  //"key"로 받아오는 값의 벨류 값을 기준으로 나눔.
  // 배열을 돌면서 각 요소 (reduce item)에서 나오는 객체의 키 값의 벨류를 키로 두고 배열로 푸시
  // acc 누적될 장소, arr에서 item 한 줄 씩씩 가져옴
  return arr.reduce((acc, item) => {
    let groupKey = item[key]; // 동적으로 key 값 가져오기

    if (!acc[groupKey]) {
      //없으면 새로 만들어 줌
      acc[groupKey] = [];
    }

    acc[groupKey].push(item); // 해당 그룹에 아이템 추가

    return acc; // 누적 객체 반환
  }, {}); // 초기값은 빈 객체
}

// export를 수정하지 마세요.
export { groupBy };
