import buses from "@/providers/task2/buses";
import { BusesContext } from "@/context/task2/BusesContext";




function BusesProvider({ children }) {
  return <BusesContext value={buses}>{children}</BusesContext>;
}

export default BusesProvider;
