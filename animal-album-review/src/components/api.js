const API_URL = '../resources/dummy.json';

export const request = async (name) => {
    try {
        let response = await fetch(API_URL);
        if(response.ok) {
            let data = await response.json();
            let filteredData;

            if (name) {
                filteredData = data.photos.filter(photo => photo.name === name)
            } else {
                filteredData = data.photos;
            }

            return filteredData.map(el => ({
                url: el.url,
                title: el.title
            }));

        }
    } catch(err) {
        console.log(err)
    }
}