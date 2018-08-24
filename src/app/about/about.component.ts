import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  version = '1.0';
  myForm: FormGroup;
  sku2: AbstractControl;

 skuObject(): any {}

 constructor( fb: FormBuilder) {
    this.myForm = fb.group(
        {
          'sku2': [
            'Default Value',
            Validators.required,
            // Validators.maxLength : 5
        ]
        });

        this.sku2 = this.myForm.controls['sku2'];
  }

  onSubmit(data: any) {
    this.skuObject = data;
    console.log(this.skuObject);
  }

  onSubmit2(data: string): void {
    // this.myForm = data;
    // console.log(this.myForm);
    console.log(data);
  }

  ngOnInit() { }

}
