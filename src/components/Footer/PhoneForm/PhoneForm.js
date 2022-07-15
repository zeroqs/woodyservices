import React from 'react';
import {Field, Formik} from "formik";
import * as yup from 'yup'
import MaskedInput from "react-text-mask";
import './PhoneForm.scss'
import send from './send.svg'

function PhoneForm() {
  const phoneNumberMask = [
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];
  const schema = yup.object().shape({
    phone: yup.string().required('Обязательно'),
  });

  return (
    <div className="PhoneForm">
      <Formik
        initialValues={{
          phone: '',
        }}
        validateOnBlur
        onSubmit={(values) => { }} // Отправка формы
        validationSchema={schema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <Field
            name="phone"
            render={({ field }) => (
              <MaskedInput
                {...field}
                mask={phoneNumberMask}
                id="phone"
                placeholder="Ваш номер телефона"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.phone && touched.phone
                    ? "text-input error"
                    : "text-input"
                }
              />
            )}
          />
        )}
      </Formik>
      <div className="ButtonFooter">
        <button><img src={send} alt=""/></button>
      </div>
    </div>
  )
}

export default PhoneForm;