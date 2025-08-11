
export interface JobType {
  job_id: number;
  job_title: string;
  department: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  employment_type: string;
  job_description: string;
  required_qualifications: string[];
  required_skills: string[];
  posting_date: string; // e.g., "12d" or "YYYY-MM-DD"
  application_deadline: string; // format: YYYY-MM-DD
  contact_information: {
    name: string;
    email: string;
    phone: string;
  };
  role_summary: string;
  responsibilities: string[];
  qualifications: {
    required: string[];
    nice_to_have: string[];
  };
  compensation: {
    currency: string;
    range_min: number;
    range_max: number;
    notes: string;
  };
}