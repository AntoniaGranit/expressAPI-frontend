/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { User } from 'iconoir-react';
import { SingleProfessional, UserIcon } from '../Styles/SingleProfessional';
import { Button } from '../Styles/NavBarStyles'
import { Data, Professional } from '../types'

export const RandomProfessional = () => {
  const [randomProfessional, setrandomProfessional] = useState<Professional>({
    id: 0,
    age: 0,
    gender: '',
    city: '',
    position: '',
    total_years_experience: 0,
    seniority_level: '',
    main_language: '',
    yearly_salary: 0,
    employment_status: '',
    contract_duration: '',
    work_language: '',
    company_size: '',
    company_type: ''
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true)
    fetch('https://project-express-api-wcsanbxhyq-lz.a.run.app/random-professional')
      .then((res) => res.json())
      .then((data: Data) => setrandomProfessional(data.body.professional))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  // if loading is true, OR if the randomProfessional-object is still empty, then show the Loading-component:
  if (loading || Object.keys(randomProfessional).length === 0) {
    return (
      <div><p>Loading</p></div>
    )
  }

  const pronoun = () => {
    if (randomProfessional.gender === 'Female') {
      return 'She'
    } else {
      return 'He'
    }
  };

  const possessivePronoun = () => {
    if (randomProfessional.gender === 'Female') {
      return 'Her'
    } else {
      return 'His'
    }
  };

  return (
    <section>
      <SingleProfessional>
        <UserIcon><User width={50} height={50} /></UserIcon>
        <p>
        This randomized IT professional
        is a {randomProfessional.age}-year-old {randomProfessional.gender.toLowerCase()} {randomProfessional.position} based
        in {randomProfessional.city}. {pronoun()}&apos;s
        a {randomProfessional.seniority_level.toLowerCase()}-level {randomProfessional.employment_status.toLowerCase()} with {randomProfessional.total_years_experience} years of experience,
        and a yearly salary of {randomProfessional.yearly_salary} euros. {possessivePronoun()} main
        programming language is {randomProfessional.main_language},
        and {possessivePronoun().toLowerCase()} work language is {randomProfessional.work_language}. {pronoun()} works
        at a {randomProfessional.company_type.toLowerCase()} company of about {randomProfessional.company_size} employees.
        </p>
      </SingleProfessional>
      <Button type="button" onClick={refreshPage}>randomize again!</Button>
    </section>
  );
}
