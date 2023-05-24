import React, { useState, useEffect } from 'react';
import { Loading } from './Loading';

export const SingleProfessional = () => {
  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('https://project-express-api-wcsanbxhyq-lz.a.run.app/random-professional')
      .then((res) => res.json())
      .then((data) => setDetails(data.body.professional))
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
      <div key={details.id}>
        <p>Age: {details.age}</p>
        <p>Gender: {details.gender}</p>
        <p>City: {details.city}</p>
        <p>Position: {details.position}</p>
        <p>Total years of experience: {details.total_years_experience}</p>
        <p>Seniority level: {details.seniority_level}</p>
        <p>Main language: {details.main_language}</p>
        <p>Yearly salary: {details.yearly_salary}</p>
        <p>Employment status: {details.employment_status}</p>
        <p>Contract duration: {details.contract_duraction}</p>
        <p>Work language: {details.work_language}</p>
        <p>Company size: {details.company_size}</p>
        <p>Company type: {details.company_type}</p>
      </div>
    </section>
  );
};