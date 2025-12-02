import React, { useState, useEffect } from "react";
import Input from "../../../components/Input";
import useUser from "../../../hooks/service/useUser";

import { getAuth } from "firebase/auth";
// import deleteUserAccount from "../../../apis/users/deleteFetchUser";

const auth = getAuth();

const Profile = () => {
  const { userData, isLoading } = useUser();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    console.log(userData);
    if (userData) {
      setProfile({
        // 💡 Firestore에 displayName이 존재하면 사용, 없으면 name 필드 (fallback) 사용
        name: userData.displayName || "",
        email: userData.email || "",
        role: userData.role || "일반",
        address: userData.address || "없음",
        code: userData.code || null,
      });
    }
  }, [userData]);

  // ... (회원 탈퇴 및 로딩 처리 로직 생략) ...
  const handleWithdrawal = async () => {
    /* ... */
  };

  if (isLoading) {
    /* ... */
  }
  if (!isLoading && !userData) {
    /* ... */
  }

  return (
    <div>
      <h1 className="mb-2 text-xl font-semibold text-gray-900">프로필</h1>
      <p className="mb-8 text-gray-500">나의 계정 정보를 확인 할 수 있어요</p>

      <div className="grid grid-cols-2 gap-6">
        <Input
          title="이름"
          id="name"
          value={profile.name}
          // onChange={handleChange}
        />

        <Input
          title="이메일 주소"
          id="email"
          value={profile.email}
          disabled={true}
        />

        <Input title="역할" id="role" value={profile.role} disabled={true} />

        <Input
          title="주소"
          id="address"
          value={profile.address || ""}
          // disabled={true}
        />

        <div className="col-span-1">
          <Input
            title="강사코드"
            id="code"
            value={profile.code || "미발급"}
            // disabled={true}
          />
        </div>
      </div>

      <button
        onClick={handleWithdrawal}
        className="mt-8 rounded-lg border border-red-500 px-6 py-3 font-semibold text-red-500 transition duration-150 hover:bg-red-50"
      >
        회원 탈퇴
      </button>
    </div>
  );
};

export default Profile;
