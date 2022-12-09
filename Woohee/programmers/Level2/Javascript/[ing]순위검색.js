// 순위 검색

// 지원자가 지원서에 입력한 4가지의 정보와 획득한 코딩테스트 점수를 하나의 문자열로 구성한 값의 배열 info,
// 개발팀이 궁금해하는 문의조건이 문자열 형태로 담긴 배열 query가 매개변수로 주어질 때,
// 각 문의조건에 해당하는 사람들의 숫자를 순서대로 배열에 담아 return 하도록 solution 함수를 완성해 주세요.

// TODO: 효율성 향상

function solution(info, query) {
  const result = [];

  for (let i = 0; i < query.length; i++) {
    let answer = 0;
    let arrayQuery = query[i].split(" and ");
    const tmp = arrayQuery.pop().split(" ");
    arrayQuery = arrayQuery.concat(tmp);
    console.log(arrayQuery);
    for (let j = 0; j < info.length; j++) {
      if (!info[j].includes(arrayQuery[0]) && arrayQuery[0] !== "-") continue;
      if (!info[j].includes(arrayQuery[1]) && arrayQuery[1] !== "-") continue;
      if (!info[j].includes(arrayQuery[2]) && arrayQuery[2] !== "-") continue;
      if (!info[j].includes(arrayQuery[3]) && arrayQuery[3] !== "-") continue;
      if (
        !(+info[j].match(/\d+/g)[0] >= +arrayQuery[4]) &&
        arrayQuery[4] !== "-"
      )
        continue;
      else answer++;
    }

    result.push(answer);
    answer = 0;
  }

  return result;
}
