
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user_tb
 * 
 */
export type user_tb = $Result.DefaultSelection<Prisma.$user_tbPayload>
/**
 * Model money_tracking_db
 * 
 */
export type money_tracking_db = $Result.DefaultSelection<Prisma.$money_tracking_dbPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_tbs
 * const user_tbs = await prisma.user_tb.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more User_tbs
   * const user_tbs = await prisma.user_tb.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user_tb`: Exposes CRUD operations for the **user_tb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_tbs
    * const user_tbs = await prisma.user_tb.findMany()
    * ```
    */
  get user_tb(): Prisma.user_tbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.money_tracking_db`: Exposes CRUD operations for the **money_tracking_db** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Money_tracking_dbs
    * const money_tracking_dbs = await prisma.money_tracking_db.findMany()
    * ```
    */
  get money_tracking_db(): Prisma.money_tracking_dbDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user_tb: 'user_tb',
    money_tracking_db: 'money_tracking_db'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user_tb" | "money_tracking_db"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user_tb: {
        payload: Prisma.$user_tbPayload<ExtArgs>
        fields: Prisma.user_tbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_tbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_tbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          findFirst: {
            args: Prisma.user_tbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_tbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          findMany: {
            args: Prisma.user_tbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>[]
          }
          create: {
            args: Prisma.user_tbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          createMany: {
            args: Prisma.user_tbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_tbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          update: {
            args: Prisma.user_tbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          deleteMany: {
            args: Prisma.user_tbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_tbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_tbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tbPayload>
          }
          aggregate: {
            args: Prisma.User_tbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_tb>
          }
          groupBy: {
            args: Prisma.user_tbGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_tbGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_tbCountArgs<ExtArgs>
            result: $Utils.Optional<User_tbCountAggregateOutputType> | number
          }
        }
      }
      money_tracking_db: {
        payload: Prisma.$money_tracking_dbPayload<ExtArgs>
        fields: Prisma.money_tracking_dbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.money_tracking_dbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tracking_dbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.money_tracking_dbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tracking_dbPayload>
          }
          findFirst: {
            args: Prisma.money_tracking_dbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tracking_dbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.money_tracking_dbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tracking_dbPayload>
          }
          findMany: {
            args: Prisma.money_tracking_dbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tracking_dbPayload>[]
          }
          create: {
            args: Prisma.money_tracking_dbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tracking_dbPayload>
          }
          createMany: {
            args: Prisma.money_tracking_dbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.money_tracking_dbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tracking_dbPayload>
          }
          update: {
            args: Prisma.money_tracking_dbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tracking_dbPayload>
          }
          deleteMany: {
            args: Prisma.money_tracking_dbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.money_tracking_dbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.money_tracking_dbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$money_tracking_dbPayload>
          }
          aggregate: {
            args: Prisma.Money_tracking_dbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoney_tracking_db>
          }
          groupBy: {
            args: Prisma.money_tracking_dbGroupByArgs<ExtArgs>
            result: $Utils.Optional<Money_tracking_dbGroupByOutputType>[]
          }
          count: {
            args: Prisma.money_tracking_dbCountArgs<ExtArgs>
            result: $Utils.Optional<Money_tracking_dbCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user_tb?: user_tbOmit
    money_tracking_db?: money_tracking_dbOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model user_tb
   */

  export type AggregateUser_tb = {
    _count: User_tbCountAggregateOutputType | null
    _avg: User_tbAvgAggregateOutputType | null
    _sum: User_tbSumAggregateOutputType | null
    _min: User_tbMinAggregateOutputType | null
    _max: User_tbMaxAggregateOutputType | null
  }

  export type User_tbAvgAggregateOutputType = {
    userId: number | null
  }

  export type User_tbSumAggregateOutputType = {
    userId: number | null
  }

  export type User_tbMinAggregateOutputType = {
    userId: number | null
    userFullname: string | null
    userBirthDate: string | null
    userName: string | null
    userPassword: string | null
    userImage: string | null
  }

  export type User_tbMaxAggregateOutputType = {
    userId: number | null
    userFullname: string | null
    userBirthDate: string | null
    userName: string | null
    userPassword: string | null
    userImage: string | null
  }

  export type User_tbCountAggregateOutputType = {
    userId: number
    userFullname: number
    userBirthDate: number
    userName: number
    userPassword: number
    userImage: number
    _all: number
  }


  export type User_tbAvgAggregateInputType = {
    userId?: true
  }

  export type User_tbSumAggregateInputType = {
    userId?: true
  }

  export type User_tbMinAggregateInputType = {
    userId?: true
    userFullname?: true
    userBirthDate?: true
    userName?: true
    userPassword?: true
    userImage?: true
  }

  export type User_tbMaxAggregateInputType = {
    userId?: true
    userFullname?: true
    userBirthDate?: true
    userName?: true
    userPassword?: true
    userImage?: true
  }

  export type User_tbCountAggregateInputType = {
    userId?: true
    userFullname?: true
    userBirthDate?: true
    userName?: true
    userPassword?: true
    userImage?: true
    _all?: true
  }

  export type User_tbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tb to aggregate.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_tbs
    **/
    _count?: true | User_tbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_tbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_tbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_tbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_tbMaxAggregateInputType
  }

  export type GetUser_tbAggregateType<T extends User_tbAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_tb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_tb[P]>
      : GetScalarType<T[P], AggregateUser_tb[P]>
  }




  export type user_tbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tbWhereInput
    orderBy?: user_tbOrderByWithAggregationInput | user_tbOrderByWithAggregationInput[]
    by: User_tbScalarFieldEnum[] | User_tbScalarFieldEnum
    having?: user_tbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_tbCountAggregateInputType | true
    _avg?: User_tbAvgAggregateInputType
    _sum?: User_tbSumAggregateInputType
    _min?: User_tbMinAggregateInputType
    _max?: User_tbMaxAggregateInputType
  }

  export type User_tbGroupByOutputType = {
    userId: number
    userFullname: string
    userBirthDate: string
    userName: string
    userPassword: string
    userImage: string
    _count: User_tbCountAggregateOutputType | null
    _avg: User_tbAvgAggregateOutputType | null
    _sum: User_tbSumAggregateOutputType | null
    _min: User_tbMinAggregateOutputType | null
    _max: User_tbMaxAggregateOutputType | null
  }

  type GetUser_tbGroupByPayload<T extends user_tbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_tbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_tbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_tbGroupByOutputType[P]>
            : GetScalarType<T[P], User_tbGroupByOutputType[P]>
        }
      >
    >


  export type user_tbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userFullname?: boolean
    userBirthDate?: boolean
    userName?: boolean
    userPassword?: boolean
    userImage?: boolean
  }, ExtArgs["result"]["user_tb"]>



  export type user_tbSelectScalar = {
    userId?: boolean
    userFullname?: boolean
    userBirthDate?: boolean
    userName?: boolean
    userPassword?: boolean
    userImage?: boolean
  }

  export type user_tbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "userFullname" | "userBirthDate" | "userName" | "userPassword" | "userImage", ExtArgs["result"]["user_tb"]>

  export type $user_tbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_tb"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      userFullname: string
      userBirthDate: string
      userName: string
      userPassword: string
      userImage: string
    }, ExtArgs["result"]["user_tb"]>
    composites: {}
  }

  type user_tbGetPayload<S extends boolean | null | undefined | user_tbDefaultArgs> = $Result.GetResult<Prisma.$user_tbPayload, S>

  type user_tbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_tbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_tbCountAggregateInputType | true
    }

  export interface user_tbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_tb'], meta: { name: 'user_tb' } }
    /**
     * Find zero or one User_tb that matches the filter.
     * @param {user_tbFindUniqueArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_tbFindUniqueArgs>(args: SelectSubset<T, user_tbFindUniqueArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_tb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_tbFindUniqueOrThrowArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_tbFindUniqueOrThrowArgs>(args: SelectSubset<T, user_tbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_tb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbFindFirstArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_tbFindFirstArgs>(args?: SelectSubset<T, user_tbFindFirstArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_tb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbFindFirstOrThrowArgs} args - Arguments to find a User_tb
     * @example
     * // Get one User_tb
     * const user_tb = await prisma.user_tb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_tbFindFirstOrThrowArgs>(args?: SelectSubset<T, user_tbFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_tbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_tbs
     * const user_tbs = await prisma.user_tb.findMany()
     * 
     * // Get first 10 User_tbs
     * const user_tbs = await prisma.user_tb.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const user_tbWithUserIdOnly = await prisma.user_tb.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends user_tbFindManyArgs>(args?: SelectSubset<T, user_tbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_tb.
     * @param {user_tbCreateArgs} args - Arguments to create a User_tb.
     * @example
     * // Create one User_tb
     * const User_tb = await prisma.user_tb.create({
     *   data: {
     *     // ... data to create a User_tb
     *   }
     * })
     * 
     */
    create<T extends user_tbCreateArgs>(args: SelectSubset<T, user_tbCreateArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_tbs.
     * @param {user_tbCreateManyArgs} args - Arguments to create many User_tbs.
     * @example
     * // Create many User_tbs
     * const user_tb = await prisma.user_tb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_tbCreateManyArgs>(args?: SelectSubset<T, user_tbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_tb.
     * @param {user_tbDeleteArgs} args - Arguments to delete one User_tb.
     * @example
     * // Delete one User_tb
     * const User_tb = await prisma.user_tb.delete({
     *   where: {
     *     // ... filter to delete one User_tb
     *   }
     * })
     * 
     */
    delete<T extends user_tbDeleteArgs>(args: SelectSubset<T, user_tbDeleteArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_tb.
     * @param {user_tbUpdateArgs} args - Arguments to update one User_tb.
     * @example
     * // Update one User_tb
     * const user_tb = await prisma.user_tb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_tbUpdateArgs>(args: SelectSubset<T, user_tbUpdateArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_tbs.
     * @param {user_tbDeleteManyArgs} args - Arguments to filter User_tbs to delete.
     * @example
     * // Delete a few User_tbs
     * const { count } = await prisma.user_tb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_tbDeleteManyArgs>(args?: SelectSubset<T, user_tbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_tbs
     * const user_tb = await prisma.user_tb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_tbUpdateManyArgs>(args: SelectSubset<T, user_tbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_tb.
     * @param {user_tbUpsertArgs} args - Arguments to update or create a User_tb.
     * @example
     * // Update or create a User_tb
     * const user_tb = await prisma.user_tb.upsert({
     *   create: {
     *     // ... data to create a User_tb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_tb we want to update
     *   }
     * })
     */
    upsert<T extends user_tbUpsertArgs>(args: SelectSubset<T, user_tbUpsertArgs<ExtArgs>>): Prisma__user_tbClient<$Result.GetResult<Prisma.$user_tbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_tbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbCountArgs} args - Arguments to filter User_tbs to count.
     * @example
     * // Count the number of User_tbs
     * const count = await prisma.user_tb.count({
     *   where: {
     *     // ... the filter for the User_tbs we want to count
     *   }
     * })
    **/
    count<T extends user_tbCountArgs>(
      args?: Subset<T, user_tbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_tbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_tbAggregateArgs>(args: Subset<T, User_tbAggregateArgs>): Prisma.PrismaPromise<GetUser_tbAggregateType<T>>

    /**
     * Group by User_tb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_tbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_tbGroupByArgs['orderBy'] }
        : { orderBy?: user_tbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_tbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_tbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_tb model
   */
  readonly fields: user_tbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_tb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_tbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_tb model
   */
  interface user_tbFieldRefs {
    readonly userId: FieldRef<"user_tb", 'Int'>
    readonly userFullname: FieldRef<"user_tb", 'String'>
    readonly userBirthDate: FieldRef<"user_tb", 'String'>
    readonly userName: FieldRef<"user_tb", 'String'>
    readonly userPassword: FieldRef<"user_tb", 'String'>
    readonly userImage: FieldRef<"user_tb", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_tb findUnique
   */
  export type user_tbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb findUniqueOrThrow
   */
  export type user_tbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb findFirst
   */
  export type user_tbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tbs.
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tbs.
     */
    distinct?: User_tbScalarFieldEnum | User_tbScalarFieldEnum[]
  }

  /**
   * user_tb findFirstOrThrow
   */
  export type user_tbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter, which user_tb to fetch.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tbs.
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tbs.
     */
    distinct?: User_tbScalarFieldEnum | User_tbScalarFieldEnum[]
  }

  /**
   * user_tb findMany
   */
  export type user_tbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter, which user_tbs to fetch.
     */
    where?: user_tbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tbs to fetch.
     */
    orderBy?: user_tbOrderByWithRelationInput | user_tbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_tbs.
     */
    cursor?: user_tbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tbs.
     */
    skip?: number
    distinct?: User_tbScalarFieldEnum | User_tbScalarFieldEnum[]
  }

  /**
   * user_tb create
   */
  export type user_tbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * The data needed to create a user_tb.
     */
    data: XOR<user_tbCreateInput, user_tbUncheckedCreateInput>
  }

  /**
   * user_tb createMany
   */
  export type user_tbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_tbs.
     */
    data: user_tbCreateManyInput | user_tbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_tb update
   */
  export type user_tbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * The data needed to update a user_tb.
     */
    data: XOR<user_tbUpdateInput, user_tbUncheckedUpdateInput>
    /**
     * Choose, which user_tb to update.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb updateMany
   */
  export type user_tbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_tbs.
     */
    data: XOR<user_tbUpdateManyMutationInput, user_tbUncheckedUpdateManyInput>
    /**
     * Filter which user_tbs to update
     */
    where?: user_tbWhereInput
    /**
     * Limit how many user_tbs to update.
     */
    limit?: number
  }

  /**
   * user_tb upsert
   */
  export type user_tbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * The filter to search for the user_tb to update in case it exists.
     */
    where: user_tbWhereUniqueInput
    /**
     * In case the user_tb found by the `where` argument doesn't exist, create a new user_tb with this data.
     */
    create: XOR<user_tbCreateInput, user_tbUncheckedCreateInput>
    /**
     * In case the user_tb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_tbUpdateInput, user_tbUncheckedUpdateInput>
  }

  /**
   * user_tb delete
   */
  export type user_tbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
    /**
     * Filter which user_tb to delete.
     */
    where: user_tbWhereUniqueInput
  }

  /**
   * user_tb deleteMany
   */
  export type user_tbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tbs to delete
     */
    where?: user_tbWhereInput
    /**
     * Limit how many user_tbs to delete.
     */
    limit?: number
  }

  /**
   * user_tb without action
   */
  export type user_tbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tb
     */
    select?: user_tbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tb
     */
    omit?: user_tbOmit<ExtArgs> | null
  }


  /**
   * Model money_tracking_db
   */

  export type AggregateMoney_tracking_db = {
    _count: Money_tracking_dbCountAggregateOutputType | null
    _avg: Money_tracking_dbAvgAggregateOutputType | null
    _sum: Money_tracking_dbSumAggregateOutputType | null
    _min: Money_tracking_dbMinAggregateOutputType | null
    _max: Money_tracking_dbMaxAggregateOutputType | null
  }

  export type Money_tracking_dbAvgAggregateOutputType = {
    moneyId: number | null
    moneyInOut: number | null
    moneyType: number | null
    userId: number | null
  }

  export type Money_tracking_dbSumAggregateOutputType = {
    moneyId: number | null
    moneyInOut: number | null
    moneyType: number | null
    userId: number | null
  }

  export type Money_tracking_dbMinAggregateOutputType = {
    moneyId: number | null
    moneyDetail: string | null
    moneyDate: string | null
    moneyInOut: number | null
    moneyType: number | null
    userId: number | null
  }

  export type Money_tracking_dbMaxAggregateOutputType = {
    moneyId: number | null
    moneyDetail: string | null
    moneyDate: string | null
    moneyInOut: number | null
    moneyType: number | null
    userId: number | null
  }

  export type Money_tracking_dbCountAggregateOutputType = {
    moneyId: number
    moneyDetail: number
    moneyDate: number
    moneyInOut: number
    moneyType: number
    userId: number
    _all: number
  }


  export type Money_tracking_dbAvgAggregateInputType = {
    moneyId?: true
    moneyInOut?: true
    moneyType?: true
    userId?: true
  }

  export type Money_tracking_dbSumAggregateInputType = {
    moneyId?: true
    moneyInOut?: true
    moneyType?: true
    userId?: true
  }

  export type Money_tracking_dbMinAggregateInputType = {
    moneyId?: true
    moneyDetail?: true
    moneyDate?: true
    moneyInOut?: true
    moneyType?: true
    userId?: true
  }

  export type Money_tracking_dbMaxAggregateInputType = {
    moneyId?: true
    moneyDetail?: true
    moneyDate?: true
    moneyInOut?: true
    moneyType?: true
    userId?: true
  }

  export type Money_tracking_dbCountAggregateInputType = {
    moneyId?: true
    moneyDetail?: true
    moneyDate?: true
    moneyInOut?: true
    moneyType?: true
    userId?: true
    _all?: true
  }

  export type Money_tracking_dbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which money_tracking_db to aggregate.
     */
    where?: money_tracking_dbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of money_tracking_dbs to fetch.
     */
    orderBy?: money_tracking_dbOrderByWithRelationInput | money_tracking_dbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: money_tracking_dbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` money_tracking_dbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` money_tracking_dbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned money_tracking_dbs
    **/
    _count?: true | Money_tracking_dbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Money_tracking_dbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Money_tracking_dbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Money_tracking_dbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Money_tracking_dbMaxAggregateInputType
  }

  export type GetMoney_tracking_dbAggregateType<T extends Money_tracking_dbAggregateArgs> = {
        [P in keyof T & keyof AggregateMoney_tracking_db]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoney_tracking_db[P]>
      : GetScalarType<T[P], AggregateMoney_tracking_db[P]>
  }




  export type money_tracking_dbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: money_tracking_dbWhereInput
    orderBy?: money_tracking_dbOrderByWithAggregationInput | money_tracking_dbOrderByWithAggregationInput[]
    by: Money_tracking_dbScalarFieldEnum[] | Money_tracking_dbScalarFieldEnum
    having?: money_tracking_dbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Money_tracking_dbCountAggregateInputType | true
    _avg?: Money_tracking_dbAvgAggregateInputType
    _sum?: Money_tracking_dbSumAggregateInputType
    _min?: Money_tracking_dbMinAggregateInputType
    _max?: Money_tracking_dbMaxAggregateInputType
  }

  export type Money_tracking_dbGroupByOutputType = {
    moneyId: number
    moneyDetail: string | null
    moneyDate: string | null
    moneyInOut: number
    moneyType: number
    userId: number
    _count: Money_tracking_dbCountAggregateOutputType | null
    _avg: Money_tracking_dbAvgAggregateOutputType | null
    _sum: Money_tracking_dbSumAggregateOutputType | null
    _min: Money_tracking_dbMinAggregateOutputType | null
    _max: Money_tracking_dbMaxAggregateOutputType | null
  }

  type GetMoney_tracking_dbGroupByPayload<T extends money_tracking_dbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Money_tracking_dbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Money_tracking_dbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Money_tracking_dbGroupByOutputType[P]>
            : GetScalarType<T[P], Money_tracking_dbGroupByOutputType[P]>
        }
      >
    >


  export type money_tracking_dbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    moneyId?: boolean
    moneyDetail?: boolean
    moneyDate?: boolean
    moneyInOut?: boolean
    moneyType?: boolean
    userId?: boolean
  }, ExtArgs["result"]["money_tracking_db"]>



  export type money_tracking_dbSelectScalar = {
    moneyId?: boolean
    moneyDetail?: boolean
    moneyDate?: boolean
    moneyInOut?: boolean
    moneyType?: boolean
    userId?: boolean
  }

  export type money_tracking_dbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"moneyId" | "moneyDetail" | "moneyDate" | "moneyInOut" | "moneyType" | "userId", ExtArgs["result"]["money_tracking_db"]>

  export type $money_tracking_dbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "money_tracking_db"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      moneyId: number
      moneyDetail: string | null
      moneyDate: string | null
      moneyInOut: number
      moneyType: number
      userId: number
    }, ExtArgs["result"]["money_tracking_db"]>
    composites: {}
  }

  type money_tracking_dbGetPayload<S extends boolean | null | undefined | money_tracking_dbDefaultArgs> = $Result.GetResult<Prisma.$money_tracking_dbPayload, S>

  type money_tracking_dbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<money_tracking_dbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Money_tracking_dbCountAggregateInputType | true
    }

  export interface money_tracking_dbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['money_tracking_db'], meta: { name: 'money_tracking_db' } }
    /**
     * Find zero or one Money_tracking_db that matches the filter.
     * @param {money_tracking_dbFindUniqueArgs} args - Arguments to find a Money_tracking_db
     * @example
     * // Get one Money_tracking_db
     * const money_tracking_db = await prisma.money_tracking_db.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends money_tracking_dbFindUniqueArgs>(args: SelectSubset<T, money_tracking_dbFindUniqueArgs<ExtArgs>>): Prisma__money_tracking_dbClient<$Result.GetResult<Prisma.$money_tracking_dbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Money_tracking_db that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {money_tracking_dbFindUniqueOrThrowArgs} args - Arguments to find a Money_tracking_db
     * @example
     * // Get one Money_tracking_db
     * const money_tracking_db = await prisma.money_tracking_db.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends money_tracking_dbFindUniqueOrThrowArgs>(args: SelectSubset<T, money_tracking_dbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__money_tracking_dbClient<$Result.GetResult<Prisma.$money_tracking_dbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Money_tracking_db that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {money_tracking_dbFindFirstArgs} args - Arguments to find a Money_tracking_db
     * @example
     * // Get one Money_tracking_db
     * const money_tracking_db = await prisma.money_tracking_db.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends money_tracking_dbFindFirstArgs>(args?: SelectSubset<T, money_tracking_dbFindFirstArgs<ExtArgs>>): Prisma__money_tracking_dbClient<$Result.GetResult<Prisma.$money_tracking_dbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Money_tracking_db that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {money_tracking_dbFindFirstOrThrowArgs} args - Arguments to find a Money_tracking_db
     * @example
     * // Get one Money_tracking_db
     * const money_tracking_db = await prisma.money_tracking_db.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends money_tracking_dbFindFirstOrThrowArgs>(args?: SelectSubset<T, money_tracking_dbFindFirstOrThrowArgs<ExtArgs>>): Prisma__money_tracking_dbClient<$Result.GetResult<Prisma.$money_tracking_dbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Money_tracking_dbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {money_tracking_dbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Money_tracking_dbs
     * const money_tracking_dbs = await prisma.money_tracking_db.findMany()
     * 
     * // Get first 10 Money_tracking_dbs
     * const money_tracking_dbs = await prisma.money_tracking_db.findMany({ take: 10 })
     * 
     * // Only select the `moneyId`
     * const money_tracking_dbWithMoneyIdOnly = await prisma.money_tracking_db.findMany({ select: { moneyId: true } })
     * 
     */
    findMany<T extends money_tracking_dbFindManyArgs>(args?: SelectSubset<T, money_tracking_dbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$money_tracking_dbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Money_tracking_db.
     * @param {money_tracking_dbCreateArgs} args - Arguments to create a Money_tracking_db.
     * @example
     * // Create one Money_tracking_db
     * const Money_tracking_db = await prisma.money_tracking_db.create({
     *   data: {
     *     // ... data to create a Money_tracking_db
     *   }
     * })
     * 
     */
    create<T extends money_tracking_dbCreateArgs>(args: SelectSubset<T, money_tracking_dbCreateArgs<ExtArgs>>): Prisma__money_tracking_dbClient<$Result.GetResult<Prisma.$money_tracking_dbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Money_tracking_dbs.
     * @param {money_tracking_dbCreateManyArgs} args - Arguments to create many Money_tracking_dbs.
     * @example
     * // Create many Money_tracking_dbs
     * const money_tracking_db = await prisma.money_tracking_db.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends money_tracking_dbCreateManyArgs>(args?: SelectSubset<T, money_tracking_dbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Money_tracking_db.
     * @param {money_tracking_dbDeleteArgs} args - Arguments to delete one Money_tracking_db.
     * @example
     * // Delete one Money_tracking_db
     * const Money_tracking_db = await prisma.money_tracking_db.delete({
     *   where: {
     *     // ... filter to delete one Money_tracking_db
     *   }
     * })
     * 
     */
    delete<T extends money_tracking_dbDeleteArgs>(args: SelectSubset<T, money_tracking_dbDeleteArgs<ExtArgs>>): Prisma__money_tracking_dbClient<$Result.GetResult<Prisma.$money_tracking_dbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Money_tracking_db.
     * @param {money_tracking_dbUpdateArgs} args - Arguments to update one Money_tracking_db.
     * @example
     * // Update one Money_tracking_db
     * const money_tracking_db = await prisma.money_tracking_db.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends money_tracking_dbUpdateArgs>(args: SelectSubset<T, money_tracking_dbUpdateArgs<ExtArgs>>): Prisma__money_tracking_dbClient<$Result.GetResult<Prisma.$money_tracking_dbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Money_tracking_dbs.
     * @param {money_tracking_dbDeleteManyArgs} args - Arguments to filter Money_tracking_dbs to delete.
     * @example
     * // Delete a few Money_tracking_dbs
     * const { count } = await prisma.money_tracking_db.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends money_tracking_dbDeleteManyArgs>(args?: SelectSubset<T, money_tracking_dbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Money_tracking_dbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {money_tracking_dbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Money_tracking_dbs
     * const money_tracking_db = await prisma.money_tracking_db.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends money_tracking_dbUpdateManyArgs>(args: SelectSubset<T, money_tracking_dbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Money_tracking_db.
     * @param {money_tracking_dbUpsertArgs} args - Arguments to update or create a Money_tracking_db.
     * @example
     * // Update or create a Money_tracking_db
     * const money_tracking_db = await prisma.money_tracking_db.upsert({
     *   create: {
     *     // ... data to create a Money_tracking_db
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Money_tracking_db we want to update
     *   }
     * })
     */
    upsert<T extends money_tracking_dbUpsertArgs>(args: SelectSubset<T, money_tracking_dbUpsertArgs<ExtArgs>>): Prisma__money_tracking_dbClient<$Result.GetResult<Prisma.$money_tracking_dbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Money_tracking_dbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {money_tracking_dbCountArgs} args - Arguments to filter Money_tracking_dbs to count.
     * @example
     * // Count the number of Money_tracking_dbs
     * const count = await prisma.money_tracking_db.count({
     *   where: {
     *     // ... the filter for the Money_tracking_dbs we want to count
     *   }
     * })
    **/
    count<T extends money_tracking_dbCountArgs>(
      args?: Subset<T, money_tracking_dbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Money_tracking_dbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Money_tracking_db.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Money_tracking_dbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Money_tracking_dbAggregateArgs>(args: Subset<T, Money_tracking_dbAggregateArgs>): Prisma.PrismaPromise<GetMoney_tracking_dbAggregateType<T>>

    /**
     * Group by Money_tracking_db.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {money_tracking_dbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends money_tracking_dbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: money_tracking_dbGroupByArgs['orderBy'] }
        : { orderBy?: money_tracking_dbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, money_tracking_dbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoney_tracking_dbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the money_tracking_db model
   */
  readonly fields: money_tracking_dbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for money_tracking_db.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__money_tracking_dbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the money_tracking_db model
   */
  interface money_tracking_dbFieldRefs {
    readonly moneyId: FieldRef<"money_tracking_db", 'Int'>
    readonly moneyDetail: FieldRef<"money_tracking_db", 'String'>
    readonly moneyDate: FieldRef<"money_tracking_db", 'String'>
    readonly moneyInOut: FieldRef<"money_tracking_db", 'Float'>
    readonly moneyType: FieldRef<"money_tracking_db", 'Int'>
    readonly userId: FieldRef<"money_tracking_db", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * money_tracking_db findUnique
   */
  export type money_tracking_dbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tracking_db
     */
    select?: money_tracking_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tracking_db
     */
    omit?: money_tracking_dbOmit<ExtArgs> | null
    /**
     * Filter, which money_tracking_db to fetch.
     */
    where: money_tracking_dbWhereUniqueInput
  }

  /**
   * money_tracking_db findUniqueOrThrow
   */
  export type money_tracking_dbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tracking_db
     */
    select?: money_tracking_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tracking_db
     */
    omit?: money_tracking_dbOmit<ExtArgs> | null
    /**
     * Filter, which money_tracking_db to fetch.
     */
    where: money_tracking_dbWhereUniqueInput
  }

  /**
   * money_tracking_db findFirst
   */
  export type money_tracking_dbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tracking_db
     */
    select?: money_tracking_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tracking_db
     */
    omit?: money_tracking_dbOmit<ExtArgs> | null
    /**
     * Filter, which money_tracking_db to fetch.
     */
    where?: money_tracking_dbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of money_tracking_dbs to fetch.
     */
    orderBy?: money_tracking_dbOrderByWithRelationInput | money_tracking_dbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for money_tracking_dbs.
     */
    cursor?: money_tracking_dbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` money_tracking_dbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` money_tracking_dbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of money_tracking_dbs.
     */
    distinct?: Money_tracking_dbScalarFieldEnum | Money_tracking_dbScalarFieldEnum[]
  }

  /**
   * money_tracking_db findFirstOrThrow
   */
  export type money_tracking_dbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tracking_db
     */
    select?: money_tracking_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tracking_db
     */
    omit?: money_tracking_dbOmit<ExtArgs> | null
    /**
     * Filter, which money_tracking_db to fetch.
     */
    where?: money_tracking_dbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of money_tracking_dbs to fetch.
     */
    orderBy?: money_tracking_dbOrderByWithRelationInput | money_tracking_dbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for money_tracking_dbs.
     */
    cursor?: money_tracking_dbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` money_tracking_dbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` money_tracking_dbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of money_tracking_dbs.
     */
    distinct?: Money_tracking_dbScalarFieldEnum | Money_tracking_dbScalarFieldEnum[]
  }

  /**
   * money_tracking_db findMany
   */
  export type money_tracking_dbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tracking_db
     */
    select?: money_tracking_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tracking_db
     */
    omit?: money_tracking_dbOmit<ExtArgs> | null
    /**
     * Filter, which money_tracking_dbs to fetch.
     */
    where?: money_tracking_dbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of money_tracking_dbs to fetch.
     */
    orderBy?: money_tracking_dbOrderByWithRelationInput | money_tracking_dbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing money_tracking_dbs.
     */
    cursor?: money_tracking_dbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` money_tracking_dbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` money_tracking_dbs.
     */
    skip?: number
    distinct?: Money_tracking_dbScalarFieldEnum | Money_tracking_dbScalarFieldEnum[]
  }

  /**
   * money_tracking_db create
   */
  export type money_tracking_dbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tracking_db
     */
    select?: money_tracking_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tracking_db
     */
    omit?: money_tracking_dbOmit<ExtArgs> | null
    /**
     * The data needed to create a money_tracking_db.
     */
    data: XOR<money_tracking_dbCreateInput, money_tracking_dbUncheckedCreateInput>
  }

  /**
   * money_tracking_db createMany
   */
  export type money_tracking_dbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many money_tracking_dbs.
     */
    data: money_tracking_dbCreateManyInput | money_tracking_dbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * money_tracking_db update
   */
  export type money_tracking_dbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tracking_db
     */
    select?: money_tracking_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tracking_db
     */
    omit?: money_tracking_dbOmit<ExtArgs> | null
    /**
     * The data needed to update a money_tracking_db.
     */
    data: XOR<money_tracking_dbUpdateInput, money_tracking_dbUncheckedUpdateInput>
    /**
     * Choose, which money_tracking_db to update.
     */
    where: money_tracking_dbWhereUniqueInput
  }

  /**
   * money_tracking_db updateMany
   */
  export type money_tracking_dbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update money_tracking_dbs.
     */
    data: XOR<money_tracking_dbUpdateManyMutationInput, money_tracking_dbUncheckedUpdateManyInput>
    /**
     * Filter which money_tracking_dbs to update
     */
    where?: money_tracking_dbWhereInput
    /**
     * Limit how many money_tracking_dbs to update.
     */
    limit?: number
  }

  /**
   * money_tracking_db upsert
   */
  export type money_tracking_dbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tracking_db
     */
    select?: money_tracking_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tracking_db
     */
    omit?: money_tracking_dbOmit<ExtArgs> | null
    /**
     * The filter to search for the money_tracking_db to update in case it exists.
     */
    where: money_tracking_dbWhereUniqueInput
    /**
     * In case the money_tracking_db found by the `where` argument doesn't exist, create a new money_tracking_db with this data.
     */
    create: XOR<money_tracking_dbCreateInput, money_tracking_dbUncheckedCreateInput>
    /**
     * In case the money_tracking_db was found with the provided `where` argument, update it with this data.
     */
    update: XOR<money_tracking_dbUpdateInput, money_tracking_dbUncheckedUpdateInput>
  }

  /**
   * money_tracking_db delete
   */
  export type money_tracking_dbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tracking_db
     */
    select?: money_tracking_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tracking_db
     */
    omit?: money_tracking_dbOmit<ExtArgs> | null
    /**
     * Filter which money_tracking_db to delete.
     */
    where: money_tracking_dbWhereUniqueInput
  }

  /**
   * money_tracking_db deleteMany
   */
  export type money_tracking_dbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which money_tracking_dbs to delete
     */
    where?: money_tracking_dbWhereInput
    /**
     * Limit how many money_tracking_dbs to delete.
     */
    limit?: number
  }

  /**
   * money_tracking_db without action
   */
  export type money_tracking_dbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the money_tracking_db
     */
    select?: money_tracking_dbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the money_tracking_db
     */
    omit?: money_tracking_dbOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const User_tbScalarFieldEnum: {
    userId: 'userId',
    userFullname: 'userFullname',
    userBirthDate: 'userBirthDate',
    userName: 'userName',
    userPassword: 'userPassword',
    userImage: 'userImage'
  };

  export type User_tbScalarFieldEnum = (typeof User_tbScalarFieldEnum)[keyof typeof User_tbScalarFieldEnum]


  export const Money_tracking_dbScalarFieldEnum: {
    moneyId: 'moneyId',
    moneyDetail: 'moneyDetail',
    moneyDate: 'moneyDate',
    moneyInOut: 'moneyInOut',
    moneyType: 'moneyType',
    userId: 'userId'
  };

  export type Money_tracking_dbScalarFieldEnum = (typeof Money_tracking_dbScalarFieldEnum)[keyof typeof Money_tracking_dbScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const user_tbOrderByRelevanceFieldEnum: {
    userFullname: 'userFullname',
    userBirthDate: 'userBirthDate',
    userName: 'userName',
    userPassword: 'userPassword',
    userImage: 'userImage'
  };

  export type user_tbOrderByRelevanceFieldEnum = (typeof user_tbOrderByRelevanceFieldEnum)[keyof typeof user_tbOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const money_tracking_dbOrderByRelevanceFieldEnum: {
    moneyDetail: 'moneyDetail',
    moneyDate: 'moneyDate'
  };

  export type money_tracking_dbOrderByRelevanceFieldEnum = (typeof money_tracking_dbOrderByRelevanceFieldEnum)[keyof typeof money_tracking_dbOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type user_tbWhereInput = {
    AND?: user_tbWhereInput | user_tbWhereInput[]
    OR?: user_tbWhereInput[]
    NOT?: user_tbWhereInput | user_tbWhereInput[]
    userId?: IntFilter<"user_tb"> | number
    userFullname?: StringFilter<"user_tb"> | string
    userBirthDate?: StringFilter<"user_tb"> | string
    userName?: StringFilter<"user_tb"> | string
    userPassword?: StringFilter<"user_tb"> | string
    userImage?: StringFilter<"user_tb"> | string
  }

  export type user_tbOrderByWithRelationInput = {
    userId?: SortOrder
    userFullname?: SortOrder
    userBirthDate?: SortOrder
    userName?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
    _relevance?: user_tbOrderByRelevanceInput
  }

  export type user_tbWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: user_tbWhereInput | user_tbWhereInput[]
    OR?: user_tbWhereInput[]
    NOT?: user_tbWhereInput | user_tbWhereInput[]
    userFullname?: StringFilter<"user_tb"> | string
    userBirthDate?: StringFilter<"user_tb"> | string
    userName?: StringFilter<"user_tb"> | string
    userPassword?: StringFilter<"user_tb"> | string
    userImage?: StringFilter<"user_tb"> | string
  }, "userId">

  export type user_tbOrderByWithAggregationInput = {
    userId?: SortOrder
    userFullname?: SortOrder
    userBirthDate?: SortOrder
    userName?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
    _count?: user_tbCountOrderByAggregateInput
    _avg?: user_tbAvgOrderByAggregateInput
    _max?: user_tbMaxOrderByAggregateInput
    _min?: user_tbMinOrderByAggregateInput
    _sum?: user_tbSumOrderByAggregateInput
  }

  export type user_tbScalarWhereWithAggregatesInput = {
    AND?: user_tbScalarWhereWithAggregatesInput | user_tbScalarWhereWithAggregatesInput[]
    OR?: user_tbScalarWhereWithAggregatesInput[]
    NOT?: user_tbScalarWhereWithAggregatesInput | user_tbScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"user_tb"> | number
    userFullname?: StringWithAggregatesFilter<"user_tb"> | string
    userBirthDate?: StringWithAggregatesFilter<"user_tb"> | string
    userName?: StringWithAggregatesFilter<"user_tb"> | string
    userPassword?: StringWithAggregatesFilter<"user_tb"> | string
    userImage?: StringWithAggregatesFilter<"user_tb"> | string
  }

  export type money_tracking_dbWhereInput = {
    AND?: money_tracking_dbWhereInput | money_tracking_dbWhereInput[]
    OR?: money_tracking_dbWhereInput[]
    NOT?: money_tracking_dbWhereInput | money_tracking_dbWhereInput[]
    moneyId?: IntFilter<"money_tracking_db"> | number
    moneyDetail?: StringNullableFilter<"money_tracking_db"> | string | null
    moneyDate?: StringNullableFilter<"money_tracking_db"> | string | null
    moneyInOut?: FloatFilter<"money_tracking_db"> | number
    moneyType?: IntFilter<"money_tracking_db"> | number
    userId?: IntFilter<"money_tracking_db"> | number
  }

  export type money_tracking_dbOrderByWithRelationInput = {
    moneyId?: SortOrder
    moneyDetail?: SortOrderInput | SortOrder
    moneyDate?: SortOrderInput | SortOrder
    moneyInOut?: SortOrder
    moneyType?: SortOrder
    userId?: SortOrder
    _relevance?: money_tracking_dbOrderByRelevanceInput
  }

  export type money_tracking_dbWhereUniqueInput = Prisma.AtLeast<{
    moneyId?: number
    AND?: money_tracking_dbWhereInput | money_tracking_dbWhereInput[]
    OR?: money_tracking_dbWhereInput[]
    NOT?: money_tracking_dbWhereInput | money_tracking_dbWhereInput[]
    moneyDetail?: StringNullableFilter<"money_tracking_db"> | string | null
    moneyDate?: StringNullableFilter<"money_tracking_db"> | string | null
    moneyInOut?: FloatFilter<"money_tracking_db"> | number
    moneyType?: IntFilter<"money_tracking_db"> | number
    userId?: IntFilter<"money_tracking_db"> | number
  }, "moneyId">

  export type money_tracking_dbOrderByWithAggregationInput = {
    moneyId?: SortOrder
    moneyDetail?: SortOrderInput | SortOrder
    moneyDate?: SortOrderInput | SortOrder
    moneyInOut?: SortOrder
    moneyType?: SortOrder
    userId?: SortOrder
    _count?: money_tracking_dbCountOrderByAggregateInput
    _avg?: money_tracking_dbAvgOrderByAggregateInput
    _max?: money_tracking_dbMaxOrderByAggregateInput
    _min?: money_tracking_dbMinOrderByAggregateInput
    _sum?: money_tracking_dbSumOrderByAggregateInput
  }

  export type money_tracking_dbScalarWhereWithAggregatesInput = {
    AND?: money_tracking_dbScalarWhereWithAggregatesInput | money_tracking_dbScalarWhereWithAggregatesInput[]
    OR?: money_tracking_dbScalarWhereWithAggregatesInput[]
    NOT?: money_tracking_dbScalarWhereWithAggregatesInput | money_tracking_dbScalarWhereWithAggregatesInput[]
    moneyId?: IntWithAggregatesFilter<"money_tracking_db"> | number
    moneyDetail?: StringNullableWithAggregatesFilter<"money_tracking_db"> | string | null
    moneyDate?: StringNullableWithAggregatesFilter<"money_tracking_db"> | string | null
    moneyInOut?: FloatWithAggregatesFilter<"money_tracking_db"> | number
    moneyType?: IntWithAggregatesFilter<"money_tracking_db"> | number
    userId?: IntWithAggregatesFilter<"money_tracking_db"> | number
  }

  export type user_tbCreateInput = {
    userFullname: string
    userBirthDate: string
    userName: string
    userPassword: string
    userImage: string
  }

  export type user_tbUncheckedCreateInput = {
    userId?: number
    userFullname: string
    userBirthDate: string
    userName: string
    userPassword: string
    userImage: string
  }

  export type user_tbUpdateInput = {
    userFullname?: StringFieldUpdateOperationsInput | string
    userBirthDate?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: StringFieldUpdateOperationsInput | string
  }

  export type user_tbUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userFullname?: StringFieldUpdateOperationsInput | string
    userBirthDate?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: StringFieldUpdateOperationsInput | string
  }

  export type user_tbCreateManyInput = {
    userId?: number
    userFullname: string
    userBirthDate: string
    userName: string
    userPassword: string
    userImage: string
  }

  export type user_tbUpdateManyMutationInput = {
    userFullname?: StringFieldUpdateOperationsInput | string
    userBirthDate?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: StringFieldUpdateOperationsInput | string
  }

  export type user_tbUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userFullname?: StringFieldUpdateOperationsInput | string
    userBirthDate?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    userImage?: StringFieldUpdateOperationsInput | string
  }

  export type money_tracking_dbCreateInput = {
    moneyDetail?: string | null
    moneyDate?: string | null
    moneyInOut: number
    moneyType: number
    userId: number
  }

  export type money_tracking_dbUncheckedCreateInput = {
    moneyId?: number
    moneyDetail?: string | null
    moneyDate?: string | null
    moneyInOut: number
    moneyType: number
    userId: number
  }

  export type money_tracking_dbUpdateInput = {
    moneyDetail?: NullableStringFieldUpdateOperationsInput | string | null
    moneyDate?: NullableStringFieldUpdateOperationsInput | string | null
    moneyInOut?: FloatFieldUpdateOperationsInput | number
    moneyType?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type money_tracking_dbUncheckedUpdateInput = {
    moneyId?: IntFieldUpdateOperationsInput | number
    moneyDetail?: NullableStringFieldUpdateOperationsInput | string | null
    moneyDate?: NullableStringFieldUpdateOperationsInput | string | null
    moneyInOut?: FloatFieldUpdateOperationsInput | number
    moneyType?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type money_tracking_dbCreateManyInput = {
    moneyId?: number
    moneyDetail?: string | null
    moneyDate?: string | null
    moneyInOut: number
    moneyType: number
    userId: number
  }

  export type money_tracking_dbUpdateManyMutationInput = {
    moneyDetail?: NullableStringFieldUpdateOperationsInput | string | null
    moneyDate?: NullableStringFieldUpdateOperationsInput | string | null
    moneyInOut?: FloatFieldUpdateOperationsInput | number
    moneyType?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type money_tracking_dbUncheckedUpdateManyInput = {
    moneyId?: IntFieldUpdateOperationsInput | number
    moneyDetail?: NullableStringFieldUpdateOperationsInput | string | null
    moneyDate?: NullableStringFieldUpdateOperationsInput | string | null
    moneyInOut?: FloatFieldUpdateOperationsInput | number
    moneyType?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type user_tbOrderByRelevanceInput = {
    fields: user_tbOrderByRelevanceFieldEnum | user_tbOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_tbCountOrderByAggregateInput = {
    userId?: SortOrder
    userFullname?: SortOrder
    userBirthDate?: SortOrder
    userName?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
  }

  export type user_tbAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type user_tbMaxOrderByAggregateInput = {
    userId?: SortOrder
    userFullname?: SortOrder
    userBirthDate?: SortOrder
    userName?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
  }

  export type user_tbMinOrderByAggregateInput = {
    userId?: SortOrder
    userFullname?: SortOrder
    userBirthDate?: SortOrder
    userName?: SortOrder
    userPassword?: SortOrder
    userImage?: SortOrder
  }

  export type user_tbSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type money_tracking_dbOrderByRelevanceInput = {
    fields: money_tracking_dbOrderByRelevanceFieldEnum | money_tracking_dbOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type money_tracking_dbCountOrderByAggregateInput = {
    moneyId?: SortOrder
    moneyDetail?: SortOrder
    moneyDate?: SortOrder
    moneyInOut?: SortOrder
    moneyType?: SortOrder
    userId?: SortOrder
  }

  export type money_tracking_dbAvgOrderByAggregateInput = {
    moneyId?: SortOrder
    moneyInOut?: SortOrder
    moneyType?: SortOrder
    userId?: SortOrder
  }

  export type money_tracking_dbMaxOrderByAggregateInput = {
    moneyId?: SortOrder
    moneyDetail?: SortOrder
    moneyDate?: SortOrder
    moneyInOut?: SortOrder
    moneyType?: SortOrder
    userId?: SortOrder
  }

  export type money_tracking_dbMinOrderByAggregateInput = {
    moneyId?: SortOrder
    moneyDetail?: SortOrder
    moneyDate?: SortOrder
    moneyInOut?: SortOrder
    moneyType?: SortOrder
    userId?: SortOrder
  }

  export type money_tracking_dbSumOrderByAggregateInput = {
    moneyId?: SortOrder
    moneyInOut?: SortOrder
    moneyType?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}