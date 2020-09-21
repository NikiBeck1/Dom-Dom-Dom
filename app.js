document.addEventListener('DOMContentLoaded', function () {

    let colors = ['red', 'orange', 'gold', 'blue', 'green', 'purple'];
    let i = 1;
    let row = document.createElement('div');
    row.style.display = 'flex';
    document.body.appendChild(row);

    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.style.display = 'block';
    button.appendChild(btnText);
    document.body.appendChild(button);
    button.className = 'main-button';
    let container = document.createElement('div')
    document.body.appendChild(container)

    button.addEventListener('click', function () {
        let div = document.createElement('div');
        let idDiv = document.createElement('h1');
        idDiv.style.display = "none"
        div.appendChild(idDiv)
        row.appendChild(div);
        div.style.cssFloat = 'left'
        div.className = 'blackSquare';
        container.appendChild(div);
        div.id = i
        idDiv.innerText = i

        i++;
        div.style.backgroundColor = "black";
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.display = 'flex';
        div.addEventListener('click', function () {
            const randomNum = Math.floor((Math.random() * 5));
            div.style.backgroundColor = colors[randomNum];
        })

        div.addEventListener("mouseenter", function () {
            idDiv.style.display = "flex"
        })

        div.addEventListener("mouseleave", function () {
            idDiv.style.display = "none"
        })

        div.addEventListener('dblclick', function () {

            if (div.id % 2 === 0) {
                if (div.nextElementSibling) {
                    div.nextElementSibling.remove();
                } else {
                    alert('No square!');
                }
            } else if (div.id % 2 === 1) {
                if (div.previousElementSibling) {
                    div.previousElementSibling.remove();
                } else {
                    alert('No square!');
                }
            }
        })
    })
})