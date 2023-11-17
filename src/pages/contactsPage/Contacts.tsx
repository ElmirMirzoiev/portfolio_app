import { useState } from "react";
import s from "./Contacts.module.scss";
import c from "../../common/styles/Container.module.scss";
import { BlockTitle } from "../../common/blockTitle/BlockTitle";
import { ContactItem } from "./contactItem/ContactItem";
import { ContactsData } from "../../DATA/ContactsData";
import { AddMessageForm } from "./addMessageForm/AddMessageForm";

export const Contacts = () => {
  const [isMessageSend, setIsMessageSend] = useState<boolean>(false);

  const contactElements = ContactsData.contactItems.map((c) => {
    return (
      <ContactItem key={c.id} title={c.title} text={c.text}>
        {<c.icon />}
      </ContactItem>
    );
  });

  return (
    <div className={c.container}>
      <BlockTitle title={ContactsData.blockTitle.title} />
      <div className={s.formsContent}>
        <div className={s.formsBlock}>
          <div className={s.contactInfoBlock}>{contactElements}</div>
          {isMessageSend ? (
            <div className={s.messageSent}>Message has been sent</div>
          ) : (
            <AddMessageForm changeFormView={setIsMessageSend} />
          )}
        </div>
      </div>
    </div>
  );
};
