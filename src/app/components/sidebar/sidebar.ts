import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar implements OnInit, OnDestroy {
  @ViewChild('navToggle') navToggle!: ElementRef<HTMLInputElement>;

  info = {
    name: "httpsguerni",
    role: "Java/Android/Kotlin",
    inicio: "Início",
    skills: "Skills",
    formacao: "Formação",
    experiencia: "Experiência",
    projetos: "Projetos",
    contato: "Contato",
    github: "https://github.com/httpsguerni",
    linkedin: "https://www.linkedin.com/in/saiury/",
    gh: "GitHub",
    ld: "LinkedIn",
  };

  private routerSub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.fecharMenu());
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  fecharMenu(): void {
    if (this.navToggle) {
      this.navToggle.nativeElement.checked = false;
    }
  }
}