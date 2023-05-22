interface DropdownItem {
  value: string;
  label: string;
}

export interface DropdownSelectorProps {
  currentValue: string | null;
  data: DropdownItem[];
  placeholderText: string;
  onItemSelection: (item: string) => void;
}
