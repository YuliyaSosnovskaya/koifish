import classes from './withLabelHOC.module.css';

const WithLabel = ({label, component}) => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.label}>{label}</span>
      {component}
    </div>
  );
}

export default WithLabel;
