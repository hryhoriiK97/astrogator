export interface NasaImageItemResponse {
  href: string;
  data: Array<{
    center: string;
    title: string;
    nasa_id: string;
    date_created: string;
    keywords: Array<string>;
    media_type: string;
    description_508: string;
    secondary_creator: string;
    description: string;
  }>;
  links: Array<{
    href: string;
    rel: string;
    render: string;
  }>;
}
