---
title: Thanks for listening!
notes: |
  Thank you so much for listening everyone!
  You can scan that QR code or head to the link ellyloel.com to head to my website where you can also find links to all my other socials.
animation: none
align: left
---

## 🔗 [ellyloel.com](https://ellyloel.com)

## 🐘 [@elly@front-end.social](https://front-end.social/@elly)

## 🦋 [@ellyloel.com](https://bsky.app/profile/ellyloel.com)

![A digital drawing of me in the style of a Club Penguin character sitting on the ground in front of a laptop.](../images/Penguin.png)

<div class="me">

![A digital drawing of me side on with headphones on sitting at my desk in front of a keyboard and monitor. In between my head and the monitor is a QR code and below that text that reads: "ellyloel.com".](../images/Elly%20QR.png)

</div>
<style>
  @media (width >= 50em) {
    body {
      overflow: clip;
    }
  }
  @container (inline-size < 50em) {
    img {
      max-inline-size: 400px;
    }
  }
  @container (inline-size >= 50em) {
    main {
      gap: var(--size-7);
    }
    h1 {
      font-size: 6em;
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
      --flow-space: 0;
      display: grid;
      inline-size: fit-content;
      & img {
        margin-block-start: 0;
        inline-size: 26vi;
      }
    }
    .me {
      margin: 0;
      & img {
        position: absolute;
        bottom: -15lvb;
        right: 5vi;
        inline-size: 60vi;
        pointer-events: none;
      }
    }
  }
</style>
