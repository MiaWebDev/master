import React from "react";

const Javob = props => {
  let cls = ['btn', 'btn-sm', 'text-start', 'mb-3'];
  if (props.activeResult) {
    cls.push('btn-outline-' + props.activeResult);
  } else {
    cls.push('btn-outline-primary');

  }
  return (
    <li className={cls.join(' ')} onClick={props.onBosildi.bind(this, props.javob.id)}>
      {props.javob.id}. {props.javob.text}
    </li>
  );
};

export default Javob;