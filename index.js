import {component, html, useState} from 'haunted';

const Counter = () => {
	const [count, setCount] = useState(0);

	return html`
		<div>
			<span>${count}</span>
			<button type="button" @click=${() => setCount(count + 1)}>
          Increment
      </button>
		</div>
	`;
}

customElements.define('my-counter', component(Counter));