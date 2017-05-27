//虚拟DOM转换成真实的DOM插入到页面中
//状态一旦发生变化，组件会自动更新
//call apply bind 输出一个和原函数一样的函数

//var time,el;
//setInterval(function(){
//    var d=new Date();
//    time=d.getSeconds();
//    var el=(
//        <div>
//        <div>现在时间</div>
//        <span>{time}</span>
//    </div>)
//    ReactDOM.render(el,document.querySelector('#container'));
//},1000)

//
//$(function(){
//    var time,html;
//    setInterval(function(){
//        var d=new Date();
//        time=d.getSeconds();
//        html=`<div>
//            <div>现在时间</div>
//            <span>${time}</span>
//        </div>`;
//        $('#container').empty().html(html);
//    },1000);
//});

var root=document.querySelector('#container');
//var el=<h1>this is h1</h1>;
class Header extends React.Component{
    render(){
        if(this.props.arr){
            var lis = this.props.arr.map((v,i)=>
                <li key={i}>{v}</li>
            )
        }

        return(
            <h3 onClick={this.props.fn?()=>{this.props.fn('a')}:null}>
                {this.props.number?<span>{this.props.number}</span>:null}
                {this.props.float?<span>{this.props.float}</span>:null}
                {this.props.string?<span>{this.props.string}</span>:null}
                {this.props.el?<span>{this.props.el}</span>:null}
                {this.props.arr?<span>{this.props.arr.map((v,i)=><li key={i}>{v}</li>)}</span>:null}
                {this.props.arr?lis:null}
            </h3>
        );
    }
}

class NewsList extends React.Component {
    render() {
        if (this.props.news) {
            var lis = this.props.news.map((v)=>(
                <li key={v.id}>
                    <div>{v.id}</div>
                    <div>{v.title}</div>
                </li>
            ));
        }
        return (
            <ul style={this.props.x?{opacity:1,transition:'all 0.8s ease'}:{opacity:0,transition:'all 0.8s ease'}}>
                {lis}
            </ul>
        );
    }
}





class Page extends React.Component{
    constructor(){
        super();
        this.state={
            color:'blue',
            show:true
        }
        //this.changeRed=this.changeRed.bind(this);
        this.toggle=this.toggle.bind(this);
    }
    changeRed(){
        this.setState({
            color:'pink'
        })
    }
    toggle(){
        this.setState({
            show:!this.state.show
        })

    }
    render(){
        const news=[
            {id:1,title:'啦啦啦'},
            {id:2,title:'啦啦啦'},
            {id:3,title:'啦啦啦'},
            {id:4,title:'啦啦啦'},
            {id:5,title:'啦啦啦'},
            {id:6,title:'啦啦啦'}
        ]
        //return(
        //    <div>
        //        <Header fn={(x)=>{console.log(x)}} />
        //        <Header number={1}/>
        //        <Header float={2.6}/>
        //        <Header string="啦啦啦"/>
        //        <Header el={<div>嘿嘿</div>} />
        //        <Header arr={['1','2','3']}/>
        //        <NewsList news={news}/>
        //    </div>
        //)

        //return(
        //    //<div style={{background:this.state.color}}
        //    //  onClick={this.changeRed}
        //    //>
        //     <div style={{background:this.state.color, minHeight:300}}
        //             onClick={this.toggle}
        //     >
        //     {this.state.show?<NewsList news={news}/>:null}
        //
        //     </div>
        //)


        return(
            //<div style={{background:this.state.color}}
            //  onClick={this.changeRed}
            //>
            <div style={{background:this.state.color, minHeight:290}}
                 onClick={this.toggle}
            >
             <NewsList news={news} x={this.state.show}/>

            </div>
        )



    }
}
ReactDOM.render(<Page/>, root);