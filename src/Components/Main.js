import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationLink, Button } from '../Styles/NavBarStyles';
import { Select } from '../Styles/SelectComponent';
import { MainSection } from '../Styles/Sections';

export const Main = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [selectedGender, setSelectedGender] = useState('female');
  const handleLanguageChange = (event) => {
    console.log(event.target.value);
    setSelectedLanguage(event.target.value);
  }
  const handleGenderChange = (event) => {
    console.log(event.target.value);
    setSelectedGender(event.target.value);
  }

  return (
    <MainSection>
      <Select
        placeholder="select language"
        value={selectedLanguage}
        label="language"
        onChange={handleLanguageChange}>
        <option value="">order by work language:</option>
        <option value="english">english</option>
        <option value="german">german</option>
        <option value="spanish">spanish</option>
        <option value="russian">russian</option>
        <option value="polish">polish</option>
      </Select>
      <Link to={`/professionals/${selectedLanguage}`}>
        <Button type="button" disabled={!selectedLanguage}>sort by work language</Button>
      </Link>

      <Select
        placeholder="select gender"
        value={selectedGender}
        label="gender"
        onChange={handleGenderChange}>
        <option value="">order by gender:</option>
        <option value="female">female</option>
        <option value="male">male</option>
      </Select>
      <Link to={`/${selectedGender}`}>
        <Button type="button" disabled={!selectedGender}>sort by gender</Button>
      </Link>
      <NavigationLink to="/randomprofessional">random professional</NavigationLink>
      <NavigationLink to="/completelist">all professionals</NavigationLink>
    </MainSection>
  )
}