const API_URL = 'https://animal-api-two.vercel.app/';

const $content = document.querySelector('.content');
let template = [];

const getData = async (name) => { // 매개변수로 name 값 전달받기
    let res = await fetch(`${API_URL}${name}`); // api url의 뒤에 name값 추가
    try {
        if(res) {
            let data = await res.json();
            data.photos.forEach((element) => {
                template += `<img src=${element.url}>`;
            });
            console.log(template)
            $content.innerHTML = template; 
        }
    } catch(err) {
        console.log(err);
    }
}
getData('penguin'); // name값 전달