import { createContext, useState, useCallback } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CurriculumContext = createContext();

export const CurriculumProvider = ({ children }) => {
  const [curriculums, setCurriculums] = useState([
    [{ title: "", details: [{ title: "", duration: "00:00" }] }],
  ]); // 2차원 배열

  // 커리큘럼(행) 추가
  const addCurriculum = useCallback(() => {
    setCurriculums((prev) => [
      ...prev,
      [{ title: "", details: [{ title: "", duration: "00:00" }] }],
    ]);
  }, []);

  // 커리큘럼(행) 삭제
  const deleteCurriculum = useCallback((rowIdx) => {
    setCurriculums((prev) => prev.filter((_, idx) => idx !== rowIdx));
  }, []);

  // 커리큘럼(행) 수정
  const updateCurriculum = useCallback((rowIdx, updatedRow) => {
    setCurriculums((prev) =>
      prev.map((row, idx) => (idx === rowIdx ? updatedRow : row)),
    );
  }, []);

  // 상세 커리큘럼(열) 추가
  const addDetailCurriculum = useCallback((rowIdx) => {
    setCurriculums((prev) =>
      prev.map((row, idx) =>
        idx === rowIdx ? [...row, { title: "", duration: "00:00" }] : row,
      ),
    );
  }, []);

  // 상세 커리큘럼(열) 삭제
  const deleteDetailCurriculum = useCallback((rowIdx, colIdx) => {
    setCurriculums((prev) =>
      prev.map((row, idx) =>
        idx === rowIdx ? row.filter((_, cIdx) => cIdx !== colIdx) : row,
      ),
    );
  }, []);

  // 상세 커리큘럼(열) 수정
  const updateDetailCurriculum = useCallback(
    (rowIdx, colIdx, updatedDetail) => {
      setCurriculums((prev) =>
        prev.map((row, idx) =>
          idx === rowIdx
            ? row.map((detail, dIdx) =>
                dIdx === colIdx ? { ...detail, ...updatedDetail } : detail,
              )
            : row,
        ),
      );
    },
    [],
  );

  const value = {
    curriculums,
    setCurriculums,
    addCurriculum,
    deleteCurriculum,
    updateCurriculum,
    addDetailCurriculum,
    deleteDetailCurriculum,
    updateDetailCurriculum,
  };

  return (
    <CurriculumContext.Provider value={value}>
      {children}
    </CurriculumContext.Provider>
  );
};
