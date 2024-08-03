export default function Content({ $app, initialState }) {
    this.state = initialState,
    this.$target = document.createElement('ul');
    this.$target.className = 'contents';
    $app.appendChild(this.$target);

    this.template = () => {
        let temp = [];
        if(this.state) {
            this.state.forEach((el) => {
                temp.push(`
                    <li class="item">
                    <div class="img">
                        <img src="${el.url}}" alt="">
                    </div>
                    <div class="title">${el.title}</div>
                </li>
                `)
            });
        }
        return temp;
    }
    this.render = () => {
        this.$target.innerHTML = this.template().join('')
    };
    this.setState = (newState) => {
        this.state = newState;
        this.render();
    }
    this.render();
};