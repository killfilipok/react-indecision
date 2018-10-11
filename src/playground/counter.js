class Counter extends React.Component {
    constructor(props){
        super(props)

        this.plusOne = this.plusOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)

        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        const localCount = localStorage.getItem('count') 
        
        if(localCount && !isNaN(localCount)){
            this.setState(()=>({count: parseInt(localCount,10)}))
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count)
        }
    }

    plusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    minusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        })
    }

    reset(){
        this.setState(()=> {
            return {
             count: 0
            }
        })
    }

    render(){
        return(
            <div>
             <h1>Count: {this.state.count}</h1>
             <button onClick={this.plusOne}>+1</button>
             <button onClick={this.minusOne}>-1</button>
             <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0
// const addOne = () =>{
//     console.log('addOne')
//     count++
//     renderCounterApp()
// }
// const minusOne = () => {
//     console.log('minus')
//     count--
//     renderCounterApp()
// }
// const reset = () => {
//     console.log('reset')
//     count = 0
//     renderCounterApp()
// }

// const appRoot = document.getElementById('app')

// const renderCounterApp = () =>{
//     const templateTwo = (
//         <div>
//          <h1>Count: {count}</h1>
//          <button onClick={addOne}>+1</button>
//          <button onClick={minusOne}>-1</button>
//          <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo,appRoot)
// }
// renderCounterApp()