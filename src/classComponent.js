class ToDOComponent extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        userInput: '',
        items: ['gaurav', 'gargeya'],
        completedItems: ['hello', 'bye'],
      };
      this.addInListMouse = this.addInListMouse.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    addInListMouse(){
      const itemsArray = this.state.items;
      if(this.state.userInput.length > 0){
        itemsArray.push(this.state.userInput);
        this.setState({
          items: itemsArray,
          // to clear the input box
          userInput: '',
        });
      }
    }
  
    handleChange(event){
      this.setState({
        userInput: event.target.value,
      });
    }
  
    render(){
      
      const createList = this.state.items.map(i => <>
      <li key={i}>{i} 
      <div className="twoButtons">
        <button className="checkButton"><FaCheck /></button>
        <button className="trashButton"><FaTrash /></button>
      </div></li>
        </>);
      const removedList = this.state.completedItems.map(i => <>
      <li key={i}><s>{i}</s>
      <button className="trashButton"><FaTrash /></button>
      </li>
      </>);
      // console.log(this.state.previousList);
      // console.log(this.state.items);
      return(
        <div className="list-container">
          <input type="text"
            placeholder="Enter A Task To Do..." 
            value={this.state.userInput} 
            onChange={this.handleChange} 
            className="inputBox"/>
          <br/>
          <button className="btn" 
            title="Add the task ToDO" 
            onClick={this.addInListMouse}>Add ToDo</button>
          <br/>
          <ul>
            {createList}
            {removedList}
          </ul>
        </div>
      );
    }
  }