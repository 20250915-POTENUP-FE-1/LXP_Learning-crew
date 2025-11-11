const ModalCourseStats = () => {
  const cards = [
    { value: "2,457", label: "수강중인 인원" },
    { value: "2시간", label: "강의 시간" },
    { value: "4.5", label: "평점" },
    { value: "초급", label: "난이도" },
  ];
  return (
    <div className="mt-4 grid grid-cols-4 gap-6 text-gray-600">
      {cards.map(({ value, label }) => (
        <div
          key={label}
          className="flex h-[65px] w-[182px] flex-col justify-center rounded-md bg-gray-100 pl-4 text-[20px] font-bold"
        >
          {value}
          <span className="text-[10px] font-normal">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default ModalCourseStats;
