import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  changeValueA,
  changeValueB,
  getAdd,
  getDiv,
  getMul,
  getSub,
  clear,
  undoOne,
  undoTwo,
  undoResult,
  redo,
} from "./store/reducers/add";

function App() {
  const dispatch = useDispatch();
  const number1 = useSelector((state) => state.add.numberA);
  const number2 = useSelector((state) => state.add.numberB);
  let arrNumberA = useSelector((state) => state.add.arrA);
  let arrNumberB = useSelector((state) => state.add.arrB);
  const obj = { a: number1, b: number2 };
  const result = useSelector((state) => state.add.result);
  const error = useSelector((state) => state.add.error);
 
  const inputNumberA = (e) => {
    if (isNaN(e.target.value)) {
      alert("Введіть будь ласка число");
      e.target.value = "";
    }
    dispatch(changeValueA(e.target.value));
  };

  const inputNumberB = (e) => {
    if (isNaN(e.target.value)) {
      alert("Введіть будь ласка число");
      e.target.value = "";
    }
    dispatch(changeValueB(e.target.value));
  };
  const clearInput = () => {
    const a = (document.querySelector(".input-value-one").value = "");
    const b = (document.querySelector(".input-value-two").value = "");
    const result = (document.querySelector(".input-value-result").value = "");
    dispatch(clear(a, b, result));
  };
  const undoNumber1 = () => {
    let newNumber1 = number1.substring(0, number1.length - 1);
    dispatch(undoOne(newNumber1));
    document.querySelector(".input-value-one").value = newNumber1;
  };
  const undoNumber2 = () => {
    let newNumber2 = number2.substring(0, number2.length - 1);
    dispatch(undoTwo(newNumber2));
    document.querySelector(".input-value-two").value = newNumber2;
  };
  const undoResultChange = () => {
    const result = (document.querySelector(".input-value-result").value = "");
    dispatch(undoResult(result));
  };
  const undoState = () => {
    undoNumber1();
    undoNumber2();
    undoResultChange();
  };
  const redoState = () => {
    let a = (document.querySelector(".input-value-one").value =
      arrNumberA[arrNumberA.length - 1]);
    let b = (document.querySelector(".input-value-two").value =
      arrNumberB[arrNumberB.length - 1]);
    let arrNewA;
    let arrNewB;
    let arrNewResult;
    if (a !== 0) {
      arrNewA = arrNumberA.filter((el, index) => index < arrNumberA.length - 1);
    } else {
      document.querySelector(".input-value-one").value = "";
    }
    if (b !== 0) {
      arrNewB = arrNumberB.filter((el, index) => index < arrNumberB.length - 1);
    } else {
      document.querySelector(".input-value-two").value = "";
      return;
    }
    dispatch(changeValueA(String(a)));
    dispatch(changeValueB(String(b)));
    dispatch(redo([arrNewA, arrNewB, arrNewResult]));
  };
  return (
    <>
      <Header />
      {error ? (
        <h2 className="error">Сталася помилка: {error}</h2>
      ) : (
        <div className="main">
          <div className="input">
            <p>Введіть перше число:</p>
            <input
              className="input-value-one"
              onChange={inputNumberA}
              placeholder={0}
            />
          </div>
          <div className="input">
            <p>Введіть друге число:</p>
            <input
              className="input-value-two"
              onChange={inputNumberB}
              placeholder={0}
            />
          </div>
          <div className="button">
            <div className="button-operation">
              <button
                className="button-operation-value"
                onClick={() => dispatch(getAdd(obj))}
              >
                +
              </button>
              <button
                className="button-operation-value"
                onClick={() => dispatch(getDiv(obj))}
              >
                -
              </button>
              <button
                className="button-operation-value"
                onClick={() => dispatch(getMul(obj))}
              >
                *
              </button>
              <button
                className="button-operation-value"
                onClick={() => dispatch(getSub(obj))}
              >
                /
              </button>
              <button onClick={() => undoState()}>UNDO</button>
              <button onClick={() => redoState()}>REDO</button>
              <button
                className="button-clear"
                onClick={() => {
                  clearInput();
                }}
              >
                Clear
              </button>
            </div>
            <div className="input">
              <p>Результат:</p>
              <input
                className="input-value-result"
                value={result}
                placeholder={0}
              />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
