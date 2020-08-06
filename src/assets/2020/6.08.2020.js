import { keys } from "../keys"
// import tags from '../tags';

export const dayNote = {
  [keys._date.name]: "6.08.2020",
  [keys._tags.name]: [],
  [keys._keywords.name]: ["React lifecycle methods"],
  [keys._workEvents.name]: [],
  [keys._bulletsList.name]: ["Woman from GFT called me to arrange interview"],
  [keys._longerNotes.name]: [
    {
      title: "The problem with snackbar and editing in Material Table",
      text:
        "I have solved problem with unwanted re rendering by moving function for preparing table data to place where data is fetched instead of passing it directly as table prop.",
    },
  ],
  [keys._articlesList.name]: [
    {
      title: "Arrow functions in React",
      url: "https://medium.com/@oleg008/arrow-functions-in-react-f782d11460b4",
    },
    {
      title: "Arrow functions are disrupting React.Components",
      url: "https://blog.usejournal.com/arrow-functions-are-disrupting-react-components-63662d35f97b",
      interesting: ["fat arrow as instance prop, func as class prop"],
    },
  ],
}
export default dayNote
