const input = document.getElementById('input');
const btn = document.getElementById('btn');
const characterInfoDiv = document.getElementById('block');
function rick() {
    const name = input.value.trim();
    if (!name) {
        alert(" ismni kiriting!");
        return;
    }

    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const character = data.results[0];
                characterInfoDiv.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <p><strong>Ism:</strong> ${character.name}</p>
      <p><strong>Status:</strong> ${character.status}</p>
    `;
            } else {
                characterInfoDiv.innerHTML = `<p> topilmadi.</p>`;
            }
        })
        .catch(error => {
            characterInfoDiv.innerHTML = `<p>Xatolik yuz berdi</p>`;
        });
}
btn.addEventListener('click', rick);