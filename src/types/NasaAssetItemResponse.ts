export interface NasaAssetItemData {
  center: string;
  title: string;
  nasa_id: string;
  date_created: string;
  keywords: Array<string>;
  media_type: string;
  description_508: string;
  secondary_creator: string | null;
  description: string;
}

export interface NasaAssetItemResponse {
  href: string;
  data: Array<NasaAssetItemData>;
  links: Array<{
    href: string;
    rel: string;
    render: string;
  }>;
}
