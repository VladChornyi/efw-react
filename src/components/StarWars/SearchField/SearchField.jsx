import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export function SearchField({ handleSubmit }) {
  const [searchParams] = useSearchParams();
  const searchName = searchParams.get("name"); 

  const [name, setName] = useState(searchName ?? '');

  const handleInput = (event) => {
    setName(event.target.value);
    // this.setState({name: event.target.value})
  };

  const handleFormSUbmit = (event) => {
    event.preventDefault();
    handleSubmit(name);
  };

  return (
    <div>
      <form onSubmit={handleFormSUbmit}>
        <input
          type="text"
          placeholder="Enter character name"
          name="name"
          value={name}
          onChange={handleInput}
        />
        <button>Search</button>
      </form>
    </div>
  );
}
