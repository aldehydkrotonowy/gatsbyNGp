import year2020List from "assets/2020"
import { /* keys, */ noteSchema } from "assets/keys"

const extractValueFromNote = (note, _key) => {
  return note[_key]
}

const pickFieldFromNoteIfExists = (noteEntry, shapeOfValue) => {
  return shapeOfValue.reduce((obj, template) => {
    const { key, init } = template
    obj[key] = noteEntry[key] || init
    return obj
  }, {})
}

const buildValueObj = (schemaOfValue, extractedNoteValue = null) => {
  const { type, shape } = schemaOfValue

  switch (type) {
    case "string":
      return extractedNoteValue || shape
    case "array":
      return extractedNoteValue || shape
    case "object":
      const valueList = extractedNoteValue || []
      const preparedValue = valueList.map(noteEntry => pickFieldFromNoteIfExists(noteEntry, shape))
      return preparedValue
    default:
      return null
  }
}

const noteAssembler = schema => dayNote => {
  const defaultNoteShape = Object.entries(schema).reduce((obj, [_schemaKey, { key, value: noteValueSchema }]) => {
    const extractedNoteValue = extractValueFromNote(dayNote, key)
    const value = buildValueObj(noteValueSchema, extractedNoteValue)
    obj[key] = value
    return obj
  }, {})

  return defaultNoteShape
}

const buildSingleNote = noteAssembler(noteSchema)

const allYears = [year2020List].flat()

const buildDiary = () => allYears.map(dayNote => buildSingleNote(dayNote))

export default buildDiary
