import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./MyComponents/Header";

//import Todo from "./MyComponents/Todo";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";

function App() {
  const onDelete = () => {
    console.log("Deleted");
  };
  let todos = [
    {
      sno: 1,
      title: "Go to market",
      desc: "do job1"
    },
    {
      sno: 2,
      title: "Go to mall",
      desc: "do job2"
    },
    {
      sno: 3,
      title: "Go to ghat",
      desc: "do job3"
    }
  ];

  return (
    <div className="App">
      <Header title="Mayuri ToDo" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
