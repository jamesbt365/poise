searchState.loadedDescShard("subtle", 0, "subtle   \nThe <code>Choice</code> struct represents a choice for use in …\nA type which can be conditionally negated in constant time.\nA type which can be conditionally selected in constant …\nAn <code>Eq</code>-like trait that produces a <code>Choice</code> instead of a <code>bool</code>.\nA type which can be compared in some manner and be …\nA type which can be compared in some manner and be …\nThe <code>CtOption&lt;T&gt;</code> type represents an optional value similar …\nReturns a <code>None</code> value if the option is <code>None</code>, otherwise …\nConditionally assign <code>other</code> to <code>self</code>, according to <code>choice</code>.\nNegate <code>self</code> if <code>choice == Choice(1)</code>; otherwise, leave it …\nSelect <code>a</code> or <code>b</code> according to <code>choice</code>.\nConditionally swap <code>self</code> and <code>other</code> if <code>choice == 1</code>; …\nDetermine if two items are equal.\nTwo <code>CtOption&lt;T&gt;</code>s are equal if they are both <code>Some</code> and their …\nDetermine whether <code>self &gt; other</code>.\nDetermine whether <code>self &lt; other</code>.\nDetermine if two items are NOT equal.\nReturns the contained value, consuming the <code>self</code> value.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a true <code>Choice</code> if this value is <code>None</code>.\nReturns a true <code>Choice</code> if this value is <code>Some</code>.\nReturns a <code>None</code> value if the option is <code>None</code>, otherwise …\nThis method is used to construct a new <code>CtOption&lt;T&gt;</code> and …\nReturns <code>self</code> if it contains a value, and otherwise returns …\nThis returns the underlying value but panics if it is not …\nThis returns the underlying value if it is <code>Some</code> or the …\nThis returns the underlying value if it is <code>Some</code> or the …\nUnwrap the <code>Choice</code> wrapper to reveal the underlying <code>u8</code>.")