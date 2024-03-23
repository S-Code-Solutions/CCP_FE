import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxMaterialTimepickerComponent } from 'ngx-material-timepicker';
import { TimeBaseService } from '../../services/home/time-base.service';
import { DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { TimeResultComponent } from './time-result/time-result.component';

@Component({
  selector: 'app-time-base',
  templateUrl: './time-base.component.html',
  styleUrls: ['./time-base.component.scss'],
  providers: [DatePipe]
})
export class TimeBaseComponent implements OnInit {

  CRForm!: FormGroup;
  cookieValues :any
  soilValues:any
  toggleTimepicker: NgxMaterialTimepickerComponent | any;

  constructor(private timeBaseService : TimeBaseService,
     private datePipe: DatePipe, public dialogRef: MatDialogRef<TimeBaseComponent>,
     public dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public datas: any) {
  }

  ngOnInit(): void {
    this.CRForm = new FormGroup({
      N: new FormControl('', [
        Validators.required,
      ])
    });
    // this.cookieValues = JSON.parse(this.cookieService.get('Cli'));
    // this.soilValues = JSON.parse(this.cookieService.get('Soil'));
    // console.log("=================== cookieValues ==============================")
    // console.log(this.cookieValues)
    // console.log(this.soilValues)
    // console.log("=================== soilValues ==============================")
    // this.CRForm.setValue({
    //   N:JSON.stringify(this.soilValues.properties.layers[0].depths[0].values['Q0.5']),
    //   P:JSON.stringify(this.soilValues.properties.layers[1].depths[0].values['Q0.5']),
    //   K :JSON.stringify(this.cookieValues.current.humidity),
    //   temperature:JSON.stringify(this.cookieValues.current.temp_c),
    //   humidity:JSON.stringify(this.cookieValues.current.humidity),
    //   ph:JSON.stringify(this.soilValues.properties.layers[1].depths[0].values['Q0.5']),
    //   rainfall:JSON.stringify(this.cookieValues.current.precip_mm),
    // })

  }

  predictCrops() {
    const selectedDate: Date = this.CRForm.get('N')?.value;
    const formattedDateTime = this.formatDateWithCurrentTime(selectedDate);
    this.timeBaseService.getProductData(formattedDateTime).subscribe((res : any)=>{
      // console.log(res)
      this.dialogRef.close()
      this.openDialog3(res)
    })
  }

  formatDateWithCurrentTime(selectedDate: Date): string {
    // Format the selected date
    const formattedDate = this.datePipe.transform(selectedDate, 'yyyy-MM-dd');
    // Get the current time
    const currentTime = new Date();
    const formattedTime = this.datePipe.transform(currentTime, 'HH:mm:ss');
    // Combine them
    return `${formattedDate}T${formattedTime}`;
  }
  

  openDialog3(res: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = res;
    dialogConfig.width = '600px';
    dialogConfig.height = 'auto';
    // // console.log(row);
    // console.log('----------------------------');
    const dialogRef = this.dialog.open(TimeResultComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log("response code1")
      console.log(result)
      console.log("response code2")
      // this.refreshTable();
    });
  }
}
