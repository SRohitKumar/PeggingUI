import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import {SampleService} from './sample.service';

 
@Component({
  selector: 'app-pegging-review',
  templateUrl: './pegging-review.component.html',
  styleUrls: ['./pegging-review.component.css'],
  providers: [SampleService]
})
export class PeggingReviewComponent implements OnInit {

deviceObjects : String[] = ["none"];

 //deviceObjects = ["Rohit","Nithya"];
  selectedDeviceObj = this.deviceObjects[1];
  onChangeObj(newObj) {
    console.log(newObj);
    this.selectedDeviceObj = newObj;
    // ... do other stuff here ...
  }


favoriteHero: string;

ngOnInit() {
      this.sampleService.getData();
  }

clicked(event){
	alert("ROhit");
	this.favoriteHero = "Rohit";
}

  constructor(private sampleService: SampleService) {
    //alert(this.sampleService.getData());
    this.selectedDeviceObj = this.deviceObjects[0];
    this.deviceObjects = this.sampleService.getData1();
     this.selectedDeviceObj = this.deviceObjects[1];

     this.sampleService.getData()
       .subscribe(
        (data : any ) => this.deviceObjects.push(data)
       );


    }

  
 
 
 	
 
}
