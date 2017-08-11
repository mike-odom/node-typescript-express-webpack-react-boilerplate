import * as React from "react"
import {ListItem} from "./ListItem";

const Header = ({ title }) => {
  return <h1>{title}</h1>
};

class List extends React.Component {
  private myData = { 1: "moo", 2: "cow", 3: "blah"};

  render() {
    let listItems = [];

    for (let key in this.myData) {
      let data = this.myData[key];

      listItems.push(<ListItem data={data} key={key}/>)
    }
    return (
      <div><Header title="Hello"/>{listItems}</div>
    )
  }
}

export {List}