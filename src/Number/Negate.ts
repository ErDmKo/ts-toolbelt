import {_Minus} from './Minus'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Nbr} from './_Internal'
import {Format} from '../Iteration/_Internal'
import {Fmt} from '../Iteration/Fmt'

export type _Negate<N extends Iteration> =
    _Minus<IterationOf<'0'>, N>

/** Negate a **number**
 * @param N to negate
 * @param fmt output (?=`'s'`)
 * @returns **`string`** or **`number`**
 * @example
 * ```ts
 * import {N} from 'ts-toolbelt'
 *
 * type test0 = N.Negate<'-10'>     //  '10'
 * type test1 = N.Negate<'10'>      // '-10'
 * type test2 = N.Negate<'10', 's'> // '-10'
 * type test3 = N.Negate<'10', 'n'> //  -10
 * type test4 = N.Negate<'-100'>    // string
 * ```
 */
export type Negate<N extends Nbr, fmt extends Format = 's'> =
    Fmt<_Negate<IterationOf<N>>, fmt>
