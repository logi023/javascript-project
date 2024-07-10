

window.onload = function() {
    const newDdate = new Date();

    document.querySelector('.year').innerText = newDdate.getFullYear();
    document.querySelector('.month').innerText = newDdate.getMonth() + 1;

    // console.log(new Date(date.getFullYear(), date.getMonth() + 1, 0)); // 현재 달의 마지막 날을 구함. --> Wed Jul 31 2024 00:00:00 GMT+0900 (한국 표준시)
    // console.log((new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDate()) // 현재 달의 마지막 날의 '날짜'를 구함. --> 31
    // console.log((new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDay()) // 0은 일요일, 1은 월요일 ... 6은 토요일 --> 3

    const thisMonthLast = new Date(newDdate.getFullYear(), newDdate.getMonth() + 1, 0); // 현재 월의 마지막 날을 구함.
    const thisMonthLastDate = thisMonthLast.getDate(); // 이번 달의 마지막 날짜를 가져옴

    const prevMonthLast = new Date(newDdate.getFullYear(), newDdate.getMonth(), 0); // 지난 달의 마지막 날
    const prevMonthLastDate = prevMonthLast.getDate(); // 지난 달의 마지막 날짜를 가져옴
    const prevMonthLastDay = prevMonthLast.getDay() + 1; // 지난 달의 마지막 요일 가져옴
    console.log(prevMonthLast)
    console.log(prevMonthLastDay)

    const datesArray = Array.from({ length: thisMonthLastDate }, (_, index) => index + 1); // 첫번째 인자 _는 현재 요소의 값. 여기서는 중요하지 않기 때문에 이 매개변수를 사용하지 않는 의미로 자주 사용되는 관용표현임.
    for (let i = 0; i<prevMonthLastDay; i++) {
        datesArray.unshift('');
    }
    // console.log(datesArray)
    const dates = document.querySelector('.dates');
    datesArray.forEach(i => {
        let div = document.createElement('div');
        let span = document.createElement('span');
        div.className = 'date';
        span.textContent = i;
        dates.appendChild(div);
        div.appendChild(span);
    })
}