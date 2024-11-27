---
title: Pseudo-elements
notes: |
  - `::view-transition`: The root of the view transitions overlay, which contains all view transitions and sits over the top of all other page content.
  - `::view-transition-group()`: The root of a single view transition.
  - `::view-transition-image-pair()`: The container for a view transition's old and new views — before and after the transition.
  - `::view-transition-old()`: A static snapshot of the old view, before the transition.
  - `::view-transition-new()`: A live representation of the new view, after the transition.
  - Both are render as CSS 'replaced content' (like an `<img>`).
---

```
// [!code word:view-transition:5]
// [!code word:group]
// [!code word:image-pair]
// [!code word:old]
// [!code word:new]
::view-transition
└─ ::view-transition-group(root)
	└─ ::view-transition-image-pair(root)
			├─ ::view-transition-old(root)
			└─ ::view-transition-new(root)
```
