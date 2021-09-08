// package: 
// file: users.proto

import * as jspb from "google-protobuf";

export class Employee extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getSalary(): number;
  setSalary(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Employee.AsObject;
  static toObject(includeInstance: boolean, msg: Employee): Employee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Employee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Employee;
  static deserializeBinaryFromReader(message: Employee, reader: jspb.BinaryReader): Employee;
}

export namespace Employee {
  export type AsObject = {
    id: number,
    name: string,
    salary: number,
  }
}

export class Employees extends jspb.Message {
  clearEmployeesList(): void;
  getEmployeesList(): Array<Employee>;
  setEmployeesList(value: Array<Employee>): void;
  addEmployees(value?: Employee, index?: number): Employee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Employees.AsObject;
  static toObject(includeInstance: boolean, msg: Employees): Employees.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Employees, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Employees;
  static deserializeBinaryFromReader(message: Employees, reader: jspb.BinaryReader): Employees;
}

export namespace Employees {
  export type AsObject = {
    employeesList: Array<Employee.AsObject>,
  }
}

