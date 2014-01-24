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
	form.setAttribute('id', 'bar-form');

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

	form.addEventListener('click', checkboxOnClick, false);


	var bartender = document.createElement('h1');
	bartender.setAttribute('id', 'bartender');
	var text_bart = document.createTextNode('Bartender is bored');
	bartender.appendChild(text_bart);
	document.getElementById('headline').appendChild(bartender);

}

/**
*	Called when the user click on a checkbox
*/
function checkboxOnClick(e) {
	console.log('click');

	var elem_value = e.target.getAttribute('value');

	walksIntoABar(elem_value);
}

/**
*	Modifying the headline with the characters clicked
*/
function walksIntoABar(string) {

	var active_chars = [];
	var results;
	var bar = document.getElementById('bar-form');

	var chars = bar.elements;

	for(var i = 0; i < chars.length; i++) {
		if(chars[i].type == 'checkbox') {
			if(chars[i].checked == true) {
				//console.log(chars[i].value);
				active_chars.push(chars[i].value);
			}
		}
	}
	var bart_head = document.getElementById('bartender');
	var string_head;

	if(active_chars.length == 0) {
		string_head = 'Bartender is bored';
	}
	else if(active_chars.length == 1) {
		string_head = active_chars[0] + " walks into a bar.";
	}
	else {
		string_head = active_chars.join(', ') + " walk into a bar.";
	}

	bart_head.innerHTML = string_head;


}