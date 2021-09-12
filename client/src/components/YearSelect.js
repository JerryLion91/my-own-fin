import React from 'react';
import M from 'materialize-css';

export default function YearSelect({ value }) {
  React.useEffect(() => {
    M.FormSelect.init(document.querySelectorAll('select'), {});
  }, []);
  return (
    <div className="input-field col s3">
      <select
        defaultValue={value}
        onChange={({ target }) => console.log(target.value)}
      >
        <option value="0">2021</option>
        <option value="1">2020</option>
        <option value="2">2019</option>
      </select>
      <label>Year</label>
    </div>
  );
}
