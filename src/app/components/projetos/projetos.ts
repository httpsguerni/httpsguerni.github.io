import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Projeto {
  nome: string;
  descricao: string;
  stack: string;
  github: string;
  demo?: string; // opcional - só pra projetos web hospedados
}

@Component({
  imports: [CommonModule],
  selector: 'app-projetos',
  styleUrl: './projetos.css',
  templateUrl: './projetos.html',
})
export class Projetos {
  info = {
    tag: "projects.list()",
    title: "Projetos",
    ref: "© 2026 httpsguerni",
  };

  projetos: Projeto[] = [

     {
      nome: " API de Produtos Spring (2026)",
      descricao: "API RESTful para gerenciamento de produtos desenvolvida com Java e Spring Boot, seguindo boas práticas de desenvolvimento backend.",
      stack: " Spring Boot · Spring Data JPA · Hibernate · PostgreSQL",
      github: "https://github.com/httpsguerni/spring-products-api",
    },

    {
      nome: "Aplicação de CRUD SQLite (2026)",
      descricao: "Aplicativo de CRUD com o SqLite utilizando Compose",
      stack: "Kotlin · Compose · MVC",
      github: "https://github.com/httpsguerni/Crud",
    },

      {
      nome: "Angular (2024)",
      descricao: "Coletânea de desafios de design de telas por referência visual, utilizando o Angular e CSS.",
      stack: "Angular · HTML · CSS · TypeScript",
      github: "https://github.com/httpsguerni/Angular",

    },

    {
      nome: "Calculadora JS (2024)",
      descricao: "Calculadora simples, utilizando javaScript, HTML e CSS",
      stack: "JavaScript · HTML · CSS",
      github: "https://github.com/httpsguerni/CalculadoraJS",
      demo:"https://httpsguerni.github.io/CalculadoraJS/"

    },

    {
      nome: "Cifra ADFGVX (2022)",
      descricao: "Projeto de criptografia em Python desenvolvido para uso educacional. Inspirado na Cifra ADFGVX.",
      stack: "Python",
      github: "https://github.com/httpsguerni/cifra-adfgvx",

    },


 
  ];
}