import React from "react";
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

const iconTypes = {
  "check": color => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

const TodoIcon = ({ type, color = 'gray', onClick }) => (
  <span
    className={`Icon-container Icon-container--${type}`}
    onClick={onClick}
  >
    {iconTypes[type](color)}
  </span>
);

export { TodoIcon };
