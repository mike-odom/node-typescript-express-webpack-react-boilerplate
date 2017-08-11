import * as React from 'react'

interface IListItemProps {
  data: string;
}

interface IListItemState {

}

class ListItem extends React.Component<IListItemProps, IListItemState> {
  render() {
    return <div>{this.props.data}</div>
  }
}

export {ListItem}