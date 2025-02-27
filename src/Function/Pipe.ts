import {Arrow} from './Arrow'
import {Pos} from '../Iteration/Pos'
import {Prev} from '../Iteration/Prev'
import {IterationOf} from '../Iteration/IterationOf'
import {Head} from '../Tuple/Head'
import {Last} from '../Tuple/Last'
import {NumberOf} from '../String/NumberOf'
import {ReturnOf} from './ReturnOf'
import {ParamsOf} from './ParamsOf'

type PipeFn<Fns extends Arrow[], K extends keyof Fns> =
    NumberOf<K> extends 0
    ? Fns[K] // If first item, do nothing to it. Otherwise, pipe them:
    : (arg: ReturnOf<Fns[Pos<Prev<IterationOf<K>>>]>) =>
        ReturnOf<Fns[Pos<IterationOf<K>>]>

/** Compute what the input of **`Pipe`** should be
 * @param Fns to pipe
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * /// If you are looking for creating types for `pipe`
 * /// `Piper` will check for input & `Piped` the output
 * declare function pipe<Fns extends Arrow[]>(...args: F.Piper<Fns>): F.Piped<Fns>
 * ```
 */
export type Piper<Fns extends Arrow[]> = {
    [K in keyof Fns]: PipeFn<Fns, K>
}

/** Pipe **`Function`**s together like **`pipe()`**
 * @param Fns to pipe
 * @returns **`Function`**
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * /// If you are looking for creating types for `pipe`
 * /// `Piper` will check for input & `Piped` the output
 * declare function pipe<Fns extends Arrow[]>(...args: F.Piper<Fns>): F.Piped<Fns>
 * ```
 */
export type Piped<Fns extends Arrow[]> =
    (...args: ParamsOf<Head<Fns>>) => ReturnOf<Last<Fns>>
