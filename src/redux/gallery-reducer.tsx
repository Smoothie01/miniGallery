const exampleImage = 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/103700000/original/a1a5e89c2f78ff43b87ab7558d16fb820ec02b7a/draw-your-photo-into-my-anime-style.jpg'
let initialState = {
    galleryData: [
        {id: 1, title: 'Title 1', url: exampleImage, text: 'Text about this post'},
        {id: 2, title: 'Title 2', url: exampleImage, text: 'Text about this post'},
        {id: 3, title: 'Title 3', url: exampleImage, text: 'Text about this post'},
        {id: 4, title: 'Title 4', url: exampleImage, text: 'Text about this post'},
        {id: 5, title: 'Title 5', url: exampleImage, text: 'Text about this post'},
        {id: 6, title: 'Title 6', url: exampleImage, text: 'Text about this post'}
    ],
}

const galleryReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD-GALLERY": {
            let newItem: object = {
                id: Date.now(),
                title: action.data.title,
                url: 'https://via.placeholder.com/450',
                text: action.data.text
            }
            return {
                ...state,
                galleryData: [...state.galleryData, newItem]
            }
        }
        default: {
            return state
        }
    }
}

export const addGalleryAC = (data:object) => {
    return {
        type: 'ADD-GALLERY',
        data:data
    }
}

export default galleryReducer
