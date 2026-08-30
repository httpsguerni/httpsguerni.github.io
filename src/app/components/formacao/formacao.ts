import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Formacoes {
  tipo: string;
  curso: string;
  instituicao: string;
  periodoI: string;
  periodoF: string;
  descricao?: string;
}

interface Curso {
  nome: string;
  instituicao: string;
  ano: string;
}

@Component({
  imports: [CommonModule],
  selector: 'app-formacao',
  styleUrl: './formacao.css',
  templateUrl: './formacao.html',
})
export class Formacao {
  info = {
    tag: "education.log",
    education: "Formação",
    coursesTag: "courses.log",
    courses: "Cursos & Certificados",
    ref: "© 2026 httpsguerni",
    courseslink :"https://www.linkedin.com/in/saiury/details/certifications/",
    educationlink:"https://www.linkedin.com/in/saiury/details/education/"
  };

  formacoes: Formacoes[] = [
    { tipo: "Pós-Graduação", curso: "Engenharia de Software", instituicao: "Pontifícia Universidade Católica (PUC)", periodoI: "2026", periodoF: "atualmente", descricao: "lorem ipsum " },
    { tipo: "Técnólogo", curso: "Análise e Desenvolvimento de sistemas", instituicao: "Centro Universitário das Faculdades Metropolitanas Unidas (FMU)", periodoI: "2023", periodoF: "2025", descricao: "lorem ipsum" },
    { tipo: "Técnico", curso: "Análise e Desenvolvimento de sistemas", instituicao: "Escola Técnica Estadual (ETEC)", periodoI: "2019", periodoF: "2020", descricao: "lorem ipsum" },
  ];

  cursos: Curso[] = [
    { nome: "Python - Fundamentos", instituicao: "Senac", ano: "2026" },
    { nome: "Android Debugging", instituicao: "Embedded Labworks", ano: "2025" },
    { nome: "Testes Funcionais de aplicações Android com Appium", instituicao: "Udemy", ano: "2025" },
    { nome: "Desenvolvimento Android Completo - Java & Kotlin", instituicao: "Udemy", ano: "2025" },
    { nome: "English certificate  |  C1 Advanced English Level", instituicao: "International English Test", ano: "2025" },
    { nome: "Microsoft Certified: Azure Fundamentals", instituicao: "Microsoft", ano: "2024" },
    { nome: "Interfaces Front-End com Angular", instituicao: "Senac", ano: "2024" },
    { nome: "Google Cloud Computing Foundations (Cloud, Networking, Infrastructure, Data/ML/AI)", instituicao: "Google", ano: "2023" },
    { nome: "Google Cloud Computing Foundations: Cloud Computing Fundamentals", instituicao: "Google", ano: "2023" },
    { nome: "Google Cloud Computing Foundations: Infrastructure", instituicao: "Google", ano: "2023" },
    { nome: "Google Cloud Computing Foundations: Networking", instituicao: "Google", ano: "2023" },
    { nome: "Google Cloud Computing Foundations: Data, ML, and AI", instituicao: "Google", ano: "2023" },
    { nome: "Create and Manage Cloud Resources", instituicao: "Google", ano: "2023" },
    { nome: "Perform Foundational Infrastructure Tasks in Google Cloud", instituicao: "Google", ano: "2023" },
    { nome: "Build and Secure Networks in GCP", instituicao: "Google", ano: "2023" },
    { nome: "Uso de Flows de Rede para Análise de Tráfego e para Detecção de Ameaças de Segurança", instituicao: "NIC.br", ano: "2023" },
    { nome: "Visão Geral do Power BI", instituicao: "KA Solution", ano: "2023" },
    { nome: "Microsoft Azure Fundamentals (AZ-900)", instituicao: "KA Solution", ano: "2023" },
    { nome: "Computação em Nuvem", instituicao: "KA Solution", ano: "2023" },

   


    




    
  
  
  
  ];
}