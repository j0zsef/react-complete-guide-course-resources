import { forwardRef } from "react";

export default forwardRef(function Input({ label, id, error, ...props }, ref) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input ref={ref} id={id} {...props} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
});
