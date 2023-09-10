import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-genric',
  templateUrl: './genric.component.html',
  styleUrls: ['./genric.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class GenricComponent implements OnInit{

  searchText=''
  @Output() serchdata= new EventEmitter<string>()
  @Output() filtertype= new EventEmitter<string>()
  @Output() sortdata= new EventEmitter<string>()

  notshow:boolean=true
  

  constructor(private route:ActivatedRoute){}

  // search

  ngOnInit(): void {

    if (this.route.snapshot.url.some(segment => ['servicelist', 'businesslist'].includes(segment.path))) {
      this.notshow = false;
    }
  }

  reload(){
    console.log(this.searchText+'serchvalue');
    
    this.serchdata.emit(this.searchText);
  }


  // sort

  sortedmorthan(){
    const value='morthan2000'
    this.sortdata.emit(value)
  }
  sortedlower(){
    const value='lowthan2000'
    this.sortdata.emit(value)
  }

  alldata(){
    const value='all'
    this.sortdata.emit(value)
  }


  // filter

  filtertyp2(){

    const value='2 weel'
    this.filtertype.emit(value);

  }
  filtertyp4(){

    const value='4 weel'
    this.filtertype.emit(value);

  }
  filtertyp6(){

    const value='6 weel'
    this.filtertype.emit(value);

  }

  filterall(){

    const value='all'
    this.filtertype.emit(value);

  }




  

}
