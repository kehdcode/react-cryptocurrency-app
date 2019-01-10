import React from "react"
//import ReactDom from "react-dom";
import {handleResponse} from '../helper';
import {API_URL} from '../config';

class List extends React.Component {
    constructor(){
        super()
        this.state = {
            loading: false,
            currencies : [],
            error: null
           
        }     
    } 
    componentDidMount(){
        this.setState({loading: true});

    fetch('${API_URL}/cryptocurrencies?page=1&perPage=20')
    .then(handleResponse)
    .then((data) => {
        this.setState({
            currencies: data.currencies, 
            loading: false})
      //console.log('Success', data);
    })
    .catch((error) => {
        this.setState({
            error: error.errorMessage, 
            loading: false})
      //console.log('Error', error);
    });

    }
    
    render(){
        console.log(this.state)
      if (this.state.loading){
          return <div> Loading...</div>
         
      }
        return(
            <div>
                
                <h1>Lists</h1>
                {this.state.age}
            </div>
        )
    }
}

export default List;