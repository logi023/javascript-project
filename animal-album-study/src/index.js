const API_URL = 'https://animal-api-two.vercel.app/';

const $content = document.querySelector('.content'); // 사진을 넣을 dom 요소 선택
let template = []; // 각 요소의 이미지를 담을 빈배열 생성

const getData = async () => {
    let res = await fetch(API_URL);
    try {
        if(res) {
            let data = await res.json(); // 불러온 값을 json으로
            data.photos.forEach((element) => {
                template += `<img src=${element.url}>`;
            });
            console.log(template)
            $content.innerHTML = template; // content div에 이미지태그들 집어넣기
        }
    } catch(err) {
        console.log(err);
    }
}
getData();