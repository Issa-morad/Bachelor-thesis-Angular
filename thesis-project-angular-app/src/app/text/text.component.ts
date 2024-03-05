import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TextService } from '../text.service';
import { Text } from '../text';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  texts: Text[] = [];
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public textService: TextService) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.textService.getAll().subscribe((data: Text[])=>{
      this.texts = data;
      console.log(this.texts);
    })  
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.textService.delete(id).subscribe(res => {
         this.texts = this.texts.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
  

}
