import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-time-result',
  templateUrl: './time-result.component.html',
  styleUrls: ['./time-result.component.scss'],
})
export class TimeResultComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TimeResultComponent>
  ) {}

  date: any;
  product1: any;
  product2: any;
  product3: any;
  predicted_purchases:any;

  ngOnInit(): void {
    console.log('====================================');
    console.log(this.data.arima_predictions[0].recommended_products);
    console.log('====================================');
    this.date = this.data.arima_predictions[0].date
    this.product1 = this.data.arima_predictions[0].recommended_products[0]
    this.product2 = this.data.arima_predictions[0].recommended_products[1]
    this.product3 = this.data.arima_predictions[0].recommended_products[2]
    this.predicted_purchases = this.data.arima_predictions[0].predicted_purchases
  }
}
