import {Test, A} from '../src/index'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// ANY ///////////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// CAST

checks([
    check<A.Cast<[0, 1, 2], any>,   [0, 1, 2],      Test.Pass>(),
    check<A.Cast<{a: string}, {}>,  {a: string},    Test.Pass>(),
    check<A.Cast<string, object>,   object,         Test.Pass>(),
    check<A.Cast<any, string>,      any,            Test.Pass>(),
    check<A.Cast<0, 42>,            42,             Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// COMPUTE

// Cannot be tested

// ---------------------------------------------------------------------------------------
// EQUALS

checks([
    check<A.Equals<[0, 1], any>,            0,    Test.Pass>(),
    check<A.Equals<any, [0, 1]>,            0,    Test.Pass>(),
    check<A.Equals<any, [0, 1]>,            0,    Test.Pass>(),
    check<A.Equals<0, 0>,                   1,       Test.Pass>(),
    check<A.Equals<0, 1>,                   0,      Test.Pass>(),
    check<A.Equals<0, number>,              0,      Test.Pass>(),
    check<A.Equals<any, string>,            0,    Test.Pass>(),
    check<A.Equals<string, any>,            0,    Test.Pass>(),
    check<A.Equals<{}, object>,             0,       Test.Pass>(),
    check<A.Equals<{a: any}, object>,       0,      Test.Pass>(),
    check<A.Equals<object, {a: any}>,       0,      Test.Pass>(),
    check<A.Equals<any[], Array<any>>,      1,       Test.Pass>(),
    check<A.Equals<'a' | 'b', 'b' | 'a'>,   1,       Test.Pass>(),
    check<A.Equals<'a', 'a'>,               1,       Test.Pass>(),
    check<A.Equals<1 | 0, 0 | 1>,  1,       Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// EXTENDS

checks([
    check<A.Extends<any, any>,              1,       Test.Pass>(),
    check<A.Extends<[0, 1], any>,           1,       Test.Pass>(),
    check<A.Extends<any, [0, 1]>,           0,      Test.Fail>(),
    check<A.Extends<any, [0, 1]>,           0 | 1,    Test.Pass>(),
    check<A.Extends<0, 0>,                  1,       Test.Pass>(),
    check<A.Extends<0, 1>,                  0,      Test.Pass>(),
    check<A.Extends<0, number>,             1,       Test.Pass>(),
    check<A.Extends<any, string>,           0 | 1,    Test.Pass>(),
    check<A.Extends<string, any>,           1,       Test.Pass>(),
    check<A.Extends<{}, object>,            1,       Test.Pass>(),
    check<A.Extends<{a: any}, object>,      1,       Test.Pass>(),
    check<A.Extends<object, {a: any}>,      0,      Test.Pass>(),
    check<A.Extends<any[], Array<any>>,     1,       Test.Pass>(),
    check<A.Extends<'a' | 'b', 'b' | 'a'>,  1,       Test.Pass>(),
    check<A.Extends<'a', 'a'>,              1,       Test.Pass>(),
    check<A.Extends<never, never>,          0,      Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// IS

checks([
    check<A.Is<'xxxx', string, 'extends'>,  1,   Test.Pass>(),
    check<A.Is<string, 'xxxx', 'extends'>,  0,  Test.Pass>(),

    check<A.Is<'xxxx', string, 'equals'>,   0,  Test.Pass>(),
    check<A.Is<string, 'xxxx', 'equals'>,   0,  Test.Pass>(),

    check<A.Is<'xxxx', string, 'loose'>,    1,   Test.Pass>(),
    check<A.Is<string, 'xxxx', 'loose'>,    1,   Test.Pass>(),

    check<A.Is<string, string | number, 'extends'>, 1,       Test.Pass>(),
    check<A.Is<string | number, string, 'extends'>, 0 | 1,    Test.Pass>(),

    check<A.Is<string, string | number, 'equals'>,  0,  Test.Pass>(),
    check<A.Is<string | number, string, 'equals'>,  0,  Test.Pass>(),

    check<A.Is<string, string | number, 'loose'>,   1,   Test.Pass>(),
    check<A.Is<string | number, string, 'loose'>,   1,   Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// TRY

checks([
    check<A.Try<[0, 1, 2], any>,    [0, 1, 2],      Test.Pass>(),
    check<A.Try<{a: string}, {}>,   {a: string},    Test.Pass>(),
    check<A.Try<string, object>,    never,          Test.Pass>(),
    check<A.Try<any, string>,       any,            Test.Pass>(),
    check<A.Try<0, 42, 'xxxx'>,     'xxxx',         Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// TYPE

checks([
    check<A.Type<string, 'name'>,   any,                        Test.Fail>(),
    check<A.Type<string, 'name'>,   A.Type<string, 'other'>,    Test.Fail>(),
    check<A.Type<string, 'name'>,   A.Type<string, 'name'>,     Test.Pass>(),
])

// ---------------------------------------------------------------------------------------
// X

// Cannot be tested
