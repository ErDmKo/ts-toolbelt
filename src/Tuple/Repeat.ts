import {Next} from '../Iteration/Next'
import {Prepend} from './Prepend'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/_Iteration'
import {Nbr} from '../Number/_Internal'
import {Cast} from '../Any/Cast'
import {Key} from '../Iteration/Key'

type _Repeat<N extends Nbr, A, T extends any[] = [], I extends Iteration = IterationOf<'0'>> = {
    0: _Repeat<N, A, Prepend<T, A>, Next<I>>
    1: T
}[
    N extends Key<I>
    ? 1
    : 0
]

/** Fill a **tuple** with **`N`** times **`A`**
 * @param A to fill with
 * @param N to repeat it
 * @param T to be filled (?=[])
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Repeat<A extends any, N extends Nbr, T extends any[] = []> =
    _Repeat<N, A, T> extends infer X
    ? Cast<X, any[]>
    : never
