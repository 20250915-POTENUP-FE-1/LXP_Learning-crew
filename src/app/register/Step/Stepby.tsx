type StepperProps = {
  activeStep?: 1 | 2;
  width?: number;
  height?: number;
  activeColor?: string;
  inactiveColor?: string;
  lineColor?: string;
  className?: string;
  ariaLabel?: string;
};

export default function StepperInline({
  activeStep = 1,
  width = 32,
  height = 32,
  activeColor = "#2563eb",
  inactiveColor = "#cbd5e1",
  lineColor = "#cbd5e1",
  className = "",
  ariaLabel = "2-step progress",
}: StepperProps) {
  const circle = (label: string, active: boolean) => (
    <div
      className="flex items-center justify-center rounded-full border text-sm font-medium"
      style={{
        width,
        height,
        backgroundColor: active ? activeColor : inactiveColor,
        borderColor: active ? activeColor : lineColor,
        color: active ? "#ffffff" : "#0f172a",
      }}
      aria-current={active ? "step" : undefined}
    >
      {label}
    </div>
  );

  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      aria-label={ariaLabel}
      role="group"
    >
      {circle("1", true)}
      <div
        className="rounded-full"
        style={{
          width: width * 2,
          height: Math.max(4, Math.floor(height / 8)),
          backgroundColor: activeStep === 2 ? activeColor : lineColor,
        }}
      />
      {circle("2", activeStep === 2)}
    </div>
  );
}
