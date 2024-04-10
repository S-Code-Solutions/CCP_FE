import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialTimePickerComponent } from '@candidosales/material-time-picker';
import { TimeBaseService } from '../../services/home/time-base.service';
import { DatePipe } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { TimeResultComponent } from './time-result/time-result.component';

@Component({
  selector: 'app-time-base',
  templateUrl: './time-base.component.html',
  styleUrls: ['./time-base.component.scss'],
  providers: [DatePipe],
})
export class TimeBaseComponent implements OnInit {
  CRForm!: FormGroup;
  cookieValues: any;
  soilValues: any;
  exportTime: MaterialTimePickerComponent | any;
  formControl!: FormControl<any>;
  userTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };
  selectedTime:any;
  newdate:any;

  constructor(
    private timeBaseService: TimeBaseService,
    private datePipe: DatePipe,
    public dialogRef: MatDialogRef<TimeBaseComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public datas: any
  ) {}

  ngOnInit(): void {
    this.CRForm = new FormGroup({
      date: new FormControl('', [Validators.required]),
      time: new FormControl(null, [Validators.required]),
    });
  }

  onChangeHour(event:any) {
    this.selectedTime = event;
  }

  predictCrops() {
    const selectedDate: Date = this.CRForm.get('date')?.value;
    const formattedDate: any = this.datePipe.transform(selectedDate, 'yyyy-MM-dd');
    this.newdate = formattedDate+'T'+this.selectedTime.hour+':'+this.selectedTime.minute+':'+'00';
    this.timeBaseService
      .getProductData(this.newdate)
      .subscribe((res: any) => {
        this.dialogRef.close();
        this.openDialog3(res);
      });
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
    dialogRef.afterClosed().subscribe((result) => {
      console.log('response code1');
      console.log(result);
      console.log('response code2');
      // this.refreshTable();
    });
  }
}
