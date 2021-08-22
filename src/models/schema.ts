import { Course } from './Course';
import type { CourseSchema } from './Course'
import { Mark } from './Mark';
import type { MarkSchema } from './Mark'
import { Student } from './Student';
import type { StudentSchema } from './Student'
import { Test } from './Test';
import type { TestSchema } from './Test'


export type Grade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 
| 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 
41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 
61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 |
 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100;
export type ForeignKey = number;
export type PrimaryKey = number | string;
export type GradeGrade =  `${Grade}.${Grade}`

type UnionToTuple<T, A = any[]> = [T] extends [never] ? never : T extends undefined ? never : [T]



export type Model = typeof Student | typeof Test | typeof Mark | typeof Course;
export type Record = Student | Test | Mark | Course;
export type RecordForModel<M extends Model> = M extends new(...args: any[]) => infer R ? R extends Record ? R : never : never;
export type Schema = StudentSchema | TestSchema | MarkSchema | CourseSchema;
// export type Controller = StudentController// | CourseController | TestController | MarkController


export type ForeignKeyPropNamesInSchema<S extends Schema> = {
  [P in keyof S]: P extends `${string}_id` ? P : never
}[keyof S]

export type IsPrimaryKeyedSchema<S extends Schema> = S extends { id: PrimaryKey } ? true : false 
export type PKSchema = { id: PrimaryKey } & Schema 
export type NotPrimaryKeyedSchema = { id?: never } & Schema 


 




// // from https://stackoverflow.com/questions/55127004/how-to-transform-union-type-to-tuple-type/55128956#55128956
// type UnionToIntersection<U> =
//   (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never
// type LastOf<T> =
//   UnionToIntersection<T extends any ? () => T : never> extends () => (infer R) ? R : never

// type Push<T extends any[], V> = [...T, V];

// type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> =
//   true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>

// type ObjValueTuple<T, KS extends any[] = TuplifyUnion<keyof T>, R extends any[] = []> =
//   KS extends [infer K, ...infer KT] // K = first key, KT = remainder; ternary is true as long as KS is still not empty array[]
//   ? ObjValueTuple<T, KT, [...R, T[K & keyof T]]>
//   : R







// let df = "0.2" as unknown as number

// extends [...infer front, infer back]? back:0

// type d =`1`

// function pred<T extends `${1}`>(arg: T){
//     return +arg as const
//     // return parseInt(arg)
//     // return parseFloat(arg)
// }

// type asdf = ReturnType< typeof pred>
// const toNum = (arg: `${Grade}.${Grade}` ):number=> parseFloat(arg)
// type df<T extends `${Grade}.${Grade}`> = (arg: T) => number extends (arg: T) =>  parseFloat(T) infer I ? I : never

// type Map = {

//   '0': []
//   '1': [1]
//   '2': [...Map['1'], 1]
//   '3': [...Map['2'], 1]

//   '4': [...Map['3'], 1]
//   '5': [...Map['4'], 1]
//   '6': [...Map['5'], 1]
//   '7': [...Map['6'], 1]
//   '8': [...Map['7'], 1]
//   '9': [...Map['8'], 1]
// }
// type Make10Array<T extends any[]> = [
//   ...T,
//   ...T,
//   ...T,
//   ...T,
//   ...T,
//   ...T,
//   ...T,
//   ...T,
//   ...T,
//   ...T
// ]
// type ToNumber<
//   S extends string,
//   L extends any[] = []
// > = S extends `${infer F}${infer R}`
//   ? ToNumber<R, [...Make10Array<L>, ...(F extends keyof Map ? Map[F] : never)]>
//   : L['length']


