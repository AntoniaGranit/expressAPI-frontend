import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Select } from '@chakra-ui/react'
import { NavigationLink, Button } from '../Styles/NavBarStyles';

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
    <>
      <Select
        placeholder="Select language"
        bg="#FB563E"
        borderColor="#FB563E"
        value={selectedLanguage}
        label="language"
        onChange={handleLanguageChange}>
        <option value="">Order by work language:</option>
        <option value="English">English</option>
        <option value="German">German</option>
        <option value="Spanish">Spanish</option>
        <option value="Russian">Russian</option>
        <option value="Polish">Polish</option>
      </Select>
      <Link to={`/professionals/${selectedLanguage}`}>
        <Button type="button" disabled={!selectedLanguage}>sort by work language</Button>
      </Link>

      <Select
        placeholder="Select gender"
        bg="#FB563E"
        color="white"
        borderColor="#FB563E"
        value={selectedGender}
        label="gender"
        onChange={handleGenderChange}>
        <option value="">Order by gender:</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </Select>
      <Link to={`/${selectedGender}`}>
        <Button type="button" disabled={!selectedGender}>sort by gender</Button>
      </Link>
      <NavigationLink to="/RandomProfessional">random professional</NavigationLink>
      <NavigationLink to="/CompleteList">all professionals</NavigationLink>
    </>
  )
}