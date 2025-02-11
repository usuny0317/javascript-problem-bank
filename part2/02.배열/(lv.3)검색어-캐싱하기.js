/**
 * [(lv.3)검색어-캐싱하기.js]
 *
 * updateTopKeywords(keywords):
 *   1) 여러 검색어가 들어올 때, 많이 검색된 순으로 상위 10개까지만 저장하세요.
 *   2) 중복 키워드는 1회만 노출되도록 하세요.
 *   3) 기존 캐시를 모두 지우고, 새로운 결과만 캐시에 저장하세요.
 * getTopKeywords():
 *   1) 현재 저장된 상위 10개 키워드를 반환하세요.
 *
 * keywords example : ["banana", "apple", "apple", "orange", "banana", "banana"]
 * @param {string[]} keywords - 검색된 키워드 배열
 * @returns {void}
 */

let topKeywordsCache = [];

function updateTopKeywords(keywords) {
  // TODO
  // count 객체 생성
  const count = keywords.reduce((acc, keyword) => {
    acc[keyword] = (acc[keyword] || 0) + 1;
    return acc;
  }, {});
  // count 를 값기준으로 정렬
  // 1. 객체라서 바로 sort 못함 배열 만들어야 함.
  const arrKeywords = Object.entries(count);
  // 2. 값 기준 내림차순, 값이니까 첫번째 인자.
  const sortKeywords = arrKeywords.sort((a, b) => b[1] - a[1]);
  // 3. 키워드 들만 주기 위해서 다시 배열로
  const arrsort = sortKeywords.map((key) => key[0]);

  //상위 10개 구하기
  // 10개보다 작을 때 전부 가져오기기
  if (arrsort.length < 10) {
    topKeywordsCache = arrsort.slice(0, arrsort.length);
  } else {
    //10개보다 크면 잘라서 가져오기기
    topKeywordsCache = arrsort.slice(0, 10);
  }
}

function getTopKeywords() {
  // TODO
  return topKeywordsCache;
}

// export를 수정하지 마세요.
export { topKeywordsCache, updateTopKeywords, getTopKeywords };
