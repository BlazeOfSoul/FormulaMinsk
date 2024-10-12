import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [ToolbarModule, MenubarModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    constructor(private router: Router) {}

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Главная',
                icon: 'pi pi-home',
                routerLink: '/home',
            },
            {
                label: 'Новости',
                icon: 'pi pi-bookmark',
            },
            {
                label: 'FAQ',
                icon: 'pi pi-star',
                routerLink: '/faq',
            },
            {
                label: 'Рандомайзер',
                icon: 'pi pi-sparkles',
                routerLink: '/random',
            },
            {
                label: 'Список гонок',
                icon: 'pi pi-list',
            },
        ];
    }

    goHome() {
        this.navigateTo('/home');
    }

    navigateTo(link: string) {
        this.router.navigate([link]);
    }
}
