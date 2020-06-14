// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?
// 이를 구하는 함수를 완성하라.
// 단, 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것
// 이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// 예를 들어 8808은 3, 8888은 4로 카운팅 해야 한다.

function getCount8() {
  let count = 0;
  let mergedStr = '';
  for (let i = 1; i <= 10000; i++) {
    mergedStr += i;
  }
  for (let i = 0; i < mergedStr.length; i++) {
    if (mergedStr.charAt(i) === '8') count++;
  }
  return count;
}

console.log(getCount8()); // 4000
