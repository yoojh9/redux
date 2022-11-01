# Vanilla To Do

### 1) 초기 코드

-   https://github.com/yoojh9/redux/commit/ca67e512479267020ec2e2769097d3dba70384f8

<br><br>

### 2) Redux 적용 코드

-   https://github.com/yoojh9/redux/commit/56ffcc70f192b8aa11ee992d027a7aa11498966c

<br><br>

### 3) State Mutation

-   state는 single source of truth (모든 데이터 요소를 한 곳에서만 제어하는 것)이며 read-only이다.
-   state를 변경하는 유일한 방법은 action을 보내는 방법 뿐이다.
-   절대 state를 mutate하지 말아야 한다. (기존 state를 mutation 하는 대신에 새로운 state 객체를 리턴해야 한다)

-   mutation?

```javascript
const friends = ["jeonghyun"];
friends.push("yong");
```

<br><br>

### 4) Delete To Do

-   splice()는 Array 자체 값을 변경하므로 splice 대신 새로운 Array를 리턴하는 filter()를 사용한다.
-   https://github.com/yoojh9/redux/commit/baad571219b05f0a984fb929089dc53ebbe998eb
