import { useState } from "react";

export type SearchFormProps = {
  onSubmit: (searchInput: string) => void;
  initialSearchValue?: string;
};

export default function SearchForm({
  onSubmit,
  initialSearchValue = "",
}: SearchFormProps) {
  const [searchInput, setSearchInput] = useState(initialSearchValue);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(searchInput);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className="search-input"
          id="search-input-id"
          name="pokemonName"
          placeholder="Rechercher un produit..."
          value={searchInput}
          onChange={({ target }) => setSearchInput(target.value)}
        />
        <button type="submit" disabled={!searchInput.length}>
          Rechercher
        </button>
      </div>
    </form>
  );
}
