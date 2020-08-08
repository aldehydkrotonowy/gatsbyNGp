import year2020List from "assets/2020";
import noteSchema from "assets/noteSchema";

const extractValueFromNote = (note, _key) => {
  return note[_key];
};

const pickFieldFromNoteIfExists = (noteEntry, shapeOfValue) => {
  return shapeOfValue.reduce((obj, template) => {
    const { key, init } = template;
    obj[key] = noteEntry[key] || init;
    return obj;
  }, {});
};

const buildValueObj = (schemaOfValue, extractedNoteValue = null) => {
  const { type, shape } = schemaOfValue;

  const valueList = extractedNoteValue || [];
  switch (type) {
    case "string":
      return extractedNoteValue || shape;
    case "array":
      return extractedNoteValue || shape;
    case "object":
      return valueList.map(noteEntry => pickFieldFromNoteIfExists(noteEntry, shape));
    default:
      return null;
  }
};

const noteAssembler = schema => dayNote => {
  const defaultNoteShape = Object.values(schema).reduce((obj, { key, value: noteValueSchema }) => {
    const extractedNoteValue = extractValueFromNote(dayNote, key);
    const value = buildValueObj(noteValueSchema, extractedNoteValue);
    obj[key] = value;
    return obj;
  }, {});

  return defaultNoteShape;
};

const buildSingleNote = noteAssembler(noteSchema);

const allYears = [year2020List].flat();

const buildDiary = () => allYears.map(dayNote => buildSingleNote(dayNote));

export default buildDiary;
