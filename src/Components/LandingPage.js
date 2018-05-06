import React, { Component } from 'react';
import Icon from 'react-icons/lib/fa/edit'

class LandingPage extends Component {
  constructor(){
      super()

      this.state = {
          title: {
            id: Number,
            name: "",
          },
          titles: []
      }
      this.handleButtonClick = this.handleButtonClick.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
      this.handleEditText = this.handleEditText.bind(this)
  }
  handleButtonClick() {
    if(this.refs.title.value !== "") {
    this.setState({title: this.refs.title.value })
    const titlesList = this.state.titles
    titlesList.push(this.refs.title.value)
    this.setState({titles: titlesList})
    }
    this.refs.title.value = ""
  }

  handleDelete(i) {
     const AfterDelete = this.state.titles
     AfterDelete.splice(i,1)
     this.setState({titles: AfterDelete})
  }
 
  handleEditText(e) {
    this.setState({title: e.target.value})
  } 
 
 render() {
       const ListOfTitles = this.state.titles
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <header>My Daily Notes</header>  
            <input className="Main" type="text" placeholder="Add Your Daily Notes" ref="title" />
            <button className="buttonToAdd" onClick={this.handleButtonClick}>+</button>
            <div>
                {ListOfTitles.map((title,i)=>{
                   return <li key={i}>{title}
                   <button onClick={()=>this.handleDelete(i)}>Delete</button><Icon className="editIcon" type="edit" /></li>
                })}
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
