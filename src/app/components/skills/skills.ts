import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Categoria {
  nome: string;
  itens: string[];
}

@Component({
  imports: [CommonModule],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  info = {
    tag: "skills.java",
    stack: "Stack técnica",
    ref: "© 2026 httpsguerni",
  };

  categorias: Categoria[] = [
    {
      nome: "Backend",
      itens: ["Java 8+", "Spring Boot", "Spring MVC", "Spring Data JPA", "APIs RESTful", "Hibernate"]
    },
    {
      nome: "Banco de Dados",
      itens: ["PostgreSQL", "CRUD SQL", "JPA/ORM"]
    },
    {
      nome: "Testes e Qualidade",
      itens: ["JUnit", "Mockito", "TDD"]
    },
    {
      nome: "DevOps e Ferramentas",
      itens: ["Git", "GitHub", "Maven", "GitHub Actions (CI/CD)", "Jenkins", "Docker", "Linux"]
    },
    {
      nome: "Cloud",
      itens: ["Microsoft Azure (AZ-900)", "Google Cloud Fundamentals"]
    },
    {
      nome: "Mobile",
      itens: ["Kotlin", "Android", "Jetpack Compose", "MVVM", "Clean Architecture", "Mifare", "Sistemas de Pagamento", "Android Debugging"]
    },

    {
      nome: "Infraestrutura / Suporte",
      itens: ["Configuração de Computadores","Gerenciamento de E-mails (POP/Exchange)","GPO","Firewall","Sistemas ERP","On Premise","Monitoramento de Servidores"
      ]
    }
  ];
}