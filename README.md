# NSD
Newo Street
## Build Command
ng build --output-path dist --outputHashing=none --base-href /NS/
## Ng-Alert Install Cammand
npm install ngx-alerts --save --force

## HTML File
<select name="countryList" id="countryList" formControlName="countryList" class="e-ph" [(ngModel)]="selectedLevel" (change)="onCountryChange()">

## Ts File
selectedLevel;

  onCountryChange(){   
    console.log(this.selectedLevel);

    angular.forEach(this.region, function(value, key){
      if(value.Password == "thomasTheKing")
        console.log("username is thomas");
      });
  }
