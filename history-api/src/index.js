// 버튼을 누르면 알맞은 페이지로 이동할 수 있도록 함수 생성.
const changePage = (page) => {
    let $content = document.getElementById('content');
    $content.textContent = `현재 보고 있는 페이지는 ${page} 페이지 입니다.`;
    history.pushState({ page: page }, `Title ${page}`, `/${page}`);
}

// popState
window.addEventListener('popstate', (event) => { // event: pushState로 전달된 상태객체임.
    if(event.state) {
        let $content = document.getElementById('content');
        $content.textContent = `현재 보고 있는 페이지는 ${event.state.page} 페이지 입니다.`;
    }
})

// addEventListener를 사용해서 버튼 요소들을 클릭할 때 체인지페이지 함수가 실행될 수 있도록 ㅋ
document.getElementById('page1').addEventListener('click', () => {
    changePage('page1')
});
document.getElementById('page2').addEventListener('click', () => {
    changePage('page2')
});
document.getElementById('page3').addEventListener('click', () => {
    changePage('page3')
});


const goBack = () => {
    history.back();
}
const goForward = () => {
    history.forward();
}
document.getElementById('goBack').addEventListener('click', () => {
    goBack();
})
document.getElementById('goForward').addEventListener('click', () => {
    goForward();
})