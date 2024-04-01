import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { CustomerBehaviourService } from '../../services/home/customer-behaviour.service';
import { CBResultsComponent } from './c-bresults/c-bresults.component';

interface Customer {
  name: string;
  id: string;
}

@Component({
  selector: 'app-customer-behaviour',
  templateUrl: './customer-behaviour.component.html',
  styleUrls: ['./customer-behaviour.component.scss'],
})
export class CustomerBehaviourComponent {
  CRForm!: FormGroup;

  customerControl = new FormControl<Customer | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  customers: Customer[] = [
    { name: 'User 1', id: '504308' },
    { name: 'User 2', id: '504309' },
    { name: 'User 3', id: '504314' },
    { name: 'User 4', id: '504317' },
    { name: 'User 5', id: '504321' },
    { name: 'User 6', id: '504324' },
    { name: 'User 7', id: '504327' },
    { name: 'User 8', id: '504335' },
    { name: 'User 9', id: '504340' }
  ];

  constructor(
    private customerBehaviourService: CustomerBehaviourService,
    public dialogRef: MatDialogRef<CustomerBehaviourComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public datas: any
  ) {}

  ngOnInit(): void {
    this.CRForm = new FormGroup({
      N: new FormControl('', [Validators.required]),
    });
  }

  predictCrops() {
    this.customerBehaviourService
      .getUserData(this.customerControl.value?.id)
      .subscribe((res: any) => {
        // console.log(res)
        this.dialogRef.close();
        this.openDialog3(res);
      });
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
    const dialogRef = this.dialog.open(CBResultsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('response code1');
      console.log(result);
      console.log('response code2');
      // this.refreshTable();
    });
  }
}
