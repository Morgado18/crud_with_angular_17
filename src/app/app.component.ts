import { CommonModule } from '@angular/common';
import { Element } from '@angular/compiler';
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
/* import {} */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Crud';

  studentList: Student[] = [];

  ngOnInit(): void {
    const localdata = localStorage.getItem('crud_students');
    if(localdata !=null ){
      this.studentList = JSON.parse(localdata)
    }
  }

  studentObject: Student = new Student();

 /*  @ViewChild('modal') modal : Element | undefined; */

  openModal(){
    this.studentObject = new Student();
    const modal = document.getElementById('modal'); /* modalCadStudent */
    if(modal != null){
      modal.style.display = 'block';
     }
  }

  closeModal(){
    const modal = document.getElementById('modal'); /* modalCadStudent */
    if(/* this. */modal != null){
      /* this. */modal/* .nativeElement */.style.display = 'none';
     }
  }

  onEdit(item: Student){
    this.openModal();
    this.studentObject = item;
  }

  saveStudent(){
    debugger;
    const isLocalPresent = localStorage.getItem('crud_students');
    if(isLocalPresent != null){
      const oldArray = JSON.parse(isLocalPresent)
      this.studentObject.id = oldArray.length + 1;
      oldArray.push(this.studentObject);
      this.studentList = oldArray;
      localStorage.setItem('crud_students',JSON.stringify(oldArray));
    }else{
      const newArr = [];
      newArr.push(this.studentObject);
      this.studentObject.id = 1;
      localStorage.setItem('crud_students',JSON.stringify(newArr));
    }
  }
}

export class Student {
  id:number;
  name: string;
  movileno: string;
  email: string;
  city: string;
  state: string;
  pincode: string;
  address: string;

  constructor(){
    this.id = 0;
    this.name = '';
    this.movileno = '';
    this.email = '';
    this.city = '';
    this.state = '';
    this.pincode = '';
    this.address = '';
  }
}
