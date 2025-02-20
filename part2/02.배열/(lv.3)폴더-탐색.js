/**
 * [(lv.3)폴더-탐색.js]
 *
 * 1) 아래와 같은 형태의 폴더 구조를 나타내는 객체가 있다고 가정합니다.
 *    const folder = {
 *       name: "root",
 *       subFolders: [
 *         { name: "sub1", subFolders: [] },
 *         { name: "sub2", subFolders: [ { name: "sub2_1", subFolders: [] } ] }
 *       ]
 *    };
 * 2) getAllFolderNames 라는 함수를 작성하여, 모든 폴더의 name을 배열로 반환하세요.
 *    예: ["root", "sub1", "sub2", "sub2_1"]
 * 3) 재귀함수를 활용하세요.
 *
 * @param {object} folder
 * @returns {string[]}
 */

// TODO: getAllFolderNames 함수를 작성하세요.
function getAllFolderNames(folder) {
  let result = [];
  //재귀적으로 돌면서 키값이 name인 것의 values를 뽑아오면 되겠는데
  //깊은 복사랑 비슷할 것 같은데 어떻게 하더라..
  //길이를 재, 길이 만큼 name을 먼저 저장하고, 길이만큼 돌면서 subFolder를 봐 얘도 길이를 봐, 없으면 끝! 있으면 앞에 반복!
  function insideFolder(folder) {
    result.push(folder.name);
    for (let sub of folder.subFolders) {
      insideFolder(sub);
    }
  }

  insideFolder(folder);
  return result;
}

// export 를 수정하지 마세요.
export { getAllFolderNames };
