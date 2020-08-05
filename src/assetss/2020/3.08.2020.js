import { keys } from '../keys';
import tags from '../tags';

const dayNote = {
	[keys._date.name]: "3.08.2020",
	[keys._tags.name]: [tags.LINKED_IN],
	[keys._keywords.name]: ["quantum gates", 'Hilbert space'],
	[keys._workEvents.name]: [],
	[keys._bulletsList.name]: [
		"Zadzwoniła do mnie pani z TeamUp w sprawie rekrutacji do Commertzbank. Umieściłem swoje CV w ich bazie.",
		"Kobieta z ITDS na LinkedIn odpisała mi, że niestety, ale 2 lata stażu to za mało dla nich"
	],
	[keys._longerNotes.name]: [
		{
			"title": "Quantum Computing",
			"text": "Zacząłem trochę czytać o tym czym jest <s'quantum computing's/>, ściągnąłem nawet kilka książek, ale wygląda na to, że będzie cieżko coś z tego zrozumieć"
		}
	],
	[keys._articlesList.name]: [
		{
			title: "The Era of Quantum Computing Is Here. Outlook: Cloudy",
			url: "https://www.quantamagazine.org/the-era-of-quantum-computing-is-here-outlook-cloudy-20180124/"
		}
	]
}

export default dayNote;


