import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  useField,
} from 'formik';

import * as Yup from 'yup';
import TextError from './TextError';
import icon from '../assets/Icon_Submit.svg';
import axios from 'axios';
import { useState } from 'react';
import FormResult from '../components/FormResult';

const postcodeRegExp =
  /^(([A-Z][0-9]{1,2})|(([A-Z][A-HJ-Y][0-9]{1,2})|(([A-Z][0-9][A-Z])|([A-Z][A-HJ-Y][0-9]?[A-Z])))) [0-9][A-Z]{2}$/;
const url =
  'https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit';

// This is the code to add the checkbox for the address fields
const AddAddress = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
const ContactForm = () => {
  const [showResult, setShowResult] = useState(false);
  const [resultTitle, setResultTitle] = useState('Your message has been sent');
  const [resultSubtitle, setResultSubtitle] = useState(
    'We will be in contact with you within 24 hours.'
  );
  const [errors, setErrors] = useState([]);
  const [valid, setValid] = useState(true);

  const initialValues = {
    fullName: '',
    emailAddress: '',
    message: '',
    phoneNumbers: [''],
    bIncludeAddressDetails: false,
    address1: '',
    address2: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
  };
  const onSubmit = async (values) => {
    let data;

    try {
      console.log('form values', values);
      const axiosConfig = {
        headers: { Accept: 'application/json' },
      };
      const resp = await axios.post(url, values, axiosConfig);
      data = resp.data;
    } catch (error) {
      data = error.response.data;
      setResultTitle('Unfortunately your message is incomplete');
      setResultSubtitle('Please correct the following errors:');
      setErrors(data.Errors);
      setValid(false);
    } finally {
      setShowResult(true);
    }
  };
  // Note validation on the address fields is done at the field level, not in the schema otherwise the form will be prevented from submitting by the schema regardless if address fields are rendered.
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Name is required'),
    emailAddress: Yup.string()
      .email('Invalid email address')
      .required('Please enter a valid email address'),
    message: Yup.string()
      .max(500, 'Message is limited  to 500 characters')
      .required('Please provide your message'),
  });

  const isRequired = (value) => {
    let error;
    if (!value) {
      error = 'Required';
    }
    return error;
  };

  const validatePhone = (value) => {
    let error;
    if (value.length > 20) {
      error = 'Phone number cannot exceed 20 characters';
    }
    return error;
  };
  const validatePostcode = (value) => {
    let error;
    const postcodeOK = postcodeRegExp.test(value);
    console.log(postcodeOK);
    if (!postcodeOK) {
      error = 'Invalid UK postcode';
    }
    return error;
  };

  if (showResult) {
    return (
      <FormResult
        title={resultTitle}
        subTitle={resultSubtitle}
        valid={valid}
        errors={errors}
      />
    );
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <div className="gridrow">
            <div className="input-container grid-input">
              <label htmlFor="fullName">Full Name</label>
              <Field
                className=" full-width"
                type="text"
                id="fullName"
                name="fullName"
              />
              <ErrorMessage name="fullName" component={TextError} />
            </div>
            <div className="input-container">
              <label htmlFor="emailAddress">Email address</label>
              <Field
                className=" full-width"
                type="text"
                id="emailAddress"
                name="emailAddress"
              />
              <ErrorMessage name="emailAddress" component={TextError} />
            </div>
          </div>

          <div className="input-container">
            <FieldArray name="phoneNumbers">
              {(fieldArrayProps) => {
                const { push, form } = fieldArrayProps;
                const { values } = form;
                const { phoneNumbers } = values;
                return (
                  <div>
                    {phoneNumbers.map((num, index) => (
                      <div className="input-container" key={index}>
                        <label htmlFor="phone1">
                          Phone number {index + 1}
                          <i>- optional</i>
                        </label>
                        <Field
                          className="full-width"
                          type="text"
                          name={`phoneNumbers[${index}]`}
                          validate={validatePhone}
                        />
                        {index === phoneNumbers.length - 1 && (
                          <button
                            type="button"
                            className="phone-button"
                            onClick={() => {
                              push('');
                            }}
                          >
                            Add new phone number
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
          </div>
          <div className="input-container">
            <div className="textarea-header">
              <label htmlFor="message">Message</label>
              <span className="message-limit">
                Message text length is 500 characters
              </span>
            </div>

            <Field
              as="textarea"
              className=" full-width"
              id="message"
              name="message"
            />
            <ErrorMessage name="message" component={TextError} />
          </div>
          <AddAddress name="bIncludeAddressDetails">
            Add address details
          </AddAddress>

          {formik.values.bIncludeAddressDetails && (
            <>
              <div className="gridrow">
                <div className="input-container grid-input">
                  <label htmlFor="address1">Address line 1</label>
                  <Field
                    className=" full-width"
                    type="text"
                    id="address1"
                    name="address1"
                    validate={isRequired}
                  />
                  <ErrorMessage name="address1" component={TextError} />
                </div>

                <div className="input-container">
                  <label htmlFor="address2">
                    Address line 2 <i>optional</i>{' '}
                  </label>
                  <Field
                    className=" full-width"
                    type="text"
                    id="address2"
                    name="address2"
                  />
                  <ErrorMessage name="address2" component={TextError} />
                </div>
              </div>
              <div className="address-grid">
                <div className="input-container">
                  <label htmlFor="city">City</label>
                  <Field
                    className=" full-width"
                    type="text"
                    id="city"
                    name="city"
                    validate={isRequired}
                  />
                  <ErrorMessage name="city" component={TextError} />
                </div>
                <div className="input-container">
                  <label htmlFor="state">State/County</label>
                  <Field
                    className=" full-width"
                    type="text"
                    id="state"
                    name="state"
                    validate={isRequired}
                  />
                  <ErrorMessage name="state" component={TextError} />
                </div>
                <div className="input-container">
                  <label htmlFor="postcode">Postcode</label>
                  <Field
                    className=" full-width"
                    type="text"
                    id="postcode"
                    name="postcode"
                    validate={validatePostcode}
                  />
                  <ErrorMessage name="postcode" component={TextError} />
                </div>
                <div className="input-container">
                  <label htmlFor="country">Country</label>
                  <Field
                    className=" full-width"
                    type="text"
                    id="country"
                    name="country"
                    validate={isRequired}
                  />
                  <ErrorMessage name="country" component={TextError} />
                </div>
              </div>
            </>
          )}
          <div style={{ position: 'relative' }}>
            <button type="submit" className="submit-button">
              Submit
              <img src={icon} alt="" className="overlay" />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default ContactForm;
