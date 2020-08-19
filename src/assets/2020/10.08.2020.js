import { noteSchema } from "../keys";
// import tags from '../tags';

export const dayNote = {
  [noteSchema._date.key]: "",
  [noteSchema._tags.key]: [],
  [noteSchema._keywords.key]: [],
  [noteSchema._workEvents.key]: [],
  [noteSchema._bulletsList.key]: [],
  [noteSchema._interestingSoftware.key]: [
    {
      title: "",
      url: "",
      description: "",
    },
  ],
  [key._interestingWebsites.key]: [
    {
      name: "",
      url: "",
      description: "",
    },
  ],
  [noteSchema._longerNotes.key]: [
    {
      title: "",
      text: "",
    },
  ],
  [noteSchema._articlesList.key]: [
    {
      title: "User Timing API",
      url: "https://www.html5rocks.com/en/tutorials/webperformance/usertiming/",
      interesting: [],
    },
    {
      title: "Obniżone składki ZUS przez 24 miesiące",
      url: "https://www.biznes.gov.pl/pl/firma/zus/chce-rozliczac-zus/obnizone-skladki-zus-przez-24-miesiace",
      description: []
    }
  ],
  [noteSchema._dayDescription.key]: "",
  [noteSchema._videos.key]: [
    {
      name: "",
      url: "",
      description: "",
    },
  ],
};
