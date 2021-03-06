import {component, html, useEffect, useState} from 'haunted';
import  styles from 'bundle-text:./index.css';

const SendDataToParent = (el, value) => {
	const event = new CustomEvent('my-counter-add', {
		bubbles: true,
		detail: {
			counter: value
		}
	});
	el.dispatchEvent(event);
};

function Counter({start = 0, dsType = 'primary'}) {
	const [count, setCount] = useState(Number(start));

	useEffect(() => {
		setCount(Number(start));
	}, [start]);

	useEffect(() => {
		SendDataToParent(this, count);
	}, [count]);

	return html`
		<style>${styles}</style>
		<div>
			<button type="button" class="button button-${dsType}" @click=${() => setCount(count + 1)}>
          Increment : ${count}
      </button>
		</div>
	`;
}

Counter.observedAttributes = ['start', 'ds-type'];

customElements.define('my-counter', component(Counter));