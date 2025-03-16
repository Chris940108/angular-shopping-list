import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

      shoppingItem : string = "";
      shoppingList : string[]=['eggs', 'milk','bread']

      addItem(shoppingItem:string){
          this.shoppingItem = shoppingItem;
          this.shoppingList.push(shoppingItem)
          this.shoppingItem = "";
      }

      clearList(){
        this.shoppingList = [];
        this.shoppingItem = "";
      }

      deleteItem(shoppingItem: string){
        this.shoppingItem = shoppingItem;
        this.shoppingList.splice(this.shoppingList.indexOf(shoppingItem),1);
        this.shoppingItem = "";
      }

}
