import { useState } from 'react';

const MOODS = [
  { id: 'great', face: '😄', label: 'Great', color: '#4dd4ac' },
  { id: 'okay', face: '🙂', label: 'Okay', color: '#ffc145' },
  { id: 'meh', face: '😐', label: 'Meh', color: '#9aa3b5' },
  { id: 'low', face: '😔', label: 'Low', color: '#7c5cff' },
];

export default function App() {
  const [log, setLog] = useState([]);

  const add = (mood) => setLog((l) => [{ ...mood, at: new Date() }, ...l].slice(0, 12));
  const counts = MOODS.map((m) => ({ ...m, n: log.filter((e) => e.id === m.id).length }));
  const most = Math.max(1, ...counts.map((c) => c.n));

  return (
    <main>
      <h1>How are you, right now?</h1>
      <div className="moods">
        {MOODS.map((m) => (
          <button key={m.id} onClick={() => add(m)} style={{ '--c': m.color }}>
            <span className="face">{m.face}</span>
            {m.label}
          </button>
        ))}
      </div>

      <section className="bars">
        {counts.map((c) => (
          <div key={c.id} className="bar">
            <div className="fill" style={{ height: `${(c.n / most) * 100}%`, background: c.color }} />
            <span>{c.n}</span>
          </div>
        ))}
      </section>

      <ul className="log">
        {log.length === 0 && <li className="empty">Tap a mood to start.</li>}
        {log.map((e, i) => (
          <li key={i}>
            {e.face} {e.label}
            <time>{e.at.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</time>
          </li>
        ))}
      </ul>
    </main>
  );
}
