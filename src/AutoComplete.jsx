import { useState } from "react";

const AutoComplete = ({ data }) => {
  const [isSuggestionsActive, setIsSuggestionsActive] = useState(false);
  const [value, setValue] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setValue(query);
    if (query.length > 1) {
      const filteredSuggestions = data.filter((item) => {
        return item.toLowerCase().indexOf(query) > -1;
      });
      setSuggestions(filteredSuggestions);
      setIsSuggestionsActive(true);
    } else {
      setIsSuggestionsActive(false);
    }
  };

  const handleClick = (e) => {
    setSuggestions([]);
    setValue(e.target.innerText);
    setIsSuggestionsActive(false);
  };

  const Suggestions = () => {
    return (
      <ul>
        {suggestions.map((suggestion) => {
          return <li onClick={handleClick}> {suggestion} </li>;
        })}
      </ul>
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter City"
        value={value}
        onChange={handleChange}
      />
      {isSuggestionsActive && <Suggestions />}
    </div>
  );
};

export default AutoComplete;
