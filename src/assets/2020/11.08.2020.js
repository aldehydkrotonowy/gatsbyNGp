import { noteSchema } from "../keys";
import tags from '../tags';

export const dayNote = {
  [noteSchema._date.key]: "11.08.2020",
  [noteSchema._tags.key]: [tags.JS],
  [noteSchema._keywords.key]: ["iframe", "MessageChannel API", "window.postMessage()", "WebSocket"],
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
      title: "BroadcastChannel API: A Message Bus for the Web",
      url: "https://developers.google.com/web/updates/2016/09/broadcastchannel",
      interesting: [],
    },
    {
      title: "Message Passing",
      url: "https://developer.chrome.com/apps/messaging"
    },
    {
      title: "",
      url: ""
    },
    {
      title: "",
      url: ""
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