import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
function ListItem({ item }) {
  return (
    <>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.term} />
      ))}
    </dl>
  );
}

export default class AsyncApp extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
    this.state = {
      total: 0
    }
  }
  compute = async (x, y) => {
    const math = (await import('./math')).default;
    const total = await math.add(x, y)
    this.setState({total})
    return total;
  }
  add = () => {
    this.compute(45, 67).then((total)=>{
      console.error('Total: ', total)
    });
  }
  render() {
    const items = [
      {term: 'Eng', description: 'Enlish is what？？？'},
      {term: 'Chs', description: 'Chinese is what？？？'}
    ]
    return (
      <div>
          Total: {this.state.total}<br/>
          Name: <input type="text" ref={this.textInput} />
          Age: <input type="text" />
          Gender: <input type="text" />
          <button onClick={() => this.textInput.current.focus()}>Focus Name</button>
          <button onClick={this.add}>Number Add</button>
          <Glossary items={items}/>
      </div>
    );
  }
}