export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  url: string;
};

export const certificates: Certificate[] = [
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "netacad.com, Instructor: Raul Lecaros",
    year: "2026",
    url: "https://netacad.com",
  },
  {
    title: "Relational Model to MongoDB Document Model",
    issuer: "MongdoDB",
    year: "2026",
    url: "https://www.credly.com/badges/e0abf607-e75f-4210-b979-defed8853b91/public_url",
  },
  {
    title: "Shielded Metal Arc Welding",
    issuer: "TESDA",
    year: "2026",
    url: "https://e-tesda.gov.ph",
  },
  {
    title: "Gender and Developement (GAD) Sensitivity Training Completer",
    issuer: "TESDA",
    year: "2026",
    url: "https://e-tesda.gov.ph",
  },
];
