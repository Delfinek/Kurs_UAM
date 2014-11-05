var list_elements = []

document.getElementById('add_button').addEventListener('click', function () {
			var task = document.getElementById('new_element').value;
			var entry = document.createElement('div');
			entry.appendChild(document.createTextNode(task));
			list.appendChild(entry);

			document.getElementById('new_element').value= "";
		});