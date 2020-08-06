export const keys = {
  _date: {
    name: "date",
    defaultVal: "",
  },
  _tags: {
    name: "tags",
    defaultVal: [],
  },
  _keywords: {
    name: "keywordsOfTheDay",
    defaultVal: [],
  },
  _workEvents: {
    name: "workEvents",
    defaultVal: [],
  },
  _bulletsList: {
    name: "bulletList",
    defaultVal: [],
  },
  _longerNotes: {
    name: "notes",
    defaultVal: [{ title: "", text: "" }],
  },
  _articlesList: {
    name: "articles",
    defaultVal: [{ title: "", url: "", interesting: [] }],
  },
}

export const noteSchema = {
  _date: {
    key: "date",
    value: {
      type: "string",
      shape: "",
    },
  },
  _tags: {
    key: "tags",
    value: {
      type: "array",
      shape: [],
    },
  },
  _keywords: {
    key: "keywordsOfTheDay",
    value: {
      type: "array",
      shape: [],
    },
  },
  _workEvents: {
    key: "workEvents",
    value: {
      type: "array",
      shape: [],
    },
  },
  _bulletsList: {
    key: "bulletList",
    value: {
      type: "array",
      shape: [],
    },
  },
  _longerNotes: {
    key: "notes",
    value: {
      type: "object",
      shape: [
        { key: "title", init: "" },
        { key: "text", init: "" },
      ],
    },
  },
  _articlesList: {
    key: "articles",
    value: {
      type: "object",
      shape: [
        { key: "title", init: "" },
        { key: "url", init: "" },
        { key: "interesting", init: [] },
      ],
    },
  },
}
