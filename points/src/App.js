import './App.css';
import { addPoints, displayPoints, payerPoints, spendPoints } from './pointsRoutes';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Coding Exercise</h1>
      </header>
      <body>
        <h2>Add points</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name"/>
          </label>
          <label>
            Points:
            <input type="text" name="points"/>
          </label>
          <input type="submit" value="Submit" onClick={addPoints("Ian", 123)}/>
        </form>

        <form>
          <label>
            Name:
            <input type="text" name="name"/>
          </label>
          <label>
            Points:
            <input type="text" name="points"/>
          </label>
          <input type="submit" value="Submit" onClick={spendPoints("Ian", 123)}/>
        </form>

        <h2>Display points</h2>
        <button onClick={displayPoints}>Add Points</button>

        <h2>Display points of a specific user</h2>
        <form>
          <label>
            Name:
            <input type="text" name="display"/>
          </label>
          <input type="submit" value="Submit" onClick={payerPoints("Ian")}/>
        </form>
        <div id='Points'></div>
        <script src="./pointsRoutes.js"></script>
      </body>
    </div>
  );
}

export default App;
