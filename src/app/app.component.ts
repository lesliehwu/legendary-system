import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title="Retro Barcode Generator";
    barcode=new Array(10);
    colors=['pink','lightpink','hotpink','deeppink','palevioletred','mediumvioletred','peachpuff','thistle'];
    rand(){
        return (Math.floor(Math.random()*7));
    }
}
