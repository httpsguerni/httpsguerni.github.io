import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-contato',
  styleUrl: './contato.css',
  templateUrl: './contato.html',
})
export class Contato {
  info = {
    tag: "contact.send()",
    title: "Contato",
    subtitle: "Estou aberta a novas oportunidades e conversas sobre tecnologia, projetos ou colaborações. Se meu perfil combina com o que você procura, vamos trocar uma ideia! :)",
    ref: "© 2026 httpsguerni",
  };

  email = "saiury@vs.dev.br";
  github = "https://github.com/httpsguerni";
  linkedin = "https://www.linkedin.com/in/saiury/";

  // dados do formulário
  nome = "";
  emailRemetente = "";
  mensagem = "";

  enviar(): void {
    const assunto = encodeURIComponent(`Contato via portfólio — ${this.nome}`);
    const corpo = encodeURIComponent(
      `Nome: ${this.nome}\nEmail: ${this.emailRemetente}\n\n${this.mensagem}`
    );
    window.location.href = `mailto:${this.email}?subject=${assunto}&body=${corpo}`;
  }
}