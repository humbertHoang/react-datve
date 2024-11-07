import "./App.css";
import BookingDisplay from "./BookingTickets/BookingDisplay.jsx";
import BookingTable from "./BookingTickets/BookingTable.jsx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <BookingDisplay />
          </div>
          <div className="col-4 mt-4">
            <BookingTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
