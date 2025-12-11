# 컴포넌트 설명

- NextJS에서 사용하는 드롭다운 메뉴 컴포넌트
- `ComboBox` 컴포넌트는 사용자가 미리 정의된 옵션 목록에서 선택할 수 있도록 하는 드롭다운 메뉴입니다.
- 이 컴포넌트가 열리면 `Accordion` 애니메이션을 사용하며 옵션을 표시합니다.

# Props

| Prop         | Type                                                  | Description                         | Required | Default Value |
| ------------ | ----------------------------------------------------- | ----------------------------------- | -------- | ------------- |
| options      | Array<{ value: string; label: string; }>              | 선택 가능한 옵션 목록               | Yes      | -             |
| defaultValue | string                                                | 초기 선택된 옵션의 값               | No       | ''            |
| onChange     | (selected: { value: string; label: string; }) => void | 옵션이 변경될 때 호출되는 콜백 함수 | No       | () => {}      |
| disabled     | boolean                                               | 컴포넌트를 비활성화할지 여부        | No       | false         |

---

# 예제

```tsx
import { ComboBox } from '@/shared/components/ComboBox';
const options = [
	{ value: 'apple', label: '사과' },
	{ value: 'banana', label: '바나나' },
	{ value: 'cherry', label: '체리' },
];

const FruitSelector = () => {
	return (
		<ComboBox
			options={options}
			defaultValue="banana"
			onChange={(selected) => alert(`선택된 과일: ${selected.label}`)}
		/>
	);
};
```
