---
title: <button type="button" id="im-a-vt-button">I'm a View Transition</button>
---

<script type="module">
	const imAVTButton = document.querySelector(`button#im-a-vt-button`);
	const imAVTPopover = document.querySelector(`div#im-a-vt`);
	imAVTButton.addEventListener('click', () => {
		// Fallback for browsers that don't support this API:
		if (!document.startViewTransition) {
			imAVTPopover.togglePopover();
			return;
		}

		// With a View Transition:
		document.startViewTransition(() => {
			imAVTPopover.togglePopover()
		});
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

<div id="im-a-vt" popover>
	Wow! That's amazing!
</div>
