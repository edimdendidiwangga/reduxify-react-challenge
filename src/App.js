import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { fetchArticles } from './actions/actions'
import ListItems from './components/listItems'
import SingleArticle from './components/singleArticle'
import { connect } from 'react-redux'
import './App.css';

class App extends React.Component {

	componentDidMount(){
		this.props.fetchArticles()
	}

  render() {

	    return (
	      <div className="App">
					<BrowserRouter>
						<div>
							<Route exact path="/" component={()=> <ListItems data={this.props.news} />} />
							<Route path="/detail/:id" component={(props) => <SingleArticle match={props.match} getData={this.props.news} />}  />

						</div>
					</BrowserRouter>
	      </div>
	    );

  }
}

const mapStateToProps = state => ({
	news: state // tadinya array , sekarang menjadi object {data, loading}
})
const mapDispatchToProps = dispatch => ({
	fetchArticles : ()=> dispatch(fetchArticles())
})
// export default PasswordForm
export default connect(mapStateToProps, mapDispatchToProps)(App)
