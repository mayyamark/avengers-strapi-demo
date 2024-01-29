import { AttributesBase, DynamicZone, Image, Item, TextSection } from './common';

export interface TechnologyConsultingSectionResponse {
  data: {
    id: number;
    attributes: AttributesBase & {
      backgroundImage: Image;
      textSection: TextSection;
    }
  };
  meta: {};
}

export interface ExpertServicesSectionResponse {
  data: {
    id: number;
    attributes: AttributesBase & {
      title: string;
      links: DynamicZone & {
        id: number;
        href: string;
        text: string;
      }[]
    }
  };
  meta: {};
}

export interface PartnerSectionResponse {
  data: {
    id: number;
    attributes: AttributesBase & {
      textSection: TextSection;
      items: Item[];
    }
  };
  meta: {};
}