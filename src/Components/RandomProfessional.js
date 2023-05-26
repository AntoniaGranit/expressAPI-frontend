/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { User } from 'iconoir-react';
import { Loading } from './Loading';
import { SingleProfessional, UserIcon } from '../Styles/SingleProfessional';
import { Button } from '../Styles/NavBarStyles'

export const RandomProfessional = () => {
  const [randomProfessional, setrandomProfessional] = useState({})
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('https://project-express-api-wcsanbxhyq-lz.a.run.app/random-professional')
      .then((res) => res.json())
      .then((data) => setrandomProfessional(data.body.professional))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  if (loading) {
    return (
      <Loading />
    )
  }

  const pronoun = () => {
    if (randomProfessional.gender === 'Female') {
      return 'She'
    } else {
      return 'He'
    }
  }

  const possessivePronoun = () => {
    if (randomProfessional.gender === 'Female') {
      return 'Her'
    } else {
      return 'His'
    }
  }

  console.log(randomProfessional.gender)

  return (
    <section>
      <SingleProfessional>
        <UserIcon><User width={50} height={50} /></UserIcon>
        <p>
        This randomized IT professional
        is a {randomProfessional.age}-year-old {randomProfessional.gender} {randomProfessional.position} based
        in {randomProfessional.city}. {pronoun()}&apos;s
        a {randomProfessional.seniority_level}-level {randomProfessional.employment_status} with {randomProfessional.total_years_experience} years of experience,
        and a yearly salary of {randomProfessional.yearly_salary} euros. {possessivePronoun()} main
        programming language is {randomProfessional.main_language},
        and {possessivePronoun()} work language is {randomProfessional.work_language}. {pronoun()} works
        at a {randomProfessional.company_type} company of about {randomProfessional.company_size} employees.
        </p>
      </SingleProfessional>
      <Button type="button" onClick={refreshPage}>randomize again!</Button>
    </section>
  );
}
