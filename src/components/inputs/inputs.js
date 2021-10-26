import classes from './inputs.module.css';

export const TextInput = ({value, onChange, isValid, isTouched}) => {
  const cssClass = [classes.textInput];

  if (isTouched) {
    isValid ? cssClass.push(classes.valid) : cssClass.push(classes.notValid);
  }
  return (
    <input type='text' className={cssClass.join(' ')} value={value} isValid={isValid} onChange={onChange} />
  );
}

export const DropdawnInpupt = ({value, options, onChange}) => {

  return(
    <select value={value} onChange={onChange} className={classes.dropdawn}>
      {
        options.map((option) => (
          <option value={option} key={option}>{option}</option>
        ))
      }
    </select>
  )
}

export const CheckboxInput = ({onChange, checked, id}) => {
  return (
    <>
      <input id={id} name={id} type='checkbox' className={classes.checkboxInput} checked={checked} onChange={onChange} />
      <label htmlFor={id}></label>
    </>
  )
}

export const RadioButton = ({checked, onChange, values, title}) => {
  return (
    <div className={classes.radioButtonWrapper}>
      <div className={classes.radioButtonTitle}>{title}</div>
      {
        values.map((value) => (
          <div className={classes.oneRadio} key={value}>
            <input type="radio" id ={value} value={value} checked={checked === value} onChange={onChange}/>
            <label htmlFor={value} >{value}</label>
          </div>
        ))
      }
    </div>
  );
}
