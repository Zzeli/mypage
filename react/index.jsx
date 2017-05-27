/**
 * Created by Administrator on 2017/4/17.
 */
//console.log(1);
//const el= <div>this is h1</div>
//
//ReactDOM.render(
//    el,
//    document.querySelector('#container')
//);


//class Header extends React.Component{
//    render(){
//        return(
//            <div className="header">
//                <ul>
//                    <li>嘻嘻嘻</li>
//                 </ul>
//                </div>
//        );
//    }
//}
//
//class Footer extends React.Component{
//    render(){
//        return(
//          <div>
//              <p>啦啦啦啦啦啦</p>
//          </div>
//        );
//    }
//}
//class Page extends React.Component{
//    render(){
//        return(
//            <div>
//                    <Header></Header>
//                    <Footer></Footer>
//            </div>
//        );
//    }
//}
//ReactDOM.render(
//        <Page></Page>,
//        document.querySelector('#container')
//    );



class Mylist extends React.Component{

    constructor() {
        super();
        this.processClick = this.processClick.bind(this);
    }
    processClick(v) {
        alert(v);
    }
    render(){
        return (
            <div className={this.props.type}>
                <ul>
                   {this.props.data.map((v,i)=><li key={i}>{v}</li>)}
                   {this.props.data.map((v,i)=><li key={i} onClick={()=>{(alert(v))}}>{v}</li>)}
                    {this.props.data.map((v, i)=><li key={i} onClick={()=>{this.processClick(v)}}>{v}</li>)}
                        <li>11</li>
                        <li>21</li>
                        <li>31</li>
                        <li>41</li>
                        <li>51</li>
                        <li>61</li>
                        <li>71</li>
                        <li>81</li>

                </ul>
            </div>
        )
    }
}

class Page extends React.Component{
    render(){

        return (
            <div>
                <Mylist type="pink" data={[1,2,3]}/>
                <Mylist type="blue" data={['a','b']}/>
            </div>
        )
    }
}

//ReactDOM.render(<Mylist type="blue"></Mylist>,document.getElementById('container'));
ReactDOM.render(<Page/>,document.getElementById('container'));
//
//
//
//// 缁勪欢  锛堣嚜瀹氫箟鏍囩锛�
//class Mylist extends React.Component {
//    constructor() {
//        super();
//        this.processClick = this.processClick.bind(this);
//    }
//
//    processClick(v) {
//        alert(v);
//    }
//
//    render() {
//        return (
//            <div className={this.props.type}>
//                <ul>
//                    {this.props.data.map((v, i)=><li key={i} onClick={()=>{this.processClick(v)}}>{v}</li>)}
//                </ul>
//            </div>
//        );
//    }
//}
//
//class Page extends React.Component {
//    render() {
//        return (
//            <div>
//                <Mylist type="red" data={[1,2,3]}/>
//                <Mylist type="blue" data={['a','b']}/>
//            </div>
//        );
//    }
//}
//
//ReactDOM.render(<Page/>, document.getElementById('container'));