import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
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

  fecharMenu(): void {
    if (this.navToggle) {
      this.navToggle.nativeElement.checked = false;
    }
  }
}