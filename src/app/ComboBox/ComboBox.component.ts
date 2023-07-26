import { Component, OnInit } from '@angular/core';
import { VietNamService } from '../services/VietNam.service';

@Component({
  selector: 'app-ComboBox',
  templateUrl: './ComboBox.component.html',
  styleUrls: ['./ComboBox.component.css'],
})
export class ComboBoxComponent implements OnInit {

  province!: any[];
  district!: any[];
  commune!: any[];
  
  listProvince!:any;
  temp_District:any[]=[];
  temp_Commune:any[]=[];

  constructor(private VNSevice:VietNamService) { }

  onInputProvince(event:any){
    let prov;
    for (prov of this.province) {
      if (prov.name === event.target.value) break;
    }
    if (prov.name === event.target.value){
      this.temp_District=[];      
      let dist; 
      for (dist of this.district) {
        if (prov.idProvince === dist.idProvince) this.temp_District.push(dist);        
      }      
    }    
  }

  onInputDistrict(event:any){
    let dist;
    for (dist of this.district) {
      if (dist.name === event.target.value) break;
    }
    if (dist.name === event.target.value){
      this.temp_Commune=[];      
      let comm; 
      for (comm of this.commune) {
        if (dist.idDistrict === comm.idDistrict) this.temp_Commune.push(comm);        
      }      
    }    
  }

  getData(){    
    this.VNSevice.getProvice().subscribe({
      next : (data: any[])=>{ this.province = data; this.province.sort((a,b) => a.name.localeCompare(b.name))}})
 
    this.VNSevice.getDistict().subscribe({
      next : (data: any[])=>{ this.district = data; this.district.sort((a,b) => a.name.localeCompare(b.name))}})

    this.VNSevice.getCommune().subscribe({
      next : (data: any[])=>{ this.commune = data; this.commune.sort((a,b) => a.name.localeCompare(b.name))}})
  }

  ngOnInit() {
    this.getData();    
  } 
}
