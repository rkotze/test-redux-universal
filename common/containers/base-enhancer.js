import React, { Component } from 'react';

function BaseEnhancer(WrappedComponent) {
	return class extends Component {
		componentDidMount() {
			console.log('Base Enhancer Mounted');
		}

		render() {
			return (<WrappedComponent {...this.props} />);
		}
	}
}

function ExtraEnhancer(WrappedComponent) {
	return class extends Component {
		componentDidMount() {
			console.log('Extra Enhancer Mounted');
		}

		render() {
			console.log('Extra rendered');
			return (<WrappedComponent {...this.props} />);
		}
	}
}

export { 
	BaseEnhancer as default,
	ExtraEnhancer
}