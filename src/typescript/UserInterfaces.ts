export interface IPersonalDetails {
    first_name: string;
    last_name: string;
    phone: number;
    email: string;
    address: string;
    about_me: string;
  }
  
  export interface IAcademic {
    id: number;
    university: string;
    branch: string;
    address: string;
    session: string;
    grade: string;
    image_url: string;
  }
  
  export interface ISkills {
    id: number;
    languages: string[];
    frontend: string[];
    backend: string[];
    database: string[];
    others: string[];
  }
  
  export interface ISocialLinks {
    id: number;
    portfolio: string;
    github: string;
    geeksforgeek: string;
    hackerrank: string;
    leetcode: string;
    big_frontend_developer: string;
    blog: string;
  }
  
  export interface IAchievement {
    id: number;
    title: string;
    description: string;
  }
  
  export interface ICertification {
    id: number;
    title: string;
    organization: string;
    date_issued: string;
    credential: string;
  }
  
  export interface IExperience {
    id: number;
    role: string;
    company: string;
    employment_type: string;
    duration: string;
    location: string;
    image_url: string;
    responsibilities: string[];
    skills: string[];
  }
  
  export interface IUser {
    id: number;
    personal_details: IPersonalDetails;
    academics: IAcademic[];
    skills: ISkills;
    social_links: ISocialLinks;
    achievements: IAchievement[];
    certifications: ICertification[];
    experience: IExperience[];
  }
  