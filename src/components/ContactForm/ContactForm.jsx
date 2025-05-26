import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import { useId } from "react";
import style from "./ContactForm.module.css";

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

export default function ContactForm() {
  const dispatch = useDispatch();
  const initialValues = { name: "", number: "" };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
    addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    })
  );
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .matches(/^[0-9+()\-\s]*$/, "Invalid phone number format")
      .required("Number is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={style.form}>
        <label className={style.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={style.input} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={style.error} name="name" component="span" />

        <label className={style.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={style.input}
          type="tel"
          inputMode="numeric"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage className={style.error} name="number" component="span" />
        <button className={style.btnAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}