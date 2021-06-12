import React, {Component} from 'react';


const Scroll = (props) => {
	return (
		<div style = {{overflowY: 'Scroll', border: '5px solid green', height: '700px'}} >
			{props.children}
		</div>
	)
}

export default Scroll;