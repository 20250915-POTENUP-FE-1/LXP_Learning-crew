/**
 * OnBoardingMessage 컴포넌트의 Props 인터페이스
 */
export interface OnBoardingMessageProps {
  /**
   * 표시할 온보딩 메시지 내용
   * {name} 변수를 포함할 수 있으며, 실제 사용자 이름으로 대체됩니다
   * @default "환영합니다!"
   */
  message?: string;

  /**
   * 메시지 클릭 시 실행될 콜백 함수
   * @default () => {}
   */
  onClick?: () => void;
}
