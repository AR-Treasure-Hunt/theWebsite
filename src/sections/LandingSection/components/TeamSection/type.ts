export interface SocialLinks {
    github?: string;
    instagram?: string;
    linkedin?: string;
  }
  
  export interface TeamMember {
    name: string;
    role: string;
    quote: string;
    socialLinks?: SocialLinks;
    image?: string;
  }