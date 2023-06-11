import icon from '../assets/Icon_Valid.svg';
const FormResult = (props) => {
  const { title, subTitle, valid, errors } = props;
  console.log('errors from FormResult component', errors);
  return (
    <div className="form-result">
      {valid ? <img src={icon} alt="" className="result-icon" /> : null}
      <div>
        <p>{title}</p>
        <p style={{ fontSize: '0.8rem', padding: '0 0 0.9rem 0' }}>
          {subTitle}
        </p>
        {errors.map((error, index) => {
          return (
            <p className="error-msg" key={index}>
              {error.FieldName} : {error.MessageCode}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default FormResult;
