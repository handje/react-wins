<div align=center>
  <h1>🏆 Wins 🏆</h1>
  <img width="1718" alt="image" src="https://github.com/user-attachments/assets/ca1158d7-2a22-4aa7-8ed3-bfe26b1c3b39">
</div>

<br/>

## 목차

1. [프로젝트 소개](#-프로젝트-소개)
2. [개발 기간 및 버전 정보](#%EF%B8%8F-개발-기간-및-버전-정보)
3. [주요 기능](#-주요-기능)
4. [설치 및 실행방법](#%EF%B8%8F-설치-및-실행방법)
5. [바로 가기](#%EF%B8%8F-바로-가기)
6. [기술 스택](#%EF%B8%8F-기술-스택)
7. [디렉토리 구조](#-디렉토리-구조)
8. [컨벤션](#-컨벤션)
9. [FAQ](#-faq)

<br/>

## 🚀 프로젝트 소개

> ### React-wins는 기존 Wiz 정보제공 페이지를 개선한 프로젝트입니다.<br/>사용자에게 원활한 서비스 제공을 위해 UI/UX를 개선하고, 새로운 기능을 추가하였습니다.
>
> ### 새로워진 Wiz 정보제공 페이지를 확인해보세요!

<br/>

## 🖥️ 개발 기간 및 버전 정보

> ### V1.0 (팀): 2024.09.02 ~ 2024.09.27
> - 기본적인 페이지 구현
> - kakao map API 추가
> - 선수별 상세 페이지 차트 추가
> - (일부 페이지) zustand 적용
> - (일부 페이지) tanstack-query 적용
> ### V1.1 (개인): 2024.10.01 ~
> - 로딩 스피너 및 스켈레톤 적용
> - 에러 화면 구현
> - 코드 리팩토링

<br/>

## ✨ 주요 기능
(api 제공이 종료 될 경우 배포 화면은 보이지 않을 수 있습니다. 아래 링크의 영상을 참고해주세요)
<br/>
[구현영상](https://drive.google.com/file/d/16ElrU0yoOUx7R-Z3XWYXSSlBMHsK5FSy/view?usp=sharing)

### 1. 홈화면
- 하이라이트 소식
- 최근 경기 정보
- 팀 순위
- 하이라이트 영상
- 갤러리
- 이달의 선수
- 스토어 및 주차 관련 링크

### 2. kt wiz
#### 2.1) kt wiz는? 
- 구단 소개
- 구단 연혁(개발중)
#### 2.2) 회원 정책 
- 일반회원 혜택 안내
- 기부프로그램 안내

### 3. wix park
- 수원 wiz park 소개 및 길 안내
- 익산 야구장 길 안내
- Kakao map API를 이용한 지도 제공

### 4. Game
#### 4.1) 경기일정 
- 최신 3경기 정보
- 경기 관련 캘린더 제공
- 방송사 안내
#### 4.2) 박스스코어 
- 경기 기록
- 기록별 테이블 제공
#### 4.3) 순위기록 
- 시즌별 팀 기록
- 시즌별 관중 기록
#### 4.4) 관전포인트 
- 경기 전적
- 라인업 및 선발투수
- 중계채널 및 날씨

### 5. Player
- 코칭스텝, 선수단, 응원단 리스트 제공
- 코칭스텝, 선수단 상세 정보
- 선수별 기록 테이블 제공
  
### 6. Media
- 보도자료 및 뉴스 리스트 , 상세 정보
- 페이지네이션 적용

### 7. 그 외 페이지
- shop, 스폰서 : 외부 페이지로 이동
- 티켓구매 - 입장 및 좌석정보
<br/>

## ⚙️ 설치 및 실행방법

> **프로젝트 설치**
>
> ```
> npm install
> ```

<br/>

> **프로젝트 실행**
>
> ```
> npm run dev
> ```

<br/>

## 🖇️ 바로 가기

- <a href="react-wins-tau.vercel.app/" target="_blank">배포 URL</a>
- <a href="https://www.notion.so/KT-wins-90cc46746df84f51a7afe0a2f2a9b159" target="_blank">팀 노션페이지</a>
- <a href="https://www.figma.com/design/cYvtDnXxX6l9mmYBOi2XkN/Ktwiz?node-id=0-1&node-type=canvas&t=ZIsWWlR0UBO7BNCe-0" target="_blank">화면정의서</a>
- <a href="https://documenter.getpostman.com/view/7741328/2sAXjRUok8#2deb2884-0aa2-46d9-a01d-dd9dda4b161e" target="_blank">API 명세서</a>
- <a href="https://github.com/project-wins/react-ktwiz" target="_blank">organization 레포지토리</a>
- <a href="https://github.com/project-wins/react-wins?tab=readme-ov-file#-%ED%8C%80%EC%9B%90-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EA%B0%9C%EB%B0%9C-%EB%82%B4%EC%9A%A9" target="_blank">팀원 소개 및 개발 내용</a>
<br/>

## 🛠️ 기술 스택

<img width="850" alt="기술스택" src="https://github.com/user-attachments/assets/7e2812aa-771c-434a-ba19-7d26399ec070"><br/>

| Front-end                                                                                                                                            | Cooperation Tool                                                                | Deploy            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------- |
| `TypeScript` `Vite` `React` `Styled-components` `Zustand` `Axios` `Echarts` `Tanstack-table` `Tanstack-query` `Swiper` `React-router` `KaKaomap API` | `Slack` `Discord` `ESLint` `Prettier` `Git` `Github` `Notion` `Figma` `Postman` | `Github` `Vercel` |

<br/>

## 📂 디렉토리 구조

```
react-wins
    ├─ public
    │  └─ favicon.svg
    ├─ src
    │  ├─ api
    │  │  └─ api.ts
    │  ├─ assets
    │  │  ├─ icons
    │  │  └─ images
    │  ├─ components
    │  ├─ data
    │  ├─ hooks
    │  ├─ layouts
    │  ├─ pages
    │  ├─ router
    │  ├─ store
    │  │  ├─ actions
    │  │  └─ types
    │  ├─ styles
    │  ├─ types
    │  ├─ utils
    │  ├─ main.tsx
    │  └─ vite-env.d.ts
    ├─ README.md
    ├─ eslint.config.js
    ├─ index.html
    ├─ package-lock.json
    ├─ package.json
    ├─ tsconfig.app.json
    ├─ tsconfig.json
    ├─ tsconfig.node.json
    └─ vite.config.ts
```

<br/>

## 📌 컨벤션

### 1. Commit

> **기본 구조 : `[type]: 커밋 내용`**
>
> - 각자가 맡은 Task가 구체적으로 정리되어있어야 한다.
> - 개발을 하다 겪은 문제들이 Github Issue로 잘 정리되어있어야 한다.
> - 한 commit당 하나의 기능 구현만 해야한다.
>
> ```
> [type]
>
> feat: 기능 (feature)
> fix: 버그 수정
> docs: 문서 작업 (documentation)
> style: 포맷팅, 세미콜론 누락, 구분지을 타입이 없을 때 등.
> refactor: 리팩토링 코드
> test: 테스트
> chore: 관리(maintain), 패키지 설치, 핵심 내용은 아닌 잡일 등
> design: 스타일링 및 마크업
> ```

### 2. Branch

> **Github-flow 전략을 기반으로 한다.**<br/>[main], [development] 브랜치와 각 기능별 [feature] 보조 브랜치를 운용
>
> - main : 배포 단계에서 사용하는 메인 브랜치
> - development : 개발 단계에서 각 기능을 병합하는 브랜치
> - feature : 기능 단위로 독립적인 개발 환경을 위해 사용하는 브랜치

### 3. Pull Request, Issue

> **Code Review 후 approve 상태로 전환되었을 때, 상위 브랜치로 병합한다.**<br/>**정해진 또는 알맞은 템플릿을 사용하여 양식에 맞게 작성한다.**

### 4. Code, Style, Type

> **Code**
>
> - eslint, prettier 설정을 통해 코드 컨벤션을 정한다.
> - 정해진 규칙에 따라 자동적으로 코드 스타일을 정리하여 일관성을 유지한다.
> - 코드 품질 관리는 eslint, 코드 포맷팅은 prettier에 일임하여 사용한다.
> - 예외 규칙은 팀원과의 논의를 통해 정한다.
> - 협업 시 빠르게 개발하는데에 목적을 둔다.
>
> **함수 정의**
>
> ```
> const Sample = () => {
>  return (
>    <>
>      <h1>Sample Component</h1>
>    </>
>  );
> }
> export default Sample
> ```
>
> **스타일 코드, 타입 정의**
>
> - 코드의 위치는 컴포넌트 선언 상단에 위치한다. (타입 정의 - 스타일 코드 - 컴포넌트 선언 순)
> - 정해진 네이밍 규칙을 따른다.

<br/>

## ❓ FAQ
