import { useState } from "react";

// 기본 중단원 구조
const createSubModule = () => ({ title: "", time: "" });

// 기본 대단원 구조 (생성 시 중단원 2개 포함)
const createMainUnit = () => ({
  title: "",
  subModules: [createSubModule(), createSubModule()],
});

export const useCurriculum = () => {
  // 전체 커리큘럼 상태
  const [mainUnits, setMainUnits] = useState([createMainUnit()]);

  // --- 대단원 관련 ---
  const addMainUnit = () => setMainUnits([...mainUnits, createMainUnit()]);

  const deleteMainUnit = (index) =>
    setMainUnits(mainUnits.filter((_, i) => i !== index));

  const updateMainUnit = (index, value) =>
    setMainUnits(
      mainUnits.map((unit, i) =>
        i === index ? { ...unit, title: value } : unit,
      ),
    );

  // --- 중단원 관련 ---
  const addSubModule = (mainIndex) =>
    setMainUnits(
      mainUnits.map((unit, i) =>
        i === mainIndex
          ? { ...unit, subModules: [...unit.subModules, createSubModule()] }
          : unit,
      ),
    );

  const deleteSubModule = (mainIndex, subIndex) =>
    setMainUnits(
      mainUnits.map((unit, i) =>
        i === mainIndex
          ? {
              ...unit,
              subModules: unit.subModules.filter((_, j) => j !== subIndex),
            }
          : unit,
      ),
    );

  const updateSubModule = (mainIndex, subIndex, field, value) =>
    setMainUnits(
      mainUnits.map((unit, i) =>
        i === mainIndex
          ? {
              ...unit,
              subModules: unit.subModules.map((sub, j) =>
                j === subIndex ? { ...sub, [field]: value } : sub,
              ),
            }
          : unit,
      ),
    );

  return {
    mainUnits,
    addMainUnit,
    deleteMainUnit,
    updateMainUnit,
    addSubModule,
    deleteSubModule,
    updateSubModule,
  };
};
