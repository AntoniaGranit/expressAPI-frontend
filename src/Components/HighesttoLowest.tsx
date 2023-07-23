import React, { useState, useEffect } from 'react';
import { Loading } from './Loading';
import { Professional, ProfessionalList } from '../types';

export const HighesttoLowest = () => {
  const [completeList, setCompleteList] = useState<Professional[]>([])
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true)
    fetch('https://project-express-api-wcsanbxhyq-lz.a.run.app/highesttolowest')
      .then((res) => res.json())
      .then((data: ProfessionalList) => setCompleteList(data.body.professionals))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <section className="completelist-container">
      {completeList.map((singleProfessional) => {
        return (
          <div key={singleProfessional.id}>
            <p>Age: {singleProfessional.age}</p>
            <p>Gender: {singleProfessional.gender}</p>
            <p>City: {singleProfessional.city}</p>
            <p>Position: {singleProfessional.position}</p>
            <p>Total years of experience: {singleProfessional.total_years_experience}</p>
            <p>Seniority level: {singleProfessional.seniority_level}</p>
            <p>Main programming languge: {singleProfessional.main_language}</p>
            <p>Yearly salary: {singleProfessional.yearly_salary}</p>
            <p>Employment status: {singleProfessional.employment_status}</p>
            <p>Contract duration: {singleProfessional.contract_duration}</p>
            <p>Work language: {singleProfessional.work_language}</p>
            <p>Company size: {singleProfessional.company_size}</p>
            <p>Company type: {singleProfessional.company_type}</p>
            <br />
          </div>
        )
      })}
    </section>
  );
};