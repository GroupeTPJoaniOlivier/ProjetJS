var characters = [

	"Zombie",
	"Dwarf",
	"Troll",
	"Orc",
	"Elf"
];

window.onload = function () {
	var ul = document.createElement('ul');

	document.getElementById('inner-page').appendChild(ul);

	for(var chara in characters)
	{
		var li = document.createElement('li');
		var text = document.createTextNode(characters[chara]);

		li.appendChild(text);
		ul.appendChild(li);
	}

}
