import { ExpertServicesSectionResponse, PartnerSectionResponse, TechnologyConsultingSectionResponse } from "@/types/technologyConsultingSection";

export const getTechnologyConsultingSection = async(): Promise<TechnologyConsultingSectionResponse> => {
  const res = await fetch('http://localhost:1337/api/technology-consulting-section?populate=*');
  if (!res.ok) {
    throw new Error("Failed to fetch technology consulting section");
  }

  return await res.json();
}

export const getExpertServicesSection = async(): Promise<ExpertServicesSectionResponse> => {
  const res = await fetch('http://localhost:1337/api/expert-services-section?populate=*');
  if (!res.ok) {
    throw new Error("Failed to fetch expert services section");
  }

  return await res.json();
}

export const getPartnerSection = async(): Promise<PartnerSectionResponse> => {
  const res = await fetch('http://localhost:1337/api/partner-section?populate=*');
  if (!res.ok) {
    throw new Error("Failed to fetch partner section");
  }

  return await res.json();
}