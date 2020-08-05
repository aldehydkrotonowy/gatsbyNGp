import { keys } from '../keys';
import tags from '../tags';

const dayNote = {
	[keys._date.name]: "3.08.2020",
	[keys._tags.name]: [tags.LINKED_IN],
	[keys._keywords.name]: ["quantum gates", 'Hilbert space'],
	[keys._workEvents.name]: [],
	[keys._bulletsList.name]: [
		"Women from TeamUp called me about application to Commerzbank. I have placed CV in their database.",
		"Recruiter form ITS wrote me that unfortunately but 2 year experience as developer is not enough."
	],
	[keys._longerNotes.name]: [
		{
			"title": "Quantum Computing",
			"text": "I have started to read about <s' quantum computing's/>, I even downloaded some books in this topic but it looks like it will be hard to understand this topic. "
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


