The Unit component method returns a component with a language and unit sensitive representation of this number based on [Numbers and Unit from the Editorial Guidelines](https://cdn.wfp.org/guides/editorial/content/numbers-and-units/) the [Numbers and Units Reference on developer.mozilla.org](http://cdn.wfp.org/guides/editorial/content/numbers-and-units).

### Usage with react

```
```js
import { Unit } from '@wfp/ui';
```

```js
<Unit
  type="Usd" 
  input="thousand" 
  output="million" 
  showZero 
  hideEmpty
>
  1234567
</Unit>
```
