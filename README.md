# Website Clone Coding with React.js

<img src="https://user-images.githubusercontent.com/75922558/115599853-0184fc80-a317-11eb-91ef-0b72b8655f71.png" width="56" height="56">
<br/>
<img src="https://user-images.githubusercontent.com/75922558/112740394-936b4500-8fb7-11eb-82ca-20e66a53ad10.png" width="56" height="56">
<br/>

## 개요

- class101 웹사이트 클론코딩 프로젝트

## 기술 스택

- Front : React.js
- Back : Firebase Authentication, Youtube Data API, Unsplash Image API

## 화면 구현

1. 메인페이지 (1P)

- 슬라이드 배너 구현 : Swiper v6.8.1 사용
- 클래스 리스트 화면 구현 :

  1. Unsplash Image API 사용
     ![unsplash](https://user-images.githubusercontent.com/75922558/129434826-a8f9b3fe-3f2a-4d32-b5d4-9327ea973011.PNG)

     - Promise 객체 기반 HTTP 비동기 통신 라이브러리인 `Axios`를 사용하여 `get 메소드`로 Unsplash api를 요청해서 api에 들어있는 이미지 url을 받아 화면에 나타내었습니다.

     - 이때, 이미지 데이터 상태관리를 `useState Hook`을 사용하여 하였습니다.

  2. Youtube Data API 사용
     ![playlist](https://user-images.githubusercontent.com/75922558/129450201-ec3b66e7-c759-4fcb-b116-c00adffadd0a.PNG)

     ![dog](https://user-images.githubusercontent.com/75922558/129450212-18b0e130-d58b-4d88-a7aa-cbf35241961d.PNG)

     - `Axios`를 사용하여 `get 메소드`로 Youtube data api를 요청하였습니다.
     - `state`값을 `배열`로 만들어 배열안에 `객체`를 담았습니다.
     - `map` 함수를 사용하여 배열 안의 각각의 객체에 접근하여 유튜브 영상의 `썸네일, 영상제목, 유튜버이름`을 가져왔습니다.

1. 상세페이지 (2P)

## 기능 구현

1. 페이지 이동 : react-router-dom 의 `BrowserRouter` 와 `NavLink` 사용
2. 회원가입&로그인 : `Firebase Authentication` 사용

## 작업 기여도

- 100%
