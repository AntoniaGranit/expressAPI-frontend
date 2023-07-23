import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { NavigationLink, Button } from '../Styles/NavBarStyles';
import { Select } from '../Styles/SelectComponent';
import { MainSection } from '../Styles/Sections';

export const Main: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('english');
  const [selectedGender, setSelectedGender] = useState<string>('female');
  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setSelectedLanguage(event.target.value);
  }
  const handleGenderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setSelectedGender(event.target.value);
  }

  return (
    <MainSection>
      <Select
        placeholder="select language"
        value={selectedLanguage}
        onChange={handleLanguageChange}>
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
        onChange={handleGenderChange}>
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