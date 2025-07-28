export interface Medium {
  id: number;
  type: string;
  url: string;
  thumbnail?: string;
  title?: string;
}

export interface Checklist {
  id: number;
  title: string;
  description?: string;
  icon?: string;
}

export interface This {
  price: number;
  currency: string;
  discount?: number;
}

export interface CtaText {
  primary: string;
  secondary?: string;
}

export interface SectionContent {
  title?: string;
  description?: string;
  image?: string;
  points?: string[];
  instructor_name?: string;
  instructor_title?: string;
  instructor_image?: string;
  instructor_bio?: string;
}

export interface Section {
  id: number;
  type: 'instructor' | 'features' | 'pointers' | 'about';
  title: string;
  content: SectionContent;
}

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  this: This;
  cta_text: CtaText;
  sections: Section[];
}

export interface ApiResponse {
  data: ProductData;
  seo?: {
    title: string;
    description: string;
    keywords: string;
    og_image: string;
  };
}