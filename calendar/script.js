const newDdate = new Date();
let beforeMonth;
let beforeYear;
let NextMonth;
let NextYear;
let thisMonth;
let thisYear;

const loadCalendarTitle = (thisMonth, thisYear) => {
    document.querySelector('.month').innerText = thisMonth;
    document.querySelector('.year').innerText = thisYear;

    loadCalendarDates(thisMonth, thisYear);
    checkToday(thisMonth, thisYear);
}

const loadCalendarDates = (thisMonth, thisYear) => {
    const thisMonthLast = new Date(thisYear, thisMonth, 0); // 현재 월의 마지막 날을 구함.
    const thisMonthLastDate = thisMonthLast.getDate(); // 이번 달의 마지막 날짜를 가져옴

    const prevMonthLast = new Date(thisYear, thisMonth - 1, 0); // 지난 달의 마지막 날
    const prevMonthLastDate = prevMonthLast.getDate(); // 지난 달의 마지막 날짜를 가져옴
    const prevMonthLastDay = prevMonthLast.getDay() + 1; // 지난 달의 마지막 요일 가져옴

    const datesArray = Array.from({ length: thisMonthLastDate }, (_, index) => index + 1); // 첫번째 인자 _는 현재 요소의 값. 여기서는 중요하지 않기 때문에 이 매개변수를 사용하지 않는 의미로 자주 사용되는 관용표현임.
    if (prevMonthLastDay <= 6){
        for (let i = 0; i<prevMonthLastDay; i++) {
            datesArray.unshift('');
        }
    }
    
    const dates = document.querySelector('.dates');
    while (dates.firstChild) {
        dates.removeChild(dates.firstChild);
    }
    datesArray.forEach(i => {
        let div = document.createElement('div');
        let span = document.createElement('span');
        div.className = 'date';
        span.textContent = i;
        dates.appendChild(div);
        div.appendChild(span);
    })
}

const checkToday = (thisMonth, thisYear) => {
    const today = new Date();
    if (thisMonth === (today.getMonth() + 1) && thisYear === today.getFullYear()) {
        for (let date of document.querySelectorAll('.date')){
            if(parseInt(date.innerText) === today.getDate()){
                date.classList.add('today');
                break;
            }
        }
    }
}

const loadBeforeMonth = () => {
    let beforeMonth = thisMonth - 1;
    if (beforeMonth < 1) {
        beforeMonth = 12;
        thisMonth = beforeMonth;
        thisYear = thisYear - 1;
        loadCalendarTitle(thisMonth, thisYear);
    } else {
        thisMonth = beforeMonth;
        loadCalendarTitle(thisMonth, thisYear);
    }
};

const loadNextMonth = () => {
    let nextMonth = thisMonth + 1;
    if (nextMonth > 12) {
        nextMonth = 1;
        thisMonth = nextMonth;
        thisYear = thisYear + 1;
        loadCalendarTitle(thisMonth, thisYear);
    } else {
        thisMonth = nextMonth;
        loadCalendarTitle(thisMonth, thisYear);
    }
}

window.onload = function() {
    thisMonth = newDdate.getMonth() + 1;
    thisYear = newDdate.getFullYear();
    loadCalendarTitle(thisMonth, thisYear);

    const beforeMonthBtn = document.querySelector('.nav-before');
    beforeMonthBtn.addEventListener('click', loadBeforeMonth);
    const nextMonthBtn = document.querySelector('.nav-after');
    nextMonthBtn.addEventListener('click', loadNextMonth);
}