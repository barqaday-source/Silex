import IndexPage from "./routes/index";
import { AppStateProvider } from "./context/AppStateContext";

export default function App() {
  return <AppStateProvider><IndexPage /></AppStateProvider>;
}
