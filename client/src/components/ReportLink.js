import React from 'react';
import { Link } from 'react-router-dom';

import M from 'materialize-css';

export default function ReportLink() {
  return (
    <div className="mst col s4">
      <Link
        to="/"
        className="btn"
        onClick={() => M.toast({ html: 'Not Developed!' })}
      >
        Report
      </Link>
    </div>
  );
}
