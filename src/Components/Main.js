import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationLink, Button } from '../Styles/NavBarStyles';
import { Select } from '../Styles/SelectComponent';
import { MainSection } from '../Styles/Sections';

export const Main = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedGender, setSelectedGender] = useState('Female');
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
        placeholder="Select language"
        value={selectedLanguage}
        label="language"
        onChange={handleLanguageChange}>
        <option value="">order by work language:</option>
        <option value="English">english</option>
        <option value="German">german</option>
        <option value="Spanish">spanish</option>
        <option value="Russian">russian</option>
        <option value="Polish">polish</option>
      </Select>
      <Link to={`/professionals/${selectedLanguage}`}>
        <Button type="button" disabled={!selectedLanguage}>sort by work language</Button>
      </Link>

      <Select
        placeholder="Select gender"
        value={selectedGender}
        label="gender"
        onChange={handleGenderChange}>
        <option value="">order by gender:</option>
        <option value="Female">female</option>
        <option value="Male">male</option>
      </Select>
      <Link to={`/${selectedGender}`}>
        <Button type="button" disabled={!selectedGender}>sort by gender</Button>
      </Link>
      <NavigationLink to="/RandomProfessional">random professional</NavigationLink>
      <NavigationLink to="/CompleteList">all professionals</NavigationLink>
    </MainSection>
  )
}