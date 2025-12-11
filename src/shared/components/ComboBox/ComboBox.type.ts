export interface ComboBoxOption {
  value: string;
  label: string;
}

export interface ComboBoxProps {
  options: ComboBoxOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  width?: number | string;
  onChange?: (option: ComboBoxOption) => void;
  className?: string;
  listClassName?: string;
  optionClassName?: string;
}
