import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import quotes from './quotes'

class Quotes extends Component {
	constructor() {
		super()
		this.renderImage = this.renderImage.bind(this)
	}

	renderImage(src) {
		return `<img src="${src}" width="500px" height="500px" "alt="${src}" className="section" />`
	}

	render() {
		let q = []
		for(let i = 0; i < quotes.length - 3; i += 3) {
			q.push(
						`${this.renderImage(quotes[i])}
							${this.renderImage(quotes[i+1])}
							${this.renderImage(quotes[i+2])}
						`);
		}
		return (
				<div>
					<h1 id="tagline">Quotes React</h1>
					<div  className="sections" dangerouslySetInnerHTML={{__html: q}}></div>
				</div>
			)
	}
}

ReactDOM.render(<Quotes />, document.getElementById('app'));
