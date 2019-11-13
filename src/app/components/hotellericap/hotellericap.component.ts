import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotellericap',
  templateUrl: './hotellericap.component.html',
  styleUrls: ['./hotellericap.component.css']
})
export class HotellericapComponent implements OnInit {
testcours1="";
testcours2="";
part="";
  constructor() { }

  ngOnInit() {
  }
  getCours(){
    this.testcours1="ok";
    this.testcours2="quit";
  }
  getP1(){
    this.part="ok1"
  }
  getP2(){
    this.part="ok2"
  }
  getP3(){
    this.part="ok3"
  }
  getP4(){
    this.part="ok4"
  }
  getP5(){
    this.part="ok5"
  }

}
