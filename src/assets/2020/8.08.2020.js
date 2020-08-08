import noteSchema from "../noteSchema";
import tags from "../tags";

export const dayNote = {
  [noteSchema._date.key]: "8.08.2020",
  [noteSchema._tags.key]: [tags.ART, tags.SOFT, tags.WEB],
  [noteSchema._keywords.key]: ["Document Object Model", "JavaScript DataTypes", "BroadcastChannel"],
  [noteSchema._workEvents.key]: [],
  [noteSchema._bulletsList.key]: [],
  [noteSchema._interestingSoftware.key]: [
    {
      name: "Ghidra",
      description: "A software reverse engineering (SRE) suite ",
      url: "https://ghidra-sre.org",
    },
  ],
  [key._interestingWebsites.key]: [
    {
      name: "openbase",
      url: "https://openbase.io",
      description: "Compare 1.3M JS packages",
    },
  ],
  [noteSchema._longerNotes.key]: [],
  [noteSchema._articlesList.key]: [
    {
      title: "Anti reverse engineering. Wirusy kontra antywirusy",
      url: "https://www.pelock.com/pl/artykuly/anti-reverse-engineering-wirusy-kontra-antywirusy?p2=53a",
      interesting: ["Exe-protectors", "Scramblers", "Obfuscator"],
    },
    {
      title: "Build your own React",
      url: "https://pomb.us/build-your-own-react/",
      interesting: ["React from scratch"]
    },
    {
      title: "Send data between chrome tabs",
      url: "https://dev.to/dcodeyt/send-data-between-tabs-with-javascript-2oa",
      interesting: ["BroadcastChannel"]
    }
  ],
};
export default dayNote;