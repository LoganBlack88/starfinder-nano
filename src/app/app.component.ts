import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    sidenavLinks = [
        {
            title: 'Equipment',
            route: '/equipment',
            children: [
                {
                    title: 'Computers',
                    route: 'equipment/computers'
                }
            ]
        }
    ];

}
