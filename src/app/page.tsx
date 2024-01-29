import FilterScreen from "./filterScreen";
import TableScreen from "./tableScreen";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col">
      <FilterScreen />
      <TableScreen />
    </div>
  );
}
