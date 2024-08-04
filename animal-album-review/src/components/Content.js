export default function Content({ $app, initialState }) {
    this.state = initialState,
    this.$target = document.createElement('ul');
    this.$target.className = 'contents';
    $app.appendChild(this.$target);

    this.template = () => {
        return this.state.map((el) => `
            <li class="item">
                <div class="img">
                    <img src="${el.url}}" alt="">
                </div>
                <div class="title">${el.title}</div>
            </li>
        `).join('');
    }
    this.render = () => {
        this.$target.innerHTML = this.template();
    };
    this.setState = (newState) => {
        this.state = newState;
        this.render();
    }
    this.render();
};