import noteSchema from "../noteSchema";
import tags from "../tags";

const dayNote = {
  [noteSchema._date.key]: "3.08.2020",
  [noteSchema._tags.key]: [tags.LINKED_IN],
  [noteSchema._keywords.key]: ["quantum gates", "Hilbert space"],
  [noteSchema._workEvents.key]: [],
  [noteSchema._bulletsList.key]: [
    "Women from TeamUp called me about application to Commerzbank. I have placed CV in their database.",
    "Recruiter form ITS wrote me that unfortunately but 2 year experience as developer is not enough.",
  ],
  [noteSchema._longerNotes.key]: [
    {
      title: "Quantum Computing",
      text:
        "I have started to read about <s' quantum computing's/>, I even downloaded some books in this topic but it looks like it will be hard to understand this topic. ",
    },
  ],
  [noteSchema._articlesList.key]: [
    {
      title: "The Era of Quantum Computing Is Here. Outlook: Cloudy",
      url: "https://www.quantamagazine.org/the-era-of-quantum-computing-is-here-outlook-cloudy-20180124/",
    },
  ],
};

export default dayNote;
