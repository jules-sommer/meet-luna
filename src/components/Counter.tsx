import { createSignal } from "solid-js";
import "./Counter.css";

const [count, setCount] = createSignal(0);

export default function Counter() {

  return (

    <button class="increment" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>

  );

}
