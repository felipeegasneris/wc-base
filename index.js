import {component, html, useEffect, useState} from 'haunted';

const SendDataToParent = (value) => {
	const event = new CustomEvent('mycounteradd', {
		bubbles: true,
		detail: {
			counter: value
		}
	});
	console.log('se manda: ', value);
	window.dispatchEvent(event);
};

const Counter = ({start = 0}) => {
	const [count, setCount] = useState(Number(start));

	useEffect(() => {
		SendDataToParent(count);
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