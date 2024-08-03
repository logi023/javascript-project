export default function TabBar({ $app, initialState, onClick }) {
    this.state = initialState;
    this.$target = document.createElement('div');
    this.$target.className = 'tab-bar';

    $app.appendChild(this.$target);
    this.onClick = onClick;
    
    this.template = () => {
        let temp = `<a href="javascript:;" id="all" class="tab">전체</a>
            <a href="javascript:;" id="cake" class="tab">케이크</a>
            <a href="javascript:;" id="coffee" class="tab">커피</a>
            <a href="javascript:;" id="icecream" class="tab">아이스크림</a>
        `;
        return temp;
    }

    this.render = () => {
        this.$target.innerHTML = this.template();

        let $currentTab = document.getElementById(this.state);
        $currentTab && ($currentTab.classList.add('active')); // currentTab이 있을 경우 currentTab의 className을 active로 지정

        const $tabBar = this.$target.querySelectorAll('a');
        $tabBar.forEach((el) => {
            el.addEventListener('click', () => {
                onClick(el.id);
                console.log(el)
            })
        })
    };
    this.setState = (newState) => {
        this.state = newState;
        this.render();
    }

    this.render();
};