import { useState } from "react";
import type { Level } from "./components/type";
import LevelSelect from "./components/LevelSelect";
import Sayings from "./components/Sayings";
import Search from "./components/Search";
import {
  levels as initialLevels,
  selectedLevel as initialSelectedLevel,
  sayings as rawSayings,
} from "../public/sayings.json";
import "./App.css";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedLevel, setSelectedLevel] = useState(initialSelectedLevel);
  const [sayings, setSayings] = useState(
    rawSayings
      .map((saying) => ({
        ...saying,
        showLevel: true,
        showSearch: true,
        showExample: false,
        example: saying.example || saying.title,
      }))
      .sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      )
  );
  const handleLevelChange = (value: string) => {
    const newSelectedLevel: Level =
      initialLevels.find((le) => le.id === Number(value)) ??
      initialSelectedLevel;
    setSelectedLevel(newSelectedLevel);
  };

  const handleSayingClick = (id: string) => {
    const newSayings = sayings.map((saying) =>
      saying.id === id
        ? { ...saying, showExample: !saying.showExample }
        : saying
    );
    setSayings(newSayings);
  };

  const filterSayings = sayings.filter((saying) => {
    const matchesLevel =
      selectedLevel.value === 0 || selectedLevel.value === saying.level;
    const matchesSearch = saying.title
      .toLocaleUpperCase()
      .includes(searchText.toLocaleUpperCase().trim());
    return matchesLevel && matchesSearch;
  });

  return (
    <>
      <div className="page-spanish">
        <div className="panel-heading">
          <h1>Spanish Sayings</h1>
        </div>
        <div className="panel-search">
          <Search setSearchText={setSearchText} />
          <LevelSelect
            levels={initialLevels}
            selectedLevel={selectedLevel}
            handleLevelChange={handleLevelChange}
          />
        </div>
        <div className="panel-sayings-list">
          <Sayings
            sayings={filterSayings}
            handleSayingClick={handleSayingClick}
          />
        </div>
      </div>
    </>
  );
}
