import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-c-bresults',
  templateUrl: './c-bresults.component.html',
  styleUrls: ['./c-bresults.component.scss']
})
export class CBResultsComponent {
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CBResultsComponent>
  ) {}

  customer_id: any;
  predicted_next_product: any;
  predicted_purchases:any;

  ngOnInit(): void {
    this.customer_id = this.data.customer_id
    this.predicted_next_product = this.data.predicted_next_product
    this.predicted_purchases = this.data.predicted_purchases
  }
}
