import React,{Component} from 'react'
import '../Product.css'
class ProductDetail extends Component{

  constructor(props){
    super(props)
    this.state = {
      qtycounter:1
    }
  }

  increaseQty = () => {
    this.setState({
      qtycounter: this.state.qtycounter + 1
    })
  }

  decreaseQty = () => {
    this.setState({
      qtycounter: this.state.qtycounter-1
    })
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="col-md-10 offset-md-1">
          <div className="row div-divider">
            <a href="a">Home</a>
            <p style={{paddingLeft:5}}>/</p>
            <p style={{paddingLeft:5}}>product name</p>
          </div>
          <div className="col-md-2">
            <img src=""/>
          </div>
          <div className="col-md-10">
            <h4>product name</h4>
            <p> desciption : yadayada</p>
            <p>price</p>
            <div className="input-group">
              <div className="input-group-prepend">
                <button className="btn btn-light" onClick={this.decreaseQty} disabled={this.state.qtycounter=== 1 ? true : false}><span className="fas fa-minus"/></button>
              </div>
              <input className="center-text" value={this.state.qtycounter} disabled style={{width:50}}/>
              <div className="input-group-append">
                <button className="btn btn-light" onClick={this.increaseQty}><span className="fas fa-plus"/></button>
              </div>
            </div>
            <button className="btn button-style col-md-2" style={{color:'#fff'}}>Add to Cart</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail