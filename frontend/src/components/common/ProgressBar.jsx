import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="bprogress">
      <div className="bar">
        <div className="peg" />
      </div>
      <div className="spinner">
        <div className="spinner-icon" />
      </div>
      <div className="indeterminate">
        <div className="inc" />
        <div className="dec" />
      </div>
    </div>
  ) : null;
}