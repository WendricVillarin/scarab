import { useState } from 'react';
import './TextField.css';

function TextField({ onAnalyze }) {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (typeof onAnalyze === 'function') {
      onAnalyze(value.trim());
    }
  }

  return (
    <form className="text-field" onSubmit={handleSubmit}>
      <label htmlFor="input">Input URL</label>
      <input
        type="text"
        id="input"
        name="input"
        placeholder="https://example.com/privacy"
        value={value}
        onChange={e => setValue(e.target.value)}
        autoFocus
      />
      <button type="submit" disabled={!value.trim()}>
        Analyze
      </button>
    </form>
  );
}

export default TextField;