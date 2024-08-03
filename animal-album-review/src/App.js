import TabBar from "./components/TabBar.js";
import Content from "./components/Content.js";
import { request } from "./components/api.js";

export default function App($app) {
    this.state = { // 초기값
        currentTab: 'all', // 활성화 버튼
        photos: [], // content 컴포넌트에 표시될 사진들을 담을 배열
    };

    const tabBar = new TabBar({
        $app,
        initialState: this.state.currentTab, 
        onClick: async (name) => {
            this.setState({
                ...this.state,
                currentTab: name,
                photos: await request(name === 'all' ? '' : name),
            })
        },
    });
    const content = new Content({
        $app,
        initialState: [],
    });

    this.setState = (newState) => { // 업데이트 할 새로운 값을 매개변수로 전달받고
        this.state = newState; // 매개변수로 받은 값을 this.state에 할당해 state 값을 새로운 값으로 업데이트.

        // 상태가 업데이트 될 때마다 tabBar와 content 컴포넌트도 업데이트 해주어야 하므로
        // this.state에서 정의한 상태를 아래의 tabBar 객체와 content 객체에 인수로 전달해준다.
        tabBar.setState(this.state.currentTab);
        content.setState(this.state.photos);
        
        this.render();
    };

    const init = async () => {
        try {
            const initialPhotos = await request();
            this.setState({
                ...this.state,
                photos: initialPhotos,
            });
        } catch (error) {
            console.log(error);
        }
    }
    init();
};