import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
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
      <FormControl>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLanguage}
          label="language"
          onChange={handleLanguageChange}>
          <MenuItem value="">Order by work language:</MenuItem>
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="German">German</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
          <MenuItem value="Russian">Russian</MenuItem>
          <MenuItem value="Polish">Polish</MenuItem>
        </Select>
      </FormControl>
      <Link to={`/professionals/${selectedLanguage}`}>
        <Button type="button" disabled={!selectedLanguage}>sort by work language</Button>
      </Link>

      <FormControl>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedGender}
          label="gender"
          onChange={handleGenderChange}>
          <MenuItem value="">Order by gender:</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
        </Select>
      </FormControl>
      <Link to={`/${selectedGender}`}>
        <Button type="button" disabled={!selectedGender}>sort by gender</Button>
      </Link>
      <NavigationLink to="/RandomProfessional">random professional</NavigationLink>
      <NavigationLink to="/CompleteList">everyone</NavigationLink>
    </>
  )
}