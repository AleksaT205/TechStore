import React from 'react';
import '../styles/search-bar.css'; 

export default function SearchBar({ searchTerm, setSearchTerm, categoryFilter, setCategoryFilter }) {
  return (
    <div className="search-bar-container">
      {/* Select levo */}
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="search-select"
      >
        <option value="sve">Sve kategorije</option>
        <option value="laptop">Laptop</option>
        <option value="telefon">Telefon</option>
        <option value="oprema">Oprema</option>
        <option value="monitor">Monitor</option>
        <option value="gaming">Gaming</option>
        <option value="pametni sat">Pametni sat</option>
        <option value="tablet">Tablet</option>
        <option value="tastatura">Tastatura</option>
        <option value="kamera">Kamera</option>
      </select>

      {/* Input desno */}
      <input
        type="text"
        placeholder="Pretraži proizvode..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
}




