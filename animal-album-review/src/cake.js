const API_URL = '../resources/dummy.json';

const getData = async (_name) => {
    let response = await fetch(API_URL);

    let itemList = [];
    const $contents = document.querySelector('.contents');

    try {
        if(response) {
            let data = await response.json();
            const thisData = data.photos.filter(photo => photo.name === _name)
            thisData.forEach(el => {
                itemList.push(
                    `
                    <li class="item">
                        <div class="img">
                            <img src="${el.url}">
                        </div>
                        <div class="title">${el.title}</div>
                    </li>
                    `
                )
            });
            $contents.innerHTML = itemList.join(' ');
        }
    } catch(err) {
        console.log(err)
    }
}
getData('cake');