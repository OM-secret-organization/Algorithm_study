# 재귀 (Recurssion)

> 재귀란, 함수 자체를 반복함으로서 문제를 해결하는 기법을 의미한다.

재귀 함수는 다음과 같은 항목을 가지고 있어야 한다.

1. `base case` : 답을 리턴하기위해, 재귀를 끝내도록 하는 일련의 조건. 마지막 재귀함수를 호출하는 경우이기도 해서, `bottom case`라고도 부른다.
2. `recurrence relation` : 문제의 답과 답을 내기위한 서브루틴의 답과의 관계

결국 재귀 기법으로 문제를 해결한다는 것은 `recurrence relation` 를 가진 함수를 반복해서 `base case`까지 도달하는 함수를 짠다는 것이다.

### example. 파스칼의 삼각형

![파스칼의 삼각형](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

### recurrsion relation

파스칼의 삼각형안의 노드의 수는 ` 윗 줄의 현재 열 + 윗 줄의 이전 열`이다.

이 원리를  i를 row, j를 column 이라고 했을때, f(i, j)로 표현하면

```
f(i, j) = f(i - 1, j) + f(i - 1, j - 1)
```

### base case

위의 예제 이미지를 보면 알겠지만, 어떤 줄에 위치하더라도 맨 처음 열과 맨 끝단의 열의 값은 1이다.

```
f(i, j)  where j = 1 or j = i
```

### demo

위의 원리를 통해, 파스칼의 삼각형의 특정 위치의 노드의 값이 무엇인지 구해볼 수 있다.

```
f(4, 2) = f(3, 2) + f(3, 1)
				= (f(2, 2) + f(2, 1)) + 1
				= 1 + 1 + 1
				= 3
```

### practice in java

위에서 다룬 내용을 활용해서, 특정 row에 위치한 node 값들을 list로 리턴하는 함수를 구현해보자.

> JAVA

```java
class Solution {
  private int getNum(int row, int col) {
    if (row == 0 || col == 0 || row == col)
      return 1;
    
    return getRow(row - 1, col) + getRow(row - 1, col - 1);
  }
  
  public List<Integer> getRow(int rowIndex) {
    List<Integer> ans = new ArrayList<>();

    for (int i = 0; i <= rowIndex; i++) {
      ans.add(getNum(rowIndex, i));
    }

    return ans;
  }
}