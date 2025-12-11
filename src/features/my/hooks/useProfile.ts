import { useState, useEffect } from 'react';
import type { UserProfile } from '../model/my.types';

export const useProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Firebase에서 프로필 데이터 fetch
    // TODO: Firebase 구현
  }, []);

  return { profile, loading, error };
};