export default function Content({ $app, initialState }) {
    this.state = initialState;
    this.$target = document.createElement('div');
    this.$target.className = 'content';
    $app.appendChild(this.$target);

    this.template = () => {
        let temp = [];
        if(this.state) {
            this.state.forEach((el) => {
                temp += `<img src='${el.url}'>`
            });
        }
        return temp;
    }
    this.render = () => {
        this.$target.innerHTML = this.template()
    };
    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    // this.render(); // TabBar에서도 그렇고 이거 안써줘도 작동하는데 왜 굳이 또 써주는지 모르겠음.
}