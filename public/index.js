var characters = [

	"Zombie",
	"Dwarf",
	"Troll",
	"Orc",
	"Elf"
];

// PAGE INITIALISATION
// Every checkboxes is associated with a character
// Bartender is setup

window.onload = function () {
	//var ul = document.createElement('ul');
	var form = document.createElement('form');
	form.setAttribute('action', " ");

	document.getElementById('inner-page').appendChild(form);

	for(var chara in characters)
	{
		//var li = document.createElement('li');

		var label = document.createElement('label');
		var input = document.createElement('input');
		input.setAttribute('type', 'checkbox');
		input.setAttribute('name', 'character');
		input.setAttribute('value', characters[chara]);

		var text = document.
					createTextNode(characters[chara]);

		label.appendChild(input);
		label.appendChild(text);
		form.appendChild(label);
		//ul.appendChild(li);
	}


	var bartender = document.createElement('h1');
	var text_bart = document.createTextNode('Bartender is bored');
	bartender.appendChild(text_bart);
	document.getElementById('headline').appendChild(bartender);

}
