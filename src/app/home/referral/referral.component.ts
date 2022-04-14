import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css']
})
export class ReferralComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
  }
  copyToClipboard(element){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert('Copied to clipboard');
    // this.alertService.success('Copied to clipboard');
  }

}
