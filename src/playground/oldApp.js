console.log('App.js is running!')

const appObj = {
    title: 'Indecision App',
    subtitle: 'Put your notes',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value
    
    if (option) {
        appObj.options.push(option)
        e.target.elements.option.value = ''
        refresh()
    }
    console.log(option)
}

const removeAll =() =>{
    appObj.options = []
    refresh()
}


const appRoot = document.getElementById('app')

const numbers = [55, 101 , 1000]

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObj.options.length)
    const option = appObj.options[randomNum]
    alert(option)
}

const refresh = () => {
    const template = (
        <div>
         <h1>{appObj.title}</h1> 
         {appObj.subtitle && <p>{appObj.subtitle}</p>}
         <p>{appObj.options.length > 0?'Here is your options':'No options'}</p>
         <p>{appObj.options.length}</p>
         <button onClick={removeAll}>RemoveAll</button>
         <button disabled={appObj.options.length ===0}onClick={onMakeDecision}>What should I do?</button>
         <ol>
           {
            appObj.options.map((str) => <p key={str}>{str}</p>)
           }
         </ol>
         <form onSubmit={onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
         </form>
        </div>
       );
       
       
       ReactDOM.render(template, appRoot)
}

refresh()