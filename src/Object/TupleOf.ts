import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Cast} from '../Any/Cast'
import {Key} from '../Iteration/Key'
import {Next} from '../Iteration/Next'
import {Append} from '../Tuple/Append'
import {Equals} from '../Any/_api'
import {True} from '../Boolean/Boolean'

type PickIfEntry<O extends object, TN extends any[], I extends Iteration> =
    Key<I> extends keyof O
    ? Append<TN, O[Cast<Key<I>, keyof O>]>
    : TN

type _TupleOf<O extends object, K, TN extends any[] = [], I extends Iteration = IterationOf<'0'>> = {
    0: _TupleOf<O, Exclude<K, Key<I>>, PickIfEntry<O, TN, I>, Next<I>>
    1: TN
}[
    Equals<K, never> extends True
    ? 1
    : 0
]

/** Transform an **`object`** into a **tuple**
 * (It will only pick numeric literal indexes)
 * @param O to transform
 * @param LastK last index to pick
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type TupleOf<O extends object> =
    _TupleOf<O, keyof O> extends infer X
    ? Cast<X, any[]> // ^^^^ Clear keys from array
    : never
