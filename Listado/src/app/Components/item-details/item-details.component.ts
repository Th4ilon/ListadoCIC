import { Component, Inject, Input, OnInit } from '@angular/core';
// Material
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ListItem } from 'src/Shared/Models/ListItemModel';

/**
 * Ditails Component
 */
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.sass']
})
export class ItemDetailsComponent implements OnInit {
  @Input() listItem: ListItem;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}
  /**
   * Event that open a new dialog loading the properties for it
   */
  openDialog(): void{
    const dialogRef = this.dialog.open(DialogData, {
      width: '250px',
      data: this.listItem
    });
  }
}

/**
 * Dialog handler component
 */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'Item-details-dialog',
  templateUrl: 'Item-details-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class DialogData {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ListItem) {}
}
