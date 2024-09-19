
import Todo from './Components/Todo'; 

function App() {
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
        <Todo />
      </div>
    </div>
  );
}

export default App;
