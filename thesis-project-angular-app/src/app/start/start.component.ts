import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Start } from '../start';
import { StartService } from '../start.service';
@Component({
  selector: 'app-start',
  standalone: true,
  imports: [ CommonModule, RouterModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  
  starts: Start | undefined;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public  startService: StartService) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.startService.getAll().subscribe((data: Start)=>{
      this.starts = data;
      console.log(this.starts);
    })  
  }
      
  
}

