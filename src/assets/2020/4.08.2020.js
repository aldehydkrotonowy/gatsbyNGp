import noteSchema from "../noteSchema";
import tags from "../tags";

const dayNote = {
  [noteSchema._date.key]: "4.08.2020",
  [noteSchema._tags.key]: [tags.LINKED_IN, tags.CSS],
  [noteSchema._keywords.key]: ["CSS animation"],
  [noteSchema._workEvents.key]: [],
  [noteSchema._bulletsList.key]: ["Recruiter from GFT is interested in my application.", "I have send CV to Krzysztof Bergiela from Sitecore", ""],
  [noteSchema._longerNotes.key]: [],
  [noteSchema._articlesList.key]: [
    {
      title: "25 Interesting Techniques To Use CSS & SVG Shapes",
      url: "https://bashooka.com/coding/techniques-to-use-css-svg-shapes/",
      interesting: ["interesting Organic Shape Animations with SVG clipPath"],
    },
  ],
};

export default dayNote;
