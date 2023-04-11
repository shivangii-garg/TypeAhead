import AutoComplete from "./AutoComplete";
import "./styles.css";
import { cities } from "./Data";

export default function App() {
  return (
    <div className="App">
      <AutoComplete data={cities} />
    </div>
  );
}
