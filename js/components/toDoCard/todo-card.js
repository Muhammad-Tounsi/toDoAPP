import { LitElement, html, css } from 'lit-element';

//On définit un objet avec nos différents filtres d'options
const VisibilityFilters = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed'
};

export default class ToDoCard extends LitElement {
	constructor() {
		super();
		this.todos = [];
		this.filter = VisibilityFilters.SHOW_ALL;
		this.task = '';
	}

	//Define a static getter for properties that returns an object 
	//that defines the property names and types.
	static get properties() {
		return {
			todos: { type: Array },
			filter: { type: String },
			task: { type: String }
		};
	}

	render(){
		return html`
			<p>todo-card</p>
		`;
	}

}

customElements.define('todo-card', ToDoCard);