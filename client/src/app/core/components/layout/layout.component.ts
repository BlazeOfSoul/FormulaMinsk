import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [HeaderComponent, FooterComponent, RouterOutlet],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    host: {
        class: 'flex flex-column min-h-full max-h-full',
    },
})
export class LayoutComponent {}
