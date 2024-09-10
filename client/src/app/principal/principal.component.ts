import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import Hashids from 'hashids';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  isMinimized = false;

  constructor() { }

  OnInit(){
    
  }
  
  toggleSidebar() {
    this.isMinimized = !this.isMinimized;
  }
  
  botonclick(){
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  }
}
