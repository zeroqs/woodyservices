import React from 'react';
import {Field, Formik} from "formik";
import * as yup from 'yup'
import styles from "./Form.module.scss";
import MaskedInput from "react-text-mask";


function Form() {
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
    name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    Problem: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    Model: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    phone: yup.string().required('Обязательно'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          Model: '',
          Problem: '',
        }}
        validateOnBlur
        onSubmit={(values) => { }} // Отправка формы
        validationSchema={schema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className={styles.ModalForms}>
            <div className={styles.ModalName}>
              <input
                placeholder={`Ваше имя`}
                type={`text`}
                name={`name`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.name && errors.name && <p className={styles.Error}>{errors.name}</p>}
            </div>
            <div className={styles.ModalPhone}>
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
              {touched.phone && errors.phone && <p className={styles.Error}>{errors.phone}</p>}
            </div>
            <div className={styles.ModalModel}>
              <input
                placeholder={`Укажите производителя и модель устройтва`}
                type={`text`}
                name={`Model`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Model}
              />
              {touched.Model && errors.Model && <p className={styles.Error}>{errors.Model}</p>}
            </div>
            <div className={styles.ModalProblem}>
              <textarea
                placeholder={`Опишите проблему`}
                type={`text`}
                name={`Problem`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Problem}
              />
              {touched.Problem && errors.Problem && <p className={styles.Error}>{errors.Problem}</p>}
              <div className={styles.buttonSection}>
                <button
                  className={styles.button}
                  disabled={!isValid && !dirty}
                  onClick={handleSubmit}
                  type={`submit`}
                >
                  Заказать ремонт
                </button>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default Form;