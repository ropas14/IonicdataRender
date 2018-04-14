import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FacialServiceProvider } from '../../providers/facial-service/facial-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FacialServiceProvider]
})
export class HomePage {

  public facialcleansers:any;

  constructor( public navCtrl: NavController , public facialserviceprovider: FacialServiceProvider) {
  

  }

  ionViewWillEnter(){

	  this.facialserviceprovider.getFacialCleansers().subscribe(facialcleanser=>{

         this.facialcleansers=facialcleanser;

	  });
  }


}
