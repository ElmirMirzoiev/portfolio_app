import s from "./PhotoBlock.module.scss";
import photo from "../../../common/images/photo.jpg";

const PhotoBlock = () => {

    return (
        <div className={s.photoBlock}>
            <img src={photo} alt={'photo'} className={s.photo}/>
        </div>
    );
};

export default PhotoBlock;