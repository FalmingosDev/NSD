import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorymaster',
  templateUrl: './categorymaster.component.html',
  styleUrls: ['./categorymaster.component.css']
})
export class CategorymasterComponent implements OnInit {
  allcategorymaster: any;
  form: FormGroup;
  userRegister: any;
  selectedOffer: any;
  local_email: string | null = localStorage.getItem('token');
  productForm !: FormGroup;

  constructor(private categorymaster: ApiService, private formBuilder: FormBuilder, offer: FormBuilder, private hashtagUserRegis: ApiService,private _router: Router) {
    this.form = offer.group({
      selectedOffer: new FormArray([])
    });

  }

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({

      facebook: [''],
      instagram: [''],
      youtube: [''],
      twitter: ['']
    })


    this.categorymaster.categoryMasterList().subscribe((result) => {

      this.allcategorymaster = result;
    })

  }

  onCheckboxofferChange(event: any) {
    const selectedOffer = (this.form.controls.selectedOffer as FormArray);

    if (event.target.checked) {
      selectedOffer.push(new FormControl(event.target.value));
    } else {
      const index = selectedOffer.controls
        .findIndex(x => x.value === event.target.value);
      selectedOffer.removeAt(index);
    }
    console.log(this.form.value.selectedOffer);
  }


  registerhashtaguser() {
    const email = this.local_email;
    if (this.productForm.valid) {
      this.hashtagUserRegis.hashtagUserRegis(this.productForm.value, this.form.value.selectedOffer, email).subscribe({
        next: (res) => {
          //alert("Hashtag Registration SuccessFully !")
          this._router.navigateByUrl('/hashtag');
        },
        error: () => {
          //alert("Error")
        }
      })
    }

  }



}




