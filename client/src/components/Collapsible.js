import React from 'react';
import M from 'materialize-css';

export default function Collapsible() {
  React.useEffect(() => {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {
      accordion: false,
    });
  }, []);
  return (
    <div>
      <ul className="collapsible expandable">
        <li>
          <div className="collapsible-header">
            <i className="material-icons">paid</i>Income
          </div>
          <div className="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">add_shopping_cart</i>Expenses
          </div>
          <div className="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
