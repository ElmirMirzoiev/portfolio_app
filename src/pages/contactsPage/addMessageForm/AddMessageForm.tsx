import { FC } from "react";
import s from "./AddMessageForm.module.scss";
import { useFormik, FormikErrors } from "formik";
import { Button } from "../../../common/button/Button";

interface FormikErrorsType {
  name: string;
  email: string;
  textMessage: string;
}

type AddMessageFormPropsType = {
  changeFormView: (value: boolean) => void;
};

export const AddMessageForm: FC<AddMessageFormPropsType> = ({
  changeFormView,
}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      textMessage: "",
    },

    validate: (values) => {
      const errors: FormikErrors<FormikErrorsType> = {};
      if (!values.name) {
        errors.name = "Name Is Required";
      }
      if (!values.email) {
        errors.email = "Email Is Required";
      }
      if (!values.textMessage) {
        errors.textMessage = "Message Is Required";
      }
      return errors;
    },

    onSubmit: (values) => {
      changeFormView(true);
      console.log(values);
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
        onBlur={formik.handleBlur}
        value={formik.values.name}
        className={s.input}
        placeholder={"Name*"}
      />
      {formik.touched.name && formik.errors.name && (
        <div style={{ color: "red" }}>{formik.errors.name}</div>
      )}

      <input
        id="phone"
        name="phone"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        className={s.input}
        placeholder={"Phone"}
      />

      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={s.input}
        placeholder={"Email*"}
      />
      {formik.touched.email && formik.errors.email && (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      )}

      <input
        id="subject"
        name="subject"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.subject}
        onBlur={formik.handleBlur}
        className={s.input}
        placeholder={"Subject"}
      />
      <textarea
        id="textMessage"
        name="textMessage"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.textMessage}
        className={s.inputMessage}
        placeholder={"Your Message*"}
      />
      {formik.touched.textMessage && formik.errors.textMessage && (
        <div style={{ color: "red" }}>{formik.errors.textMessage}</div>
      )}

      <div className={s.submitBtn}>
        <Button type="submit" name={"Send"} callback={() => {}} />
      </div>
    </form>
  );
};
