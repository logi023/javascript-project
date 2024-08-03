const API_URL = '../resources/dummy.json';

export const request = async () => {
    let response = await fetch(API_URL);
    try {
        if(response) {
            let data = await response.json();
            return data.photos;
        }
    } catch(err) {
        console.log(err)
    }
}