"use client";

import { useProfile } from "../../hooks";
import { profileStyles } from "./Profile.style";
import type { UserProfile } from "../../model/my.types";

interface ProfileProps {
  data?: UserProfile;
}

const Profile = ({ data }: ProfileProps) => {
  const { profile, loading } = useProfile();
  const displayData = data || profile;

  if (loading) return <div>로딩 중...</div>;
  if (!displayData) return <div>프로필 정보를 찾을 수 없습니다</div>;

  return (
    <div className={profileStyles.container()}>
      <img src={displayData.profileImage} alt="프로필" />
      <h2>{displayData.name}</h2>
      <p>{displayData.email}</p>
    </div>
  );
};

export default Profile;
