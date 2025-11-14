import clsx from "clsx";
import Icon from "../../../../components/Icon/Icon";

const OnboardingMessage = ({ name, onClick }) => {
  return (
    <button
      className={clsx(
        "flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#F8F8F8] font-semibold",
        "px-2 py-3 text-xs",
        "sm:px-2 sm:py-3 sm:text-sm",
        "md:px-4 md:py-3 md:text-lg",
        "lg:px-6 lg:py-4 lg:text-xl",
      )}
      onClick={onClick}
    >
      <p className="whitespace-nowrap">
        안녕하세요 &nbsp;<span className="text-[#0066FF]">🥳{name}</span>님
        새로운강의를 등록해보세요!
      </p>
      <Icon name="RIGHT_ARROW" size={24} />
    </button>
  );
};

export default OnboardingMessage;
