import year2020List from "../assetss/2020";
import { keys } from '../assetss/keys';


const buildDefaultNoteObj = (keySchema) => {
  return Object.values(keySchema).reduce((acc, entry) => {
    acc[entry.name] = entry.defaultVal;
    return acc;
   }, {})
}

const allYears = [year2020List].flat();



const buildDiary = () => allYears.map(note => ({
  ...buildDefaultNoteObj(keys),
  ...note
}))

export default buildDiary;