import { FC } from "react";
import s from "./AddMessageForm.module.scss";
import { DataType, formAPI } from "../../../api/API";
import { useFormik } from "formik";
import { Button } from "../../../common/button/Button";

// type FormikErrorType = {
//     name: string
//     email: string
//     textMessage: string
// }

type AddMessageFormPropsType = {
  changeFormView: (value: boolean) => void;
};
export const AddMessageForm: FC<AddMessageFormPropsType> = ({
  changeFormView,
}) => {
  async function send(data: DataType) {
    await formAPI.sendMessage(data).then(() => {
      changeFormView(true);
    });
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      textMessage: "",
    },

    // validate: (values) => {
    //     const errors: FormikErrorType = {name: '', email: '', textMessage: ''};
    //     if (!values.name) {
    //         errors.name = 'Name Is Required';
    //     }
    //     if (!values.email) {
    //         errors.email = 'Email Is Required';
    //     }
    //     if (!values.textMessage) {
    //         errors.textMessage = 'Message Is Required';
    //     }
    //     return errors;
    // },

    onSubmit: (values) => {
      send(values);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={s.forms}>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        className={s.input}
        placeholder={"Name*"}
      />

      {/* {formik.touched.name && formik.errors.name && <div style={{ color: "red" }}>
                {formik.errors.name}
                </div>} */}

      <input
        id="phone"
        name="phone"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phone}
        className={s.input}
        placeholder={"Phone"}
      />
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className={s.input}
        placeholder={"Email*"}
      />
      {/* {formik.touched.email && formik.errors.email && (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      )} */}
      <input
        id="subject"
        name="subject"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.subject}
        className={s.input}
        placeholder={"Subject"}
      />
      <textarea
        id="textMessage"
        name="textMessage"
        onChange={formik.handleChange}
        value={formik.values.textMessage}
        className={s.inputMessage}
        placeholder={"Your Message*"}
      />
      {/* {formik.touched.textMessage && formik.errors.textMessage && (
        <div style={{ color: "red" }}>
          {formik.errors.textMessage}
        </div>
      )} */}
      <div className={s.submitBtn}>
        <Button type="submit" name={"Send"} callback={() => {}} />
      </div>
    </form>
  );
};
