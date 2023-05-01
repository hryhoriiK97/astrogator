interface DropdownItem {
  value: string;
  label: string;
}

export interface DropdownSelectorProps {
  data: DropdownItem[];
  placeholderText: string;
  onItemSelection: (item: string) => void;
}
