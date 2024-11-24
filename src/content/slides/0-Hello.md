---
title: Hi, I'm <span>Elly Loel</span> <small>(she/her)</small>
notes: |
  Hi, I’m Elly Loel, my pronouns are she/her.
  Quick self description: I’m a tall white trans woman with blonde hair.
animation: none
align: left
---

## 🎞️ [elly.to/wdds24-slides](https://elly.to/wdds24-slides)

![](../images/qr-code.svg)

<div class="me">

![A digital drawing of me smiling and holding up a peace sign with my hands, wearing a white "Golf le Fleur" jumper.](../images/Elly.png)

</div>
<style>
  @media (width >= 50em) {
    body {
      overflow: clip;
    }
  }
  @container (inline-size < 50em) {
    h1 {
      font-size: 4.5em;
      & small {
        display: block;
        color: var(--brand);
      }
    }
    .me {
      max-inline-size: 400px;
    }
    .content > :not(.me) img {
      display: none;
    }
  }
  @container (inline-size >= 50em) {
    main {
      gap: var(--size-7);
    }
    h1 {
      font-size: 7.75em;
      line-height: 1;
      & small {
        color: var(--brand);
      }
    }
    h2 {
      font-weight: var(--font-weight-4);
      font-size: 3.25em;
    }
    .content {
      display: grid;
      inline-size: fit-content;
      & img {
        margin-block-start: var(--size-7);
        inline-size: 30vi;
      }
    }
    .me {
      margin: 0;
      & img {
        position: absolute;
        bottom: 0;
        right: 10vi;
        inline-size: 35vi;
      }
    }
  }
</style>
