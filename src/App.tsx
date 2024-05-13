import { ContentSection } from "./app.styles";
import Form from "./components/form/form";
import Navigation from "./components/navigation";

function App() {
  return (
    <>
      <Navigation />
      <ContentSection>
        <div className="innerContainer">
          <h1>User Data Form</h1>
          <Form/>
        </div>
      </ContentSection>
    </>
  );
}

export default App;
