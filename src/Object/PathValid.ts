import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Next} from '../Iteration/Next'
import {Pos} from '../Iteration/Pos'
import {Length} from '../Tuple/Length'
import {At} from './At'
import {Cast} from '../Any/Cast'
import {NonNullable as UNonNullable} from '../Union/NonNullable'
import {Update} from '../Tuple/Update'
import {KeySet} from '../Tuple/_api'
import {Key} from '../Iteration/Key'
import {Prev} from '../Iteration/Prev'

/** Replaces invalid parts of a path with `never`
 * @param O to be inspected
 * @param Path to be validated
 * @returns **`string[]`**
 * @example
 * ```ts
 * ```
 */
type _PathValid<O, Path extends string[], I extends Iteration = IterationOf<'0'>> = {
    0: _PathValid<UNonNullable<At<O & {}, Path[Pos<I>]>>, Path, Next<I>>
    1: Update<Path, KeySet<Key<Prev<I>>, Length<Path, 's'>>, never>
}[
    [O] extends [never] // Inspect til we find a problem
    ? 1                 // Its either the end or invalid
    : 0                 // No problem so far so continue
] // Similar logic to Path

/** Get in **`O`** the type of nested properties
 * @param O to be inspected
 * @param Path to be followed
 * @returns **`any`**
 * @example
 * ```ts
 * ```
 */
export type PathValid<O extends object, Path extends string[]> =
    _PathValid<O, Path> extends infer X
    ? Cast<X, string[]>
    : never
