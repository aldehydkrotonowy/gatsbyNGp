import { keys } from '../keys';
import tags from '../tags';

export const dayNote = {
  [keys._date.name]: "5.08.2020",
  [keys._tags.name]: [tags.LINKED_IN],
  [keys._keywords.name]: ["Quantum Flux Parametron"],
  [keys._workEvents.name]: [],
  [keys._bulletsList.name]: [
    "Odpowiedziałem na LinkedIn rekruterce od GFT",
    ""
  ],
  [keys._longerNotes.name]: [
    {
      "title": "Problem ze snackbarem i edycją Material Table",
      "text": "Dziś napotkałem ciekawy problem z Material-table. Mianowicie wyświetlanie snackbara zostało przedłużone do 10s. Jeśli tabelka jest w trybie edycji a snackbar się nie zdążył zamknać, to odklikanie powoduje zamknięcie snackbara w efekcie czego tabelka renderuje się ponownie i staje się szara. Na przyszłość muszę przemyśleć pisanie komponentów tak aby zmiana stat-u jakiegoś komponentu nie powodowała niepotrzebnego przerenderowania innego."
    }
  ],
  [keys._articlesList.name]: [
    {
      title: "",
      url: ""
    }
  ]
}