import { createContext } from "react";

interface TableContextProps {
  striped: boolean;
}

export const TableContext = createContext<TableContextProps>({
  striped: false,
});
