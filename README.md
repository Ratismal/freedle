<h1>What is Freedle?</h1>
<p>
  Yeah, I'm not gonna bullshit you.
  This is just Wordle. You know, that word guessing game.
  I'm not gonna bother explaining the rules,
  I'm sure you already know. 'Cuz this is just Wordle.
</p>

<p>
  ...but it's also Wordle that's been rewritten from scratch,
  <a href="https://github.com/ratismal/freedle" target="_blank">open-sourced</a>,
  guaranteed to always be free, never paywalled,
  with absolutely no analytics or tracking.
  With a bunch of new features jammed in that I thought
  were neat.
</p>

<p>
  I'm making this for myself. You're welcome to use it too. Have fun.
</p>

To restore your statistics from Wordle, copy the "statistics" localStorage property, and run this on Freedle:
```js
const state = JSON.parse(localStorage.getItem('vuex'))
const stats = { /* PASTE YOUR WORDLE STATISTICS OBJECT HERE */ }

state.statistics = { ...stats, lastScore: 0, lastGame: Date.now() }
localStorage.setItem('vuex', JSON.stringify(state))
```
Ex.
![](https://media.discordapp.net/attachments/854897011198918656/949527380551139418/2022-03-04_21-42-44_vivaldi.png)

<h2>Have an issue?</h2>

<p>
  Try making an issue <a href="https://github.com/ratismal/freedle/issues" target="_blank">here</a>.
  I may or may not get to it, depending on if I feel like it.
</p>

<h2>Attribution</h2>
<ul>
  <li>
    <a href="https://dailywordle.com" target="_blank">Wordle</a> (<a href="https://www.powerlanguage.co.uk" target="_blank">Josh/powerlanguage</a>, New York Times)
  </li>
  <li>
    Wii Sports audio clips (Nintendo, Josh Millman)
  </li>
  <li>
    "Nice Cock" generated using <a href="https://uberduck.ai" target="_blank">uberduck.ai</a>
  </li>
</ul>
