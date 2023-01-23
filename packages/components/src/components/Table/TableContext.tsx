import { createContext } from "react";

interface TableContextProps {
  bordered: boolean;
  striped: boolean;
}

export const TableContext = createContext<TableContextProps>({
  bordered: false,
  striped: false,
});
