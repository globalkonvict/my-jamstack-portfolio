---
templateKey: blog-post
title: 'CSS Pseudo-classes: Element states'
date: 2022-01-25T07:23:40.430Z
description: >
  So far, we have already had a look at links and form pseudo-classes. In this
  article, we'll dive into element states. Element states reflect on a specific
  condition an element could have. This can, for instance, be first-of-type or
  the last-child.
featuredpost: true
featuredimage: /img/css-back.png
tags:
  - css
  - programming
  - tips
  - tutorial
---

So far, we have already had a look at links and form pseudo-classes. In this article, we'll dive into element states.

Element states reflect on a specific condition an element could have. This can, for instance, be `first-of-type` or the `last-child`.

I've split this up into a series of four, where this is the third part about form pseudo-states.

The other parts:

- [Link pseudo-states](https://daily-dev-tips.com/posts/css-pseudo-classes-links/)
- [Form pseudo-states](https://daily-dev-tips.com/posts/css-pseudo-classes-forms/)
- *Element state selectors* (this one 💖)
- Other pseudo states (coming soon)

## [](https://dev.to/dailydevtips1/css-pseudo-classes-element-states-1gim#element-state-selectors)Element state selectors

Element state selectors are pseudo-classes I've used a lot in my articles.\
They are a great way to select a particular matching element and apply specific styling.

We get the following options:

- `:first-child`
- `:last-child`
- `:only-child`
- `:first-of-type`
- `:last-of-type`
- `:nth-child`
- `:nth-of-type`
- `:only-of-type`
- `:empty`

### [](https://dev.to/dailydevtips1/css-pseudo-classes-element-states-1gim#-raw-firstchild-endraw-raw-lastchild-endraw-amp-raw-onlychild-endraw-)`:first-child`, `:last-child`, & `:only-child`

These are great if you want to apply specific styling to the first or last elements.

They are often used to offset margin on a list, for instance.

Let's try out something simple and change the colors of the first and last elements.

```css
li:first-child {
  color: hotPink;
}
li:last-child {
  color: teal;
}
```

And for the only-child, we can use the following selector.

```css
li:only-child {
  color: crimson;
}
```

Be careful when using these as they fire in order.\
If you have all three, the only-=child technically also is valid for the first & last-child selector!

You can see what happens in this CodePen.

### [](https://dev.to/dailydevtips1/css-pseudo-classes-element-states-1gim#-raw-firstoftype-endraw-amp-raw-lastoftype-endraw-)`:first-of-type` & `:last-of-type`

These are very close to the above, but with one distinct difference.

For instance, `first-child` needs the element to be the first element in the selector.\
As `first-of-type` it styles the first occurrence of that element.

The easiest way to showcase this is by having an HTML structure where we want the first `strong` element to be thicker than the rest.

```html
<div>
  <p>Line one</p>
  <strong>Important line</strong>
  <p>Line two</p>
  <strong>Slightly less important line</strong>
  <p>Line three</p>
</div>
```

```css
div > strong:first-child {
  color: hotPink;
}
div > strong:first-of-type {
  color: purple;
  font-size: 1.5rem;
}
```

You'll be able to see the first strong being purple and not pink because that won't fire!

> Note: You can even try and remove the `first-of-type` line.

And the same can be done with `last-of-type`.

```css
div > strong:last-child {
  color: gold;
}
div > strong:last-of-type {
  color: crimson;
}
```

You can see what happens in the CodePen below.

### [](https://dev.to/dailydevtips1/css-pseudo-classes-element-states-1gim#-raw-nthchild-endraw-amp-raw-nthoftype-endraw-)`nth-child` & `nth-of-type`

These two are fantastic, and I use these quite often.\
If even dedicated a complete article on [CSS `nth-child` selectors](https://daily-dev-tips.com/posts/css-nth-child-selector-basics/).

They can be used the select the `x`th item.

For instance you can to style the second item:

```css
li:nth-child(2) {
  background: gold;
}
```

The cool part with this selector is that it doesn't just have one static value. You can use values like:

- `odd`/`even`: Select odd or even numbers
- `2n+2`: Select every 2nd item

> Note: [CSS-tricks has this cool nth-tester tool](https://css-tricks.com/examples/nth-child-tester/)

Let's try them out:

```css
li:nth-child(2) {
  color: hotPink;
}
li:nth-child(odd) {
  color: hotPink;
}
li:nth-child(2n + 2) {
  color: hotPink;
}
```

And again, we can use the `nth-of-type` selector to target types instead of actual first items.\
This can be super useful for images, for instance, if you want them left/right based on their occurrence.

### [](https://dev.to/dailydevtips1/css-pseudo-classes-element-states-1gim#-raw-onlyoftype-endraw-)`only-of-type`

This is quite a funny one. It fires if the selector is only one of a type.

Where the `only-child` can only have one child, this one can say if an element only has 1 of this child.

```css
strong:only-of-type {
  color: hotPink;
}
```

Which will result in the following:

### [](https://dev.to/dailydevtips1/css-pseudo-classes-element-states-1gim#-raw-empty-endraw-)`:empty`

The last one is the empty selector. It can be used to indicate empty elements.

Some people even use this as a way to find misplaced elements.

You can also use this when using WYSIWYG editors that add empty `p` tags.

```css
:empty {
  display: none;
}
```

### [](https://dev.to/dailydevtips1/css-pseudo-classes-element-states-1gim#thank-you-for-reading-and-lets-connect)Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
