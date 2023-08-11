import React from 'react';

export type Offering = {
    name: string;
    description: string;
    image?: string;
    link?: string;
}

export const primordium : Offering = {
    name: "The Primordium Reading Group",
    description: "Primordium is a weekly reading group hosted by T.X. Watson, Elli Peacock, Lokeigh, Han Koehle, The Woodmother, Kenna Pearl, and Evan Diem. You can tune in for a reading and live discussion of the text on Thursdays at 6:30 p.m. ET. Backing any of these creators on Patreon or backing Elli on Twitch (theeclecticlibrary) gets you access to the Primordium Discord server, where you can join the closed-group discussion of the text with participation open to all members! We read science fiction and fantasy short stories, accessible film and literary theory academic papers, poetry, essays, we’ve even done a couple movies and an album!",
    image: "/images/primordium.jpeg"
}

export const watson_patreon : Offering = {
    name: "T.X. Watson's Patreon",
    description: "Join Watson’s Patreon for access to Primordium ($3 and up) as well as twice-monthly Watson lore posts ($5 and up), mysterious artifacts ($10 and up), and more!",
    image: "/images/watson_logo.png",
    link: "https://www.patreon.com/txwatson"
}

export const eclectic_library_patreon : Offering = {
    name: "The Eclectic Library Patreon",
    description: "Join The Eclectic Library Patreon for access to Primordium ($3 and up) plus Elli's reading recommendations, book reviews, and gifts of gratitude!",
    image: "/images/elli_logo.png",
    link: "https://www.patreon.com/theeclecticlibrary"
}

export const cecelia_patreon : Offering = {
    name: "Ceceliaisgray Patreon",
    description: "Join Cecelia’s Patreon for whatever weird stuff comes up. Blog posts, probably sometimes stickers, who really knows, every day is an adventure.",
    image: "/images/cecelia_logo.jpeg",
    link: "https://www.patreon.com/ceceliaisgray"
}

export const oracle_deck : Offering = {
    name: "The Sunset Oracle Deck",
    description: "The Sunset Oracle Deck is the current state of a 5-year long project to create a custom fortune-telling deck—Watson was getting into tarot, but wanted to see their own values reflected back at them when they did a reading, rather than those of the collective consciousness of the last 300 years of European mystics. So they made their own!",
    image: "/images/oracle_deck.png",
    link: "https://www.txwatson.com/cards"
}

export const soul_shares : Offering = {
    name: "The Immortal Soul of T.X. Watson",
    description: "Buy shares of ownership in T.X. Watson's immortal soul!",
    image: "/images/soul_share.png",
    link: "https://www.txwatson.com/my-soul"
}