import { useState } from "react"


function Counter(){

        const [count, change] = useState(0);

        const increment = () => {
            change(count+1)
        }

        const decrement = () => {
            change(count-1)
        }

        const reset = () => {
            change(0)
        }

        return(
            <div>
                    <p className="value">The value of count : {count}</p>
                    <button onClick={increment}>INCREMENT</button>
                    <button onClick={decrement}>DECREMENT</button>
                    <button onClick={reset}>RESET</button>

            </div>
        )

}

export default Counter