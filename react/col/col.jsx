class Screen extends React.Component{
    render(){
        return(
            <div className="screen">
                <div className="number"
                >{this.props.number}
                </div>
            </div>
        )
    }
}
class Operal extends React.Component{
    render(){
        var buttons=this.props.data.map((v,i)=>(
            <div className="item" key={i}
              onClick={()=>(
                 this.props.fn(v)
              )}
            >
                <div className="text">{v.name}</div>
            </div>
        ))
        return(
            <div className="operal">
                {buttons}
            </div>
        )
    }
}
class Col extends React.Component{
    constructor(){
        super();
        this.state={
            number:0,
            first:'',
            seconed:'',
            o:''
        }
        this.Change=this.Change.bind(this);
        this.processNumber=this.processNumber.bind(this);
        this.processO=this.processO.bind(this);
        this.processEqueal=this.processEqueal.bind(this);

    }
    processNumber(v){
        if(!this.state.o){
            var first =this.state.first+ v;
            this.setState({
                first:first,
                number:first
            })
        } else {
            var seconed=this.state.seconed + v;
            this.setState({
                seconed:seconed,
                number:seconed
            })
        }
    }

    processDEL(){
        var number=slice(number,-1);
        this.setState({
            number:number
        })

    }
    processO(v){
            this.setState({
                o:v,
                number:v
            })

    }
    processEqueal(){
        var result;
        if(this.state.o === '+'){
            result=parseFloat(this.state.first) + parseFloat(this.state.seconed);
        }else if(this.state.o === '-'){
            result=parseFloat(this.state.first) - parseFloat(this.state.seconed);
        }else if(this.state.o === '*'){
            result=parseFloat(this.state.first) * parseFloat(this.state.seconed);
        }else if(this.state.o === '/'){
            result=parseFloat(this.state.first) / parseFloat(this.state.seconed);
        }else if(this.state.o === '%'){
            result=parseFloat(this.state.first) % parseFloat(this.state.seconed);
        }
        this.setState({
            number:result?result:0,
            first:'',
            seconed:'',
            o:''
        })
    }
    processAC(){
        this.setState({
            number:0,
            first:'',
            seconed:'',
            o:''
        })
    }
    Change(v){
        if(v.type === 4){
            this.processNumber(v.name)
        }else if(v.type === 2){
            this.processO(v.name)
        }else if(v.type === 3){
            this.processEqueal();
        }else if(v.type === 1){
            this.processAC();
        }else if(v.type === 5){
            this.processDEL(v.name)
        }
    }
    render(){
        const buttons=[
            {name:'AC',type:1},
            {name:'DEL',type:5},
            {name:'+/-',type:6},
            {name:'/',type:2},
            {name:'7',type:4},
            {name:'8',type:4},
            {name:'9',type:4},
            {name:'*',type:2},
            {name:'4',type:4},
            {name:'5',type:4},
            {name:'6',type:4},
            {name:'-',type:2},
            {name:'1',type:4},
            {name:'2',type:4},
            {name:'3',type:4},
            {name:'+',type:2},
            {name:'0',type:4},
            {name:'.',type:4},
            {name:'=',type:3},
            {name:'%',type:2}
        ]
        return(
            <div className="col">
                <Screen number={this.state.number}/>
                <Operal data={buttons} fn={this.Change}/>
            </div>
        )
    }
}
ReactDOM.render(<Col/>,document.querySelector('#root'));