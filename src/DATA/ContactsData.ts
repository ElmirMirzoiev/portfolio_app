import { BlockTitleType } from "./MainComponenetData";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import BusinessIcon from "@mui/icons-material/Business";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export type contactItemsType = {
  id: number;
  title: string;
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};
export type ContactsDataType = {
  blockTitle: BlockTitleType;
  contactItems: contactItemsType[];
};
export const ContactsData = {
  blockTitle: {
    title: "My Contacts",
  },

  contactItems: [
    { id: 1, 
      title: "Address", 
      text: "Sondershausen, Germany", 
      icon: BusinessIcon },
    {
      id: 2,
      title: "Email",
      text: "elmir.mirzoiev@outlook.com",
      icon: AlternateEmailIcon,
    },
    { id: 3, 
      title: "Phone", 
      text: "+491703488263", 
      icon: PhoneInTalkIcon },
  ],
};
