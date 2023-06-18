export type Creator = {
    name: string;
    description: string;
    image: string;
    consulation_offerings?: string[];
    roles?: string[];
    links?: SocialLinks;
}

export type SocialLinks = {
    patreon?: string;
}

export const creators = [
    {
      name: "T.X. Watson",
      description: "T.X. Watson is a content creator and public scholar whose research focuses on emerging media and the relationships creators have with their audiences. They have a background in memetics and journalism, and have also been known to freelance as UX designer and graphic artist, using their unique skillset to create engaging and visually captivating experiences for end users.",
      consultation_offerings: ["visual art", "graphic design", "UX design"],
      roles: ["Core", "Artist", "Admin"],
      image: "https://github.com/pamplemoussecache/reliable-mercantile-site/blob/main/src/images/watson_logo.png",
      links: {patreon: "https://www.patreon.com/txwatson"}
    },
    {
        name: "Elli Peacock",
        description: "Elli Peacock is an information professional whose research interests focus on the history of the early internet and on the accessibility and ethics of information curation systems. With a background in data analytics, frontend development, and UX design, they bring a unique perspective on the sociology of tech. Additionally, as an operational consultant, Peacock works closely with creators on emerging media platforms like TikTok, using their organizational skills to support artists in achieving their professional goals.",
        consultation_offerings: ["UX design", "software projects", "website building", "project management", "professional development"],
        roles: ["Core", "Artist", "Admin", "Finance"],
        image: "https://github.com/pamplemoussecache/reliable-mercantile-site/blob/main/src/images/elli_logo.png",
        links: {patreon: "https://www.patreon.com/theeclecticlibrary"}
    },
    {
        name: "Cecelia Gray",
        description: "Cecelia Gray is a teacher by trade and a scholar of emerging fandoms by calling. She has been at the forefront of the analysis and such varied and momentous media phenomena as the rise of Our Flag Means Death, the rediscovery of the lost Martin Scorcese film Goncharov (1973), and Superwholock from its golden age through to the death of Vladimir Putin. She is perhaps best known for referring to her dog as a “smol boy” in a gentle voice.",
        consultation_offerings: ["bookkeeping"],
        roles: ["Core", "Artist", "Admin", "Finance"],
        image: "https://github.com/pamplemoussecache/reliable-mercantile-site/blob/main/src/images/cecelia_logo.jpeg",
        links: {patreon: "https://www.patreon.com/ceceliaisgray"}
    },
    {
        name: "Blythe [Redacted]",
        description: "Blythe [Redacted] is a professional lorekeeper and administrative assistant. By day, Blythe scavenges for mushrooms, experimentally pickles various fruits, and drafts and edits clothing and costume items. By night, she pores over the Reliable Mercantile archives to uncover lost and forgotten documents and artifacts, to share with Reliable Mercantile’s intrepid supporters",
        consultation_offerings: ["costuming", "clothing alteration", "copy editing"],
        image: "https://github.com/pamplemoussecache/reliable-mercantile-site/blob/main/src/images/blythe_logo.png"
    }
];