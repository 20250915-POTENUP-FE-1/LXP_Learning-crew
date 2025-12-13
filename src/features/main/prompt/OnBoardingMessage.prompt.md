# 컴포넌트 설명

- NextJS 기반의 웹 애플리케이션에서 사용자를 위한 온보딩 메시지를 표시하는 컴포넌트입니다.
- `OnBoardingMessage` 컴포넌트는 신규 사용자에게 환영 메시지와 간단한 안내를 제공합니다.
- `TailwindCSS`를 사용하여 스타일링을 적용하였으며, 반응형 디자인을 지원합니다.
- 컴포넌트의 `.tsx` 파일은 `src/features/main/ui/OnBoardingMessage.tsx`에 위치해 있습니다.
- type의 정의는 `src/features/main/model/OnBoardingMessage.type.ts`에 위치해 있습니다.

# Props

| Prop    | Type       | Description               | Required | Default Value |
| ------- | ---------- | ------------------------- | -------- | ------------- | ------------- |
| message | string     | 표시할 온보딩 메시지 내용 | Yes      |               | "환영합니다!" |
| onClick | () => void | 메시지 클릭 콜백 함수     | No       | () => {}      |

# 예제

```tsx
import OnBoardingMessage from '@/features/main/ui/OnBoardingMessage';

const Welcome = () => {
  const handleClick = () => {
    alert('온보딩 메시지를 클릭했습니다!');
  };

  return (
    <OnBoardingMessage
      message="Leanig Crew에 오신 것을 환영합니다! 시작하려면 여기를 클릭하세요."
      onClick={handleClick}
    />
  );
};
```
