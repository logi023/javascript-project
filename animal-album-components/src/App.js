import TabBar from "./components/TabBar.js";
import Content from "./components/Content.js";
import { request } from "./components/api.js";

export default function App($app) {
    // 컴포넌트들에 필요한 상태를 정의하고, 초기값을 정함.
    this.state = {
        currentTab: window.location.pathname.replace('/', '') || 'all',
        // currentTab: 'all',
        photos: [], // content 컴포넌트에 표시될 사진들을 담을 배열
    };

    const tabBar = new TabBar({
        $app,
        initialState: '',
        onClick: async (name) => {
            // url 변경
            history.pushState(null, `${name} 사진`, name === 'all' ? '/' : name);
            this.updateContent(name);
        }
    });
    const content = new Content({
        $app,
        initialState: [],
    });

    // 상태들을 업데이트 해주는 역할
    this.setState = (newState) => { // 업데이트 할 새로운 값을 매개변수로 받음
        this.state = newState; // 매개변수로 전달받은 값을 this.state에 할당해 state 값을 새로운 값으로 업데이트.

        // app 컴포넌트에서는 상태가 업데이트 될 때마다 tabBar와 content 컴포넌트도 업데이트 해주어야 함.
        // this.state에서 정의한 상태를 아래의 TabBar와 Content에 인수로 전달해준다.
        tabBar.setState(this.state.currentTab);
        content.setState(this.state.photos);
    };

    this.updateContent = async (tabName) => {
        try {
            const currentTab = tabName === 'all' ? '' : tabName;
            const photos = await request(currentTab);
            this.setState({
                ...this.state,
                currentTab: tabName,
                photos: photos,
            })
        } catch(error) {
            console.log(error)
        }
    }

    window.addEventListener('popstate', async () => {
        this.updateContent(window.location.pathname.replace('/', ''));
    })

    const init = async () => {
        this.updateContent(this.state.currentTab);
    }
    init();
};