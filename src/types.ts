export interface Professional {
    id: number,
    age: number,
    gender: string,
    city: string,
    position: string,
    total_years_experience: number,
    seniority_level: string,
    main_language: string,
    yearly_salary: number,
    employment_status: string,
    contract_duration: string,
    work_language: string,
    company_size: string,
    company_type: string
}

export interface Data {
    body: {
        professional: Professional;
    }
}

export interface ProfessionalList {
    body: {
        professionals: Professional[];
    }
}