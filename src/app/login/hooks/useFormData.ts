"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const useFormData = () => {
  const router = useRouter();

  const [joinType, setJoinType] = useState<"일반" | "강사">("일반");

  const handleJoinTypeChange = (type: "일반" | "강사") => {
    setJoinType(type);
  };

  const handleRegisterClick = () => {
    router.push("/register");
  };

  return {
    joinType,
    handleJoinTypeChange,
    handleRegisterClick,
  };
};

export default useFormData;
