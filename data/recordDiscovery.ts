export type RecordDiscovery = {
  profile: string;
  options: {
    eyebrow: string;
    title: string;
    copy: string;
    url: string;
    cta: string;
    affiliate?: boolean;
  }[];
};

const standardRecordOptions: RecordDiscovery["options"] = [
  {
    eyebrow: "Garimpo e catálogo",
    title: "Vivinil",
    copy: "Confira discos disponíveis e oportunidades selecionadas para começar ou ampliar sua coleção pagando melhor.",
    url: "https://vivinil.com.br",
    cta: "Ver discos na Vivinil",
  },
  {
    eyebrow: "Clube de assinatura",
    title: "Noize Record Club",
    copy: "Uma alternativa para descobrir edições especiais e receber novos discos. Antes de assinar, confira se o catálogo recente combina com o seu gosto.",
    url: "https://noize-record-club.myshopify.com?invite_code=tkxuoNbmSjV9&referrer_name=4794",
    cta: "Conhecer a assinatura da Noize",
    affiliate: true,
  },
  {
    eyebrow: "Monitor de preços da Amazon",
    title: "Garimpo Vivinil",
    copy: "Acompanhe quedas de preço e oportunidades em discos na Amazon reunidas pelo monitor da Vivinil.",
    url: "https://garimpo.vivinil.com.br/",
    cta: "Acessar o monitor de preços",
    affiliate: true,
  },
  {
    eyebrow: "Ofertas em tempo real",
    title: "Grupo exclusivo de ofertas",
    copy: "Entre no grupo para receber garimpos, promoções e oportunidades selecionadas para ampliar sua coleção gastando melhor.",
    url: "https://chat.whatsapp.com/GorsEQei6ltHRFBjrgfD5S",
    cta: "Entrar no grupo de ofertas",
  },
];

export function createRecordDiscovery(profile: string): RecordDiscovery {
  return { profile, options: standardRecordOptions.map(option => ({ ...option })) };
}
