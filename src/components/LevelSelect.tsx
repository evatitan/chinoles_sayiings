import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import type { Level } from "./type";
import type { SelectChangeEvent } from "@mui/material/Select";

interface LevelProps {
  levels: Level[];
  selectedLevel: Level;
  handleLevelChange: (value: string) => void;
}

export default function LevelSelect({
  levels,
  selectedLevel,
  handleLevelChange,
}: LevelProps) {
  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    handleLevelChange(selectedValue);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Levels</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={String(selectedLevel.value ?? "")}
        label="Difficult"
        onChange={handleChange}
      >
        {levels.map((level) => {
          return (
            <MenuItem key={level.id} value={String(level.value)}>
              {level.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
