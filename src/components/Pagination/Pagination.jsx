import Button from "../../components/Button/Button";

const Pagination = () => {
  const pageNumbers = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center pt-6">
      <Button
        variant="delete"
        className="h-[18px] w-9 text-[13px] text-black hover:text-black focus:text-black active:text-black"
      >
        ◁
      </Button>

      {pageNumbers.map((num) => (
        <Button
          key={num}
          variant="delete"
          className="h-[18px] w-9 text-[13px] text-gray-400 hover:text-black focus:text-black active:text-black"
        >
          {num}
        </Button>
      ))}

      <Button
        variant="delete"
        className="h-[18px] w-9 text-[13px] text-gray-400 hover:text-black focus:text-black active:text-black"
      >
        ▷
      </Button>
    </div>
  );
};

export default Pagination;
