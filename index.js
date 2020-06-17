import {component, html, useEffect, useState} from 'haunted';

const SendDataToParent = (el, value) => {
	const event = new CustomEvent('my-counter-add', {
		bubbles: true,
		detail: {
			counter: value
		}
	});
	el.dispatchEvent(event);
};

function Counter ({start = 0}) {
	const [count, setCount] = useState(Number(start));

	useEffect(() => {
		setCount(Number(start));
	}, [start]);

	useEffect(() => {
		SendDataToParent(this, count);
	}, [count]);

	return html`
		<div>
			<span>${count}</span>
			<button type="button" @click=${() => setCount(count + 1)}>
          Increment
      </button>
		</div>
	`;
}

Counter.observedAttributes = ['start'];

customElements.define('my-counter', component(Counter));