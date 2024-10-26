import { Slide, transition, transitionFrom } from '/slides.js';

const slide = new Slide(async function* () {
	slide.innerHTML = `
    <div class="vt-demo">
      <div class="example" aria-hidden="true">
        <div class="title">Main DOM</div>
        <div class="page">
          <div class="state-1">Old page</div>
        </div>
      </div>
      <div class="example" aria-hidden="true">
        <div class="title">Transition root</div>
        <div class="page transition-page"></div>
      </div>
      <div class="example" aria-hidden="true">
        <div class="title">User sees</div>
        <div class="page combined-page">
          <div class="states">
            <div class="state-1">Old page</div>
            <div class="state-2">New page</div>
          </div>
          <div class="what-user-sees">(Main DOM)</div>
        </div>
      </div>
      <div class="step" aria-live="polite">The user initiates a navigation</div>
    </div>
  `;

	/** @type {HTMLElement[]} */
	const [domPage, transitionPage, combinedPage] =
		slide.querySelectorAll('.page');

	/** @type {HTMLElement} */
	const whatUserSees = slide.querySelector('.what-user-sees');

	// This pauses the slide until 'Step forward' is clicked.
	yield;

	/** @type {HTMLElement} */
	const step = slide.querySelector('.step');
	step.textContent = `The old document is captured as the "old" state`;

	yield;

	step.textContent = 'Rendering paused';
	whatUserSees.textContent = '(Paused render)';

	yield;

	step.textContent = 'The navigation proceeds';
	domPage.innerHTML = `<div class="state-2">New page</div>`;

	yield;

	step.textContent = 'The new document is captured as the "new" state';

	yield;

	step.textContent = 'Transition pseudo-elements created';
	transitionPage.innerHTML = `
    <div class="states">
      <div class="state-1">Old page</div>
      <div class="state-2">New page</div>
    </div>
  `;

	yield;

	step.textContent =
		'Rendering unpaused, revealing the transition pseudo-elements';
	whatUserSees.textContent = '(Transition root)';

	yield;

	step.textContent = 'Pseudo-elements animate';

	// Wow, this would be way easier with view transitions…
	const states = [transitionPage, combinedPage].map((el) =>
		el.querySelector('.states')
	);
	const state1s = [transitionPage, combinedPage].map((el) =>
		el.querySelector('.state-1')
	);
	const state2s = [transitionPage, combinedPage].map((el) =>
		el.querySelector('.state-2')
	);

	for (const state of states) {
		transition(
			state,
			{ transform: 'translate(166px, 469px)' },
			{
				duration: 1000,
				easing: 'ease-in-out',
			}
		);
	}

	for (const state1 of state1s) {
		transition(
			state1,
			{ opacity: '0' },
			{
				duration: 1000,
				easing: 'ease-in-out',
			}
		);
	}

	for (const state2 of state2s) {
		transition(
			state2,
			{ opacity: '1' },
			{
				duration: 1000,
				easing: 'ease-in-out',
			}
		);
	}

	yield;

	step.textContent = 'Transition pseudo-elements removed';
	transitionPage.innerHTML = '';
	whatUserSees.textContent = '(Main DOM)';
});

document.querySelector('.stage').append(slide);
