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
];

export function createRecordDiscovery(profile: string): RecordDiscovery {
  return { profile, options: standardRecordOptions.map(option => ({ ...option })) };
}
