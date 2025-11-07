## Leaning Crew 프로젝트 규칙

### 1. 폴더 구조

- `src/components`: 재사용 가능한 컴포넌트
- `src/pages`: 페이지 컴포넌트
- `src/hooks`: 커스텀 훅
- `src/styles`: 전역 스타일 및 CSS 파일
- `src/assets`: 이미지 및 기타 정적 자산
- `src/utils`: 유틸리티 함수 및 헬퍼

---

### 2. 코드 스타일

#### React 컴포넌트

- `jsx` 파일은 View의 역할만 합니다.
  - 로직은 `Custom Hook`으로 분리합니다.
  - Custom Hook의 각 폴더에서 `_index.js`이 export를 관리하여 한 파일로 여러 훅을 불러올 수 있도록 합니다.
    - [예제](../../.exmaple/hooks/_index.js)
- 스타일은 `TailwindCSS`를 사용합니다.
  - 유지보수를 위해 tailwind-variants를 활용합니다.
- `pages` 폴더의 각 도매인에서 자식 도매인이 상위 도매인의 요소를 사용할 수 없습니다.
  - 예: `/pages/login`는 `/pages`의 요소를 사용할 수 없습니다.
- 컴포넌트 파일명은 `PascalCase`를 사용합니다.
  - 예: `UserProfile.jsx`
- 모든 컴포넌트는 `화살표 함수`로 작성합니다.

#### 함수

- 모든 함수는 `화살표 함수`로 작성합니다.

---

### 3. 커밋 메시지 규칙

- 커밋 메시지는 다음 형식을 따릅니다: `<타입>: <설명>`
  - 타입: feat, fix, docs, style, refactor, test, chore 등
  - 설명: 변경 사항에 대한 간단한 설명

- 브랜치 이름은 다음 형식을 따릅니다: `<타입>/<짧은-설명>`
  - 예: `feat/user-authentication`

- 브랜치 병합 시에는 반드시 PR(Pull Request)을 통해 코드 리뷰를 거칩니다.
  - PR 내용은 `변경 사항에 대한 설명`과 관련 이슈 링크를 포함해야 합니다.

---

### 3. 기술 스택

1. React@19

2. TailwindCSS
   빠른 UI 개발을 위해 TailwindCSS를 사용합니다.

3. Prettier
   TailwindCSS className 포맷팅을 통해 일관성 있는 코드 작성을 돕습니다.

4. Firebase
   백엔드 없이 빠른 개발을 위해 Firebase를 사용합니다.
