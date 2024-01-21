// import { useDispatch } from 'react-redux';
import { FilterWrap, Label } from './Filter.styled';
import Select from 'react-select';
import { baseTheme } from 'theme';

export const Filter = ({ brands }) => {
  // const dispatch = useDispatch();
  const brandOptions = brands.map(brabd => ({
    value: brabd,
    label: brabd,
  }));

  return (
    <FilterWrap>
      <Label htmlFor="selectBrand">Car brand</Label>
      <Select
        inputId="selectBrand"
        placeholder="Enter the text"
        isClearable={true}
        // onChange={selectedOption => console.log(selectedOption)}
        options={brandOptions}
        styles={{
          control: styles => ({
            ...styles,
            width: '224px',
            border: 'none',
            borderRadius: '14px',
            margin: 0,
            fontSize: '18px',
            backgroundColor: `${baseTheme.colors.darkwhite}`,
            appearance: 'none',
            fontWeight: 500,
            lineHeight: 'calc(20 / 18)',
          }),
          input: styles => ({
            ...styles,
            margin: 0,
            paddingTop: '14px',
            paddingBottom: '14px',
            paddingLeft: '18px',
            paddingRight: '18px',
          }),
          valueContainer: styles => ({
            ...styles,
            margin: 0,
            padding: 0,
          }),
          placeholder: styles => ({
            ...styles,
            color: `${baseTheme.colors.black}`,
            margin: 0,
            paddingLeft: '18px',
          }),
          singleValue: styles => ({
            ...styles,
            margin: 0,
            paddingLeft: '18px',
          }),
          menu: styles => ({
            ...styles,
            width: '224px',
          }),
          option: (styles, { isFocused }) => {
            return {
              ...styles,
              color: isFocused
                ? `${baseTheme.colors.black}`
                : `${baseTheme.colors.grey}`,
            };
          },
        }}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </FilterWrap>
  );
};
