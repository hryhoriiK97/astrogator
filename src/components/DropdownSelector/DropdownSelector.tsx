import React, { FC, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { DropdownSelectorProps } from "./DropdownSelector.props";
import { AstrogatorColor } from "../../theming/theme";
import { styles } from "./DropdownSelector.styled";

const DropdownSelector: FC<DropdownSelectorProps> = ({
  data,
  placeholderText,
  onItemSelection,
}) => {
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <Dropdown
      style={[
        styles.dropdown,
        isFocus && { borderColor: AstrogatorColor.VenetianNights },
      ]}
      placeholderStyle={styles.textStyle}
      selectedTextStyle={styles.textStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      containerStyle={styles.dropdownContainer}
      data={data}
      search
      maxHeight={300}
      labelField={"label"}
      valueField={"value"}
      placeholder={!isFocus ? placeholderText : "..."}
      searchPlaceholder={"Search..."}
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        onItemSelection(item.value);
        setValue(item.value);
        setIsFocus(false);
      }}
    />
  );
};

export default DropdownSelector;
