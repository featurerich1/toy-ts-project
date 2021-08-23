import { Mark } from './Mark';
import { withPrimaryKey } from './BaseRecord';
import type { PrimaryKey } from './schema';
export interface StudentSchema {
  id: PrimaryKey;
  name: string;
}
interface StudentComputed {
  marks: Mark[];          // a student has_many marks; join a student with Mark.student_id
  totalAverage: number;   // computed for view (truncated to 2 decimals)
}
export type StudentRecord = StudentSchema & StudentComputed;
export class Student extends withPrimaryKey<StudentRecord>() implements StudentRecord {
  // accessors to joins and computed values; dependent on other tables
  private _marks: Mark[] = [];    // has-many
  private _totalAverage!: number; // computed
  public get marks(): Mark[] {
    return this._marks;
  }
  public set marks(marks: Mark[]) {
    let sumWeightedMarks = 0;
    let sumWeights = 0;
    for (const mark of marks){
      sumWeightedMarks += mark.weightedMark
      sumWeights += mark.test.weight
    }
    const equivalentNumTests = sumWeights / 100;
    const exactAverageTotalWeightedMarksPerTest = sumWeightedMarks / equivalentNumTests;
    this._totalAverage = Math.round(exactAverageTotalWeightedMarksPerTest * 100) / 100;
    this._marks = marks;
  }
  public get totalAverage(): number {
    return this._totalAverage;
  }
  private set totalAverage(value: number) {
    this._totalAverage = value;
  }
  // read from csv table
  public readonly id: PrimaryKey;
  public readonly name: string;
  public constructor(id: PrimaryKey, name: string){
    super();
    this.id = Number(id);
    this.name = name;    
  }
}
export default Student 