interface SearchProps {
  setSearchText: (text: string) => void;
}

export default function Search({ setSearchText }: SearchProps) {
  const handleSearchChange = (text: string) => {
    setSearchText(text.toUpperCase().trim());
  };
  return (
    <>
      <input
        onChange={(e) => handleSearchChange(e.target.value)}
        className="input is-info"
        id="sayingInput"
        type="text"
        placeholder="Search"
      />
    </>
  );
}
