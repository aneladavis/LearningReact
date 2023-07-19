import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
// import { Fragment } from "react";

function App() {
  let items = ["New York", "San Francisco", "Phoenix", "D.C."];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
        <Alert>
          Working <span> on </span> the Web!
        </Alert>
      </>
    </div>
  );
}

export default App;
