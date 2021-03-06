var root=document.querySelector('#container');
class Tab extends React.Component{
    constructor(){
        super();
        this.state={
            active:0
        }
        this.setActive=this.setActive.bind(this);
    }
    setActive(i){
        this.setState({
            active:i
        })
    }


    render(){
        if(this.props.data){
            var lis = this.props.data.map((v,i)=>(
                 <li key={i}
                 onClick={()=>(
                    this.setActive(i)
                 )}
                 className={this.state.active===i ?'active':null}>{v.title}</li>
               )
            )
        }
        return(
            <div className="tab">
                <ul className="nav">
                    {lis}
                </ul>
                <div className="content">
                    {this.props.data[this.state.active].content}
                </div>
            </div>

        );
    }
}
class Page extends React.Component{
    render(){
        const data=[
            {title:'标题1',content:'内容1'},
            {title:'标题2',content:'内容2'},
            {title:'标题3',content:'内容3'},
            {title:'标题4',content:'内容4'},
            {title:'标题5',content:'内容5'},
            {title:'标题6',content:'内容6'}
        ]
        return (
            <div>
                <Tab data={data}/>
            </div>
        );

    }
}

ReactDOM.render(<Page/>,root);