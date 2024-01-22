import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  FilterWrap,
  InputFrom,
  InputTo,
  InputWrap,
  Label,
  SearchButton,
  SelectWrap,
} from './Filter.styled';
import Select from 'react-select';
import { baseTheme } from 'theme';
import { useFilterCars } from 'hooks/useFilter';
import { selectBrand } from 'redux/filter/filter-slice';

export const Filter = ({ brands, onFilterChange }) => {
  const dispatch = useDispatch();
  const { selectedBrand } = useFilterCars();
  const [selectedPriceStep, setSelectedPriceStep] = useState(null);
  const [selectedPriceLabel, setSelectedPriceLabel] = useState('');
  const [mileageCarFrom, setMileageCarFrom] = useState('');
  const [mileageCarTo, setMileageCarTo] = useState('');
  const brandOptions = brands.map(brabd => ({
    value: brabd,
    label: brabd,
  }));

  const priceOptions = [];

  for (let i = 30; i <= 500; i += 10) {
    priceOptions.push({ value: i, label: `${i}` });
  }

  const handleFilterCarClick = () => {
    const newFilters = {
      brand: selectedBrand,
      rentalPrice: selectedPriceStep,
      mileageFrom: mileageCarFrom,
      mileageTo: mileageCarTo,
    };

    onFilterChange(newFilters);
  };

  const onChangePriceStep = selectedOption => {
    setSelectedPriceStep(selectedOption.value);
    setSelectedPriceLabel(selectedOption.label);
  };

  return (
    <FilterWrap>
      <SelectWrap>
        <Label htmlFor="selectBrand">Car brand</Label>
        <Select
          inputId="selectBrand"
          placeholder="Enter the text"
          isClearable={true}
          onChange={selectedOption => dispatch(selectBrand(selectedOption))}
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
              padding: '14px 18px 14px 18px',
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
              padding: '14px 8px 14px 18px',
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
      </SelectWrap>
      <SelectWrap>
        <Label htmlFor="selectPrice">Price/ 1 hour</Label>
        <Select
          inputId="selectPrice"
          placeholder="To $"
          value={
            selectedPriceStep
              ? { value: selectedPriceStep, label: selectedPriceLabel }
              : null
          }
          onChange={onChangePriceStep}
          options={priceOptions}
          styles={{
            control: styles => ({
              ...styles,
              width: '125px',
              border: 'none',
              borderRadius: '14px',
              margin: 0,
              fontSize: '18px',
              backgroundColor: `${baseTheme.colors.darkwhite}`,
              appearance: 'none',
              fontWeight: 500,
              lineHeight: 1.11,
            }),
            input: styles => ({
              ...styles,
              margin: 0,
              padding: '14px 18px 14px 18px',
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
              width: '125px',
              padding: '14px 8px 14px 18px',
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
      </SelectWrap>
      <SelectWrap>
        <Label htmlFor="inputMileage">Car mileage / km</Label>
        <InputWrap>
          <InputFrom
            type="text"
            id="inputMileage"
            placeholder="From"
            value={mileageCarFrom}
            onChange={e => setMileageCarFrom(e.target.value)}
          />
          <InputTo
            type="text"
            placeholder="To"
            value={mileageCarTo}
            onChange={e => setMileageCarTo(e.target.value)}
          />
        </InputWrap>
      </SelectWrap>
      <SearchButton onClick={handleFilterCarClick}>Search</SearchButton>
    </FilterWrap>
  );
};
