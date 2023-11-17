import { FC } from "react";
import s from "./InfoBlock.module.scss";
import photo from "../../../common/images/photo.jpg";
import { IconsBlock } from "../../homePage/icons/IconsBlock";
import { MainData } from "../../../DATA/MainComponenetData";
import { PersonalDataType } from "../../../DATA/BlockAboutData";
import { cvLink } from "../../../DATA/BlockAboutData";

type PersonalInfoPropsType = {
  data: PersonalDataType;
};

export const PersonalInfoBlock: FC<PersonalInfoPropsType> = ({ data }) => {
  const infoItems = data.map((item, index) => {
    return (
      <ul key={index} className={s.items}>
        <li>
          {item[0]}
          <span>{item[1]}</span>
        </li>
      </ul>
    );
  });

  return (
    <div className={s.personalInfoBlock}>
      <div className={s.photoBlock}>
        <img src={photo} alt="photo" />
      </div>
      <div className={s.infoBlock}>
        <h3>Personal Information</h3>
        {infoItems}
      </div>
      <div className={s.contacts}>
        <div className={s.icons}>
          <IconsBlock data={MainData.icons} className={s.iconLink} />
        </div>
        <a
          href={cvLink}
          target={"_blank"}
          rel={"noreferrer"}
          className={s.linkToCV}
        >
          Download CV
        </a>
      </div>
    </div>
  );
};
