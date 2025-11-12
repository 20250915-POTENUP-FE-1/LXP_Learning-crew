import React from "react";
import Input from "../../../components/Input";

// const fetchUserData = async () => {

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         name: "홍길동",
//         email: "",

// }

const Profile = () => {
  return (
    <div>
      <h1 className="mb-2 text-xl font-semibold text-gray-900">프로필</h1>
      <p className="mb-8 text-gray-500">나의 계정 정보를 확인 할 수 있어요</p>

      <div className="grid grid-cols-2 gap-6">
        <Input
          title="사용자 이름"
          id="name"
          value={"김석환"}
          // onChange={handleChange}
        />

        <Input
          title="이메일 주소"
          id="email"
          value={"test02@example.com"}
          disabled={true}
        />

        <Input title="역할" id="role" value={"강사"} disabled={true} />

        <Input
          title="주소"
          id="address"
          value={"충청남도 논산군 연산면 대조리 50-4"}
          // disabled={true}
        />

        <div className="col-span-1">
          <Input
            title="나의 강사 코드"
            id="code"
            value={844744}
            // disabled={true}
          />
        </div>
      </div>

      <button className="mt-8 rounded-lg border border-red-500 px-6 py-3 font-semibold text-red-500 transition duration-150 hover:bg-red-50">
        회원 탈퇴
      </button>
    </div>
  );
};

export default Profile;
