---
title: <button type="button" id="im-a-vt-button">I'm a View Transition</button>
---

<script type="module">
	const imAVTButton = document.querySelector(`button#im-a-vt-button`);
	const imAVTPopover = document.querySelector(`div#im-a-vt`);

	imAVTButton.addEventListener('click', (event) => {
		event.stopPropagation();

		// Fallback for browsers that don't support this API:
		if (!document.startViewTransition) {
			imAVTPopover.togglePopover();
			return;
		}

		// With a View Transition:
		document.startViewTransition(() => {
			imAVTPopover.togglePopover();
		});
	});

	const hidePopover = () => {
		// Fallback for browsers that don't support this API:
		if (!document.startViewTransition) {
			imAVTPopover.hidePopover();
			return;
		}

		// With a View Transition:
		document.startViewTransition(() => {
			imAVTPopover.hidePopover();
		});
	}

	document.documentElement.addEventListener('click', (event) => {
		if (event.target === imAVTPopover) return;
		hidePopover();
	});

	window.addEventListener('keyup', (event) => {
		if (event.key !== "Escape") return;
		hidePopover();
	});
</script>

<style>
	#im-a-vt {
		block-size: 50vmin;
		inline-size: 50vmin;
		place-self: center;
		view-transition-name: im-a-vt-popover;
	}
</style>

<div id="im-a-vt" popover="manual">
	Wow! That's amazing!
</div>
