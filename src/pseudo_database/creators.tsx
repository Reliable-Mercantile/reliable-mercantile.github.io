import React from 'react';

export type Creator = {
    name: string;
    description: string;
    consultationOfferings?: string[];
    roles: string[];
    image: string;
    links?: SocialMediaLinks;
}

export type SocialMediaLinks = {
    tiktok?: string;
    patreon?: string;
    twitch?: string;
    instagram?: string;
    threads?: string;
    youtube?: string;
}

export const watson : Creator = {
    name: "T.X. Watson",
    description: "T.X. Watson is a content creator and public scholar whose research focuses on emerging media and the relationships creators have with their audiences. They have a background in memetics and journalism, and freelance as as UX designer and graphic artist, using their unique skillset to create engaging and visually captivating experiences for end users.",
    consultationOfferings: ["visual art", "graphic design", "UX design"],
    roles: ["Core", "Artist", "Admin"],
    image: "/images/watson_logo.png",
    links: {tiktok: "https://www.tiktok.com/@txwatson", patreon: "https://www.patreon.com/txwatson"}
}

export const cecelia : Creator = {
    name: "Cecelia Gray",
    description: "Cecelia Gray is a teacher by trade and a scholar of emerging fandoms by calling. She has been at the forefront of the analysis and such varied and momentous media phenomena as the rise of Our Flag Means Death, the rediscovery of the lost Martin Scorcese film Goncharov (1973), and Superwholock from its golden age through to the death of Vladimir Putin. She is perhaps best known for referring to her dog as a “smol boy” in a gentle voice.",
    consultationOfferings: ["bookkeeping"],
    roles: ["Core", "Artist", "Admin", "Finance"],
    image: "/images/cecelia_logo.jpeg",
    links: {tiktok: "https://www.tiktok.com/@ceceliaisgray", patreon: "https://www.patreon.com/ceceliaisgray"}
}

export const elli : Creator = {
    name: "Elli Peacock",
    description: "Elli Peacock is an information professional whose research interests focus on the history of the early internet and on the accessibility and ethics of information curation systems. With a background in data analytics, frontend development, and UX design, they bring a unique perspective on the sociology of tech. Additionally, as an operational consultant, Peacock works closely with creators on emerging media platforms like TikTok, using their organizational skills to support artists in achieving their professional goals.",
    consultationOfferings: ["UX design", "software projects", "website building", "project management", "professional development"],
    roles: ["Core", "Artist", "Admin", "Finance"],
    image: "/images/elli_logo.png",
    links: {tiktok: "https://www.tiktok.com/@the.eclectic.library", patreon: "https://www.patreon.com/theeclecticlibrary"}
}

export const blythe : Creator = {
    name: "Blythe [Redacted]",
    description: "Blythe [Redacted] is a professional lorekeeper and administrative assistant. By day, Blythe scavenges for mushrooms, experimentally pickles various fruits, and drafts and edits clothing and costume items. By night, she pores over the Reliable Mercantile archives to uncover lost and forgotten documents and artifacts, to share with Reliable Mercantile’s intrepid supporters",
    consultationOfferings: ["costuming", "clothing alteration", "copy editing"],
    roles: ["Core", "Admin"],
    image: "/images/blythe_logo.png",
}

export const creators = [ watson, cecelia, elli, blythe ];