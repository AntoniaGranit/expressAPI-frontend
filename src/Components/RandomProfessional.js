/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { User } from 'iconoir-react';
import { Loading } from './Loading';
import { SingleProfessional, UserIcon } from '../Styles/SingleProfessional';
// import { Button } from '../Styles/NavBarStyles'

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

  // const refreshPage = () => {
  //   window.location.reload();
  // };

  if (loading) {
    return (
      <Loading />
    )
  }

  if (randomProfessional.gender === 'female') {
    return (
      <section>
        <SingleProfessional>
          <UserIcon><User width={50} height={50} /></UserIcon>
          <p>
        This randomized professional is a {randomProfessional.age}-year-old {randomProfessional.gender} {randomProfessional.position} based in {randomProfessional.city}.
      She&apos;s a {randomProfessional.seniority_level}-level with {randomProfessional.total_years_experience} years of experience,
      and a yearly salary of {randomProfessional.yearly_salary} euros.
      Her main programming language is {randomProfessional.main_language}, and her work language is {randomProfessional.work_language}.
      She works at a {randomProfessional.company_type} company of about {randomProfessional.company_size} employees, and she&apos;s a {randomProfessional.employment_status}.
          </p>
        </SingleProfessional>
        {/* <Button type="button" onClick={refreshPage}>randomize again!</Button> */}
      </section>
    )
  } else {
    return (
      <section>
        <SingleProfessional>
          <UserIcon><User width={50} height={50} /></UserIcon>
          <p>
        This randomized professional is a {randomProfessional.age}-year-old {randomProfessional.gender} {randomProfessional.position} based in {randomProfessional.city}.
      He&apos;s a {randomProfessional.seniority_level}-level with {randomProfessional.total_years_experience} years of experience,
      and a yearly salary of {randomProfessional.yearly_salary} euros.
      His main programming language is {randomProfessional.main_language}, and his work language is {randomProfessional.work_language}.
      He work at a {randomProfessional.company_type} company of about {randomProfessional.company_size} employees, and he&apos;s a {randomProfessional.employment_status}.
          </p>
        </SingleProfessional>
        {/* <Button type="button" onClick={refreshPage}>get new professional</Button> */}
      </section>
    );
  }
}