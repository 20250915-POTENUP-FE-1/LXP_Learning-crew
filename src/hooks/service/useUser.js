// src/hooks/service/useUser.js (수정)

import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'; 
import getFetchUser from '../../apis/users/getFetchUser'; 
import { auth } from '../../constants/firebase'; 

const useUser = () => {
  const [userData, setUserData] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsLoading(true); 

      if (user) {
        // 1. Auth에서 가져온 기본 정보 (UID, Email)
        const baseAuthInfo = { uid: user.uid, email: user.email }; 

        try {
          const snapshot = await getFetchUser(user.uid); 
          
          if (snapshot.exists()) {
            const dbData = snapshot.data();
            
            // 2. 💥 해결책: DB 데이터가 최우선이고, name 필드를 displayName으로 명시적 설정
            setUserData({ 
              ...dbData, // Firestore의 모든 데이터 (role, displayName 등)
              ...baseAuthInfo, // Auth 정보 (uid, email)
              name: dbData.displayName || '', // 💡 name 필드를 displayName으로 설정
            });
            
          } else {
            // Firestore에 문서가 없는 경우: name 필드를 이메일로 대체
            setUserData({ 
                ...baseAuthInfo, 
                name: '' // 💡 name 필드를 이메일로 대체
            }); 
          }
        } catch (err) {
          console.error("사용자 데이터 로드 오류: Firestore 문제일 수 있음", err);
          // 3. 실패 시에도 최소 Auth 정보를 유지 (name은 이메일로 대체)
          setUserData({ ...baseAuthInfo, name: '' });
        }
      } else {
        // 로그아웃 상태
        setUserData(null);
      }
      
      setIsLoading(false); 
    });

    return () => unsubscribe(); 
  }, []);

  return { userData, isLoading };
};

export default useUser;