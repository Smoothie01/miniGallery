import Gallery from "./Gallery";
import {connect} from "react-redux";
import {addGalleryAC} from "../../redux/gallery-reducer";

let mapStateToProps = (state: any) => {
    return {
        gallery: state.gallery.galleryData
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addGallery: (data: object) => {
            dispatch(addGalleryAC(data))
        }
    }
}
const GalleryComponent = connect(mapStateToProps, mapDispatchToProps)(Gallery)
export default GalleryComponent
