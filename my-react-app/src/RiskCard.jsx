import './RiskCard.css';

function Gauge({ score = 72, size = 88 }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.max(0, Math.min(1, score / 100)));

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="gauge">
      <defs>
        <linearGradient id="g1" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#0ea5f9" />
        </linearGradient>
      </defs>
      <g transform="translate(10,10)">
        <circle cx="40" cy="40" r={radius} className="g-bg" />
        <circle cx="40" cy="40" r={radius} className="g-fg" strokeDasharray={`${circumference}`} strokeDashoffset={offset} />
        <text x="40" y="44" textAnchor="middle" className="g-text">{Math.round(score)}%</text>
      </g>
    </svg>
  );
}

function RiskCard({ title = 'Security Score', score = 72, trackers = [], status = 'Legitimate' }) {
  const statusClass = `status-badge ${status.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <article className="risk-card">
      <div className="card-top">
        <div className="card-title">{title}</div>
        <div className="card-gauge"><Gauge score={score} /></div>
      </div>
      <div className="card-body">
        <div className="trackers">
          <div className="trackers-title">Detected trackers</div>
          {trackers.length ? (
            <ul>
              {trackers.map((t,i) => <li key={i}>{t}</li>)}
            </ul>
          ) : (
            <div className="no-trackers">None detected</div>
          )}
        </div>
        <div className={statusClass}>{status}</div>
      </div>
    </article>
  );
}

export default RiskCard;
