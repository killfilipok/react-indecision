class Toggle extends React.Component {
    constructor(props){
        super(props)
        this.changeState = this.changeState.bind(this)
        this.state = {
            visibility: false
        }
    }
    
    changeState(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return (
            <div>
             <h1>visibility toggle</h1>
             <button onClick={this.changeState}>
              {this.state.visibility? 'Hide detaiols' : 'Show details'}
             </button>
              {
                this.state.visibility&& (
                    <p>Here are some details</p>
                )
              }
            </div>
        )
    }
}

ReactDOM.render(<Toggle/>,document.getElementById('app'))

// const appRoot = document.getElementById('app')

// let textToShow = ''

// const changeTxtToShow = () => {
//     if(textToShow.length  === 0){
//         textToShow = 'here is some text to show'
//     } else {
//         textToShow = ''
//     }
//     render()
// }

// const render = () =>{
//     const temlate = (
//         <div>
//          <h1>Here Some Text</h1>
//          <button onClick={changeTxtToShow}>{textToShow.length === 0? 'show text':'hide text'}</button>
//          {textToShow.length === 0 && <h2>textToShow</h2>}
//         </div>
//     )

//     ReactDOM.render(temlate,appRoot)
// }

// render()