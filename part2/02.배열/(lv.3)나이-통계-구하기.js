/**
 * [(lv.3)나이-통계-구하기.js]
 *
 * 1) users 배열은 [{ age: 10 }, { age: 30 }, ...] 형태를 가집니다.
 * 2) calculateStatistics(users)는 평균 나이(averageAge)와 최대 나이(maxAge)를 구해서
 *    { averageAge, maxAge } 객체 형태로 반환해야 합니다.
 * 3) reduce 메서드를 사용하세요.
 *
 * @param {{age:number}[]} users
 * @returns {{ averageAge: number, maxAge: number }}
 */

function calculateStatistics(users) {
  //0일 때 정해진 값 주기
  if (users.length === 0) return { averageAge: 0, maxAge: 0 };
  //객체 배열이니까 배열 메소드 쓸 수 있음
  //Max부터 sort 한 다음에 젤 앞에 꺼 가져오기
  const maxAge = users.sort((a, b) => b.age - a.age)[0].age;
  //평균 foreach가 나을까? age를 누적해야 하니까 reduce를 사용하자!!
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  const averageAge = totalAge / users.length;

  return { averageAge, maxAge };
}

// export 를 수정하지 마세요.
export { calculateStatistics };
