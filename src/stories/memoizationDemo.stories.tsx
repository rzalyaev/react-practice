import React, {useState, memo, useMemo} from 'react';
import type {Meta} from "@storybook/react";
import {Select} from "../components/Select/Select";

const meta: Meta<typeof Select> = {
  component: Select
}
export default meta;

const Count = memo(() => {
  console.log('Count component rendered');
  const [count, setCount] = useState<number>(0);
  const handleButtonOnClick = () => setCount(prevState => prevState + 1);

  return (
      <div style={{display: 'flex', gap: '10px'}}>
        <button onClick={handleButtonOnClick}>+</button>
        {count}
      </div>
  )
});

type CityType = {
  countryId: string
  value: string
  title: string
}
const citiesArray: CityType[] = [
  {countryId: '1', value: '1', title: 'Moscow'},
  {countryId: '1', value: '2', title: 'Kazan'},
  {countryId: '1', value: '3', title: 'Izhevsk'},
  {countryId: '2', value: '4', title: 'Minsk'},
  {countryId: '2', value: '5', title: 'Grodno'},
  {countryId: '2', value: '6', title: 'Brest'},
  {countryId: '3', value: '7', title: 'Kiev'},
  {countryId: '3', value: '8', title: 'Kharkov'},
  {countryId: '3', value: '9', title: 'Odessa'},
]

const RussianSelect = memo(() => {
  console.log('RussianSelect component rendered');
  const [selectedCityValue, setSelectedCityValue] = useState('1');
  const russianCities = useMemo(() => citiesArray.filter(city => city.countryId === '1'), [citiesArray]);
  const handleSelectOnChange = (value: string) => setSelectedCityValue(value);

  return (
      <Select onChange={handleSelectOnChange} items={russianCities} value={selectedCityValue}/>
  )
})

const BelorussianSelect = memo(() => {
  console.log('BelorussianSelect component rendered');
  const [selectedCityValue, setSelectedCityValue] = useState('4');
  const belorussianCities = useMemo(() => citiesArray.filter(city => city.countryId === '2'), [citiesArray]);
  const handleSelectOnChange = (value: string) => setSelectedCityValue(value);

  return (
      <Select onChange={handleSelectOnChange} items={belorussianCities} value={selectedCityValue}/>
  )
});

const UkrainianSelect = memo(() => {
  console.log('UkrainianSelect component rendered');
  const [selectedCityValue, setSelectedCityValue] = useState('1');
  const ukrainianCities = useMemo(() => citiesArray.filter(city => city.countryId === '3'), [citiesArray]);
  const handleSelectOnChange = (value: string) => setSelectedCityValue(value);

  return (
      <Select onChange={handleSelectOnChange} items={ukrainianCities} value={selectedCityValue}/>
  )
});

export const Example = () => {
  return (
      <div>
        <Count/>
        <RussianSelect/>
        <BelorussianSelect/>
        <UkrainianSelect/>
      </div>
  )
}