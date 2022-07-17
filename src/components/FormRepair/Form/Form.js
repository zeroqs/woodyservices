import React from 'react';
import * as yup from "yup";
import {Field, Formik} from "formik";
import styles from "./Form.module.scss";
import { SelectPicker } from 'rsuite';
import MaskedInput from "react-text-mask";
import './FormSelect.scss'
function Form({Models}) {
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
    <div className={styles.Formik}>
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
              <SelectPicker placeholder="Выберите производителя" className="Select" data={Models} searchable={false} style={{ width: 300 }} />
            </div>
            <div className={styles.Vendor}>
              <SelectPicker placeholder="Выберите модель" className="Select" data={Models} searchable={false} style={{ width: 300 }} />
            </div>
            <div className={styles.ModalProblem}>
              <textarea
                placeholder={`Детальное описание проблемы`}
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