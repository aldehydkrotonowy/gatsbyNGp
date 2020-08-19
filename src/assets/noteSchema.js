const noteStructureSchema = {
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
  _interestingWebsites: {
    key: "websites",
    value: {
      type: "object",
      shape: [
        { key: "name", init: "" },
        { key: "url", init: "" },
        { key: "description", init: "" },
      ],
    },
  },
  _interestingSoftware: {
    key: "software",
    value: {
      type: "object",
      shape: [
        { key: "name", init: "" },
        { key: "url", init: "" },
        { key: "description", init: "" },
      ],
    },
  },
};

export default noteStructureSchema;
