import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): number; // new row

export function deleteRow(rowId: RowID): void;

export function updateRow(rowId: RowID, row: RowElement): number;
