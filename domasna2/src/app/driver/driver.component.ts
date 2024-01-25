import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Driver } from '../module/klasa';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgSwitch } from '@angular/common';
import { NgSwitchCase } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [NgIf, NgClass, NgSwitch, NgSwitchCase, NgStyle, CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent implements OnInit{
  constructor() {}
  @Input()
  ime:String="";

  @Input()
  vozac:Driver = {} as Driver;

  @Input()
  reden:Number = {} as Number;

  @Output()
  shofer:Driver = {} as Driver;

  @Output()
  cuci = new EventEmitter<any>();

  klik(){
    var link=this.vozac.iconUrl;
    window.open(link, "_blank");
    console.log("Me klikna");
    this.cuci.emit(this.vozac);
  }

  ngOnInit() {

  }

  klasi(){
    return{'poz':this.vozac.category=="ADVANCED", 'course-card':true}
  }
  getColorForTeam(): string | undefined {
    if (this.vozac.team === 'Dragons') {
      return 'green';
    } else if (this.vozac.team === 'Power Rangers') {
      return 'blue';
    }
    return undefined;
  }

}