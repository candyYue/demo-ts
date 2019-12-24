import React from 'react';
import Audio from '../components/audio';
interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}
interface State {
  count: number
}
class Home extends React.Component<Greeting, State> {
  private audioRef :any = React.createRef() //TypeScript ref

  state: State = {
     count: 0,
  };
  static defaultProps = {  // 属性默认值
     firstName: "",
     lastName: "",
  };
  constructor(props:any) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick(){
    this.setState({count: this.state.count+1})
    console.log(this.audioRef)
  }
  componentDidMount() {
    if (this.audioRef.current) {
      this.audioRef.current.focus();
    }
  }
  render() {
     return (
       <div>
         <p ref={this.audioRef}>点击了{this.state.count}次</p>
         <button onClick={this.buttonClick}>Hello{this.props.name}Class</button>
         <Audio text='1' start = {this.state.count}  end = {this.state.count} />
       </div>  
     );
  }
}

export default Home;
