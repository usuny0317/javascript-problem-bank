/**
 * [(lv.3)게시판-페이징.js]
 *
 * getPage(pageNumber, perPage)를 사용해,
 * - pageNumber가 1부터 시작될 때, 해당 페이지의 게시글 배열을 반환하세요.
 * - 범위를 벗어나면 빈 배열을 반환하세요.
 * - posts는 외부에서 주어진 데이터이며, slice 등을 이용해 구현하세요.
 *
 * @param {number} pageNumber
 * @param {number} perPage
 * @returns {object[]}
 */

const posts = [
  { id: 1, title: "Hello" },
  { id: 2, title: "World" },
  { id: 3, title: "JavaScript" },
  { id: 4, title: "Paging" },
  { id: 5, title: "Example" },
];
//perpage: 한 페이지당 나오는 수
//pagenumber: 페이지
//그러니까 perpage가 2라면 한 페이지당 2개씩 나타나서 12/ 34/ 5가 된다는 것임
// perpage가 3이라면 한 페이지당 3개씩 해서 123/ 45 된다는 것!

function getPage(pageNumber, perPage) {
  if (perPage < 1 || pageNumber < 1) {
    return [];
  } else if (pageNumber > Math.ceil(posts.length / perPage)) {
    //올림함!!
    return [];
  }
  const start = (pageNumber - 1) * perPage;
  const end = start + perPage;
  if (end > posts.length) {
    return posts.slice(start, posts.length);
  }
  return posts.slice(start, end);
}

// export 를 수정하지 마세요.
export { getPage, posts };
