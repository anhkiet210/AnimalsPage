const FormInput = (props) => {
  return (
    <div className="form-input">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        readOnly={props.readOnly}
        defaultValue={props.defaultValue}
        required={props.required}
        minLength={props.minLength}
        maxLength={props.maxLength}
      />
    </div>
  );
};
export default FormInput;
