import React,{Component} from 'react';

class Projects extends Component{
	render(){
		return(
			<div>
				<div className="item">
						<span className="project-title"><a href={this.props.item.url} target="_blank">{this.props.item.name}</a></span> - 
						<span className="project-tagline">A responsive website template designed to help web developers/designers market their services. </span>
						
				</div> 
			</div>
			);
	}
}


export default Projects