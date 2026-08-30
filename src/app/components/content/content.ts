import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-content',
  styleUrl: './content.css',
  templateUrl: './content.html',
})
export class Content implements OnInit, OnDestroy {

  info = {
    prompt: "whoami",
    usr: "Saiury",
    role: "Desenvolvedora Java / Android / Kotlin",
    projetos: "Ver projetos",
    contato: "Contato",
    ref: "© 2026 httpsguerni",
    bio: "Desenvolvedora apaixonada por tecnologia, programando desde 2019. Ao longo do caminho, passei por Python, infraestrutura, Java e C#, testando diferentes áreas até me firmar no desenvolvimento Android. Hoje trabalho com Java e Kotlin, unindo lógica, performance e atenção aos detalhes para construir aplicativos bem feitos, não só que funcionam, mas que fazem sentido."
  };

  private roles: string[] = [
    "Desenvolvedora Java & Android",
    "Jetpack Compose",
    "JUnit",
    "Mockito",
    "Spring Boot",
    "Mifare",
    "EMV"
  ];

  displayedRole = "";
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timeoutId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.typeLoop();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
  }

  private typeLoop(): void {
    const currentRole = this.roles[this.roleIndex];

    if (this.deleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }

    this.displayedRole = currentRole.substring(0, this.charIndex);
    this.cdr.detectChanges(); 

    let delay = this.deleting ? 40 : 80;

    if (!this.deleting && this.charIndex === currentRole.length) {
      delay = 1500;
      this.deleting = true;
    } else if (this.deleting && this.charIndex === 0) {
      this.deleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      delay = 300;
    }

    this.timeoutId = setTimeout(() => this.typeLoop(), delay);
  }
}