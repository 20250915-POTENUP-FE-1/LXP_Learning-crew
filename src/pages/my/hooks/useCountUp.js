// src/hooks/useCountUp.js (새로 생성)
import { useEffect, useState } from 'react';

/**
 * 목표 값까지 숫자를 카운트하는 Custom Hook
 * @param {number} endValue - 최종 목표 숫자 (예: 2454)
 * @param {number} duration - 애니메이션 지속 시간 (밀리초, 예: 2000ms)
 * @returns {number} 현재 카운트 값
 */
const useCountUp = (endValue, duration = 2000) => {
  const [count, setCount] = useState(0);
  const startTime = Date.now(); // Hook 호출 시간 기록

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      const now = Date.now();
      const timeElapsed = now - startTime; // 시작 후 경과 시간
      
      // 1. 진행률 (0부터 1 사이) 계산
      const progress = Math.min(1, timeElapsed / duration); 
      
      // 2. 진행률에 비례하여 현재 값 계산 (시작 값 0부터)
      const currentValue = Math.floor(progress * endValue); 

      setCount(currentValue);

      // 3. 목표에 도달하지 않았으면 다음 프레임 요청
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // 애니메이션 시작
    animationFrameId = requestAnimationFrame(animate);

    // 컴포넌트 정리(unmount) 시 애니메이션 중지
    return () => cancelAnimationFrame(animationFrameId); 
  }, [endValue, duration]); // 목표 값이나 지속 시간이 바뀌면 다시 실행

  // 💥 소수점 처리를 위해 목표 값에 도달하면 목표 값 자체를 반환합니다 (정확성 보장)
  return count;
};

export default useCountUp;