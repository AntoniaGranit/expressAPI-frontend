import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from './Loading';
import { SingleProfessional, CategoryP } from '../Styles/SingleProfessional';

export const GenderList = () => {
  const [genderList, setGenderList] = useState([])
  const [loading, setLoading] = useState(false);
  const { gender } = useParams();

  useEffect(() => {
    setLoading(true)
    fetch(`https://project-express-api-wcsanbxhyq-lz.a.run.app/professionals/${gender}`)
      .then((res) => res.json())
      .then((data) => setGenderList(data.body.professionals))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [gender]);

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <section className="completelist-container">
      {genderList.map((singleProfessional) => {
        return (
          <SingleProfessional key={singleProfessional.id}>
            <p><CategoryP>Age:</CategoryP> {singleProfessional.age}</p>
            <p><CategoryP>Gender:</CategoryP> {singleProfessional.gender}</p>
            <p><CategoryP>City:</CategoryP> {singleProfessional.city}</p>
            <p><CategoryP>Position:</CategoryP> {singleProfessional.position}</p>
            <p><CategoryP>Total years of experience: </CategoryP>
              {singleProfessional.total_years_experience}
            </p>
            <p><CategoryP>Seniority level:</CategoryP> {singleProfessional.seniority_level}</p>
            <p><CategoryP>Main language:</CategoryP> {singleProfessional.main_language}</p>
            <p><CategoryP>Yearly salary:</CategoryP> {singleProfessional.yearly_salary}</p>
            <p><CategoryP>Employment status:</CategoryP> {singleProfessional.employment_status}</p>
            <p><CategoryP>Work language:</CategoryP> {singleProfessional.work_language}</p>
            <p><CategoryP>Company size:</CategoryP> {singleProfessional.company_size}</p>
            <p><CategoryP>Company type:</CategoryP> {singleProfessional.company_type}</p>
          </SingleProfessional>
        )
      })}
    </section>
  );
};