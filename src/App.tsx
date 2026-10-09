import { Route, Router, Switch } from "wouter";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { detectBasePath } from "@/lib/base-path";

// Resolved once at startup: "" at a domain root, "/repository" on GitHub Pages.
const BASE_PATH = detectBasePath();

export default function App() {
  return (
    <Router base={BASE_PATH}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/index.html" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
