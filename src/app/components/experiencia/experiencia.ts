import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Cargo {
  periodo: string;
  cargo: string;
  descricao: string;
}

interface Experiencias {
  empresa: string;
  periodo: string; // período total na empresa
  cargos: Cargo[]; // as mudanças de cargo dentro da empresa
}


@Component({
  imports: [CommonModule],
  selector: 'app-experiencia',
  styleUrl: './experiencia.css',
  templateUrl: './experiencia.html',
})
export class Experiencia {
    info = {
    tag: "experience.log",
    exp: "Experiência",
    ref: "© 2026 httpsguerni",
  };

    experiencias: Experiencias[] = [
    {
      empresa: "Gertec Brasil LTDA",
      periodo: "dez/2022 – atual",
      cargos: [
        { periodo: "jan/2025 – atual", cargo: "Analista de Desenvolvimento de Software I", descricao: "Atuação com rotinas de automação no Jenkins para otimizar processos de integração e entrega contínua, bem como no desenvolvimento de bibliotecas integradas ao sistema operacional, contribuindo para maior estabilidade e eficiência das aplicações internas. Desenvolvimento de uma aplicação .msi responsável por processos de reset, instalação e atualização de terminais, garantindo maior confiabilidade nas operações de manutenção. Responsável por gerenciar e abrir requisitos de software, acompanhando entregas ao longo de todo o ciclo de desenvolvimento e assegurando alinhamento entre as áreas envolvidas, além de criar e manter rotinas de testes automatizados com JUnit e Appium, contribuindo para a qualidade contínua do produto." },
        { periodo: "abr/2024 – jan/2025", cargo: "Assistente de Desenvolvimento de Software", descricao: "Responsável pelo envio de versões de software para a equipe de QA e Testes, desenvolvendo aplicativos Android com Kotlin, Java e Jetpack Compose. Trabalhei com bibliotecas internas para otimizar o desenvolvimento, além de revisar e refatorar aplicações existentes para garantir qualidade e eficiência. Mantive contato com ODMs para alinhamento e desenvolvimento de software, e construí aplicações envolvendo Mifare e conformidade com TR31." },
        { periodo: "dez/2022 – abr/2024", cargo: "Assistente de TI (Infraestrutura)", descricao: "Responsável pelo gerenciamento da infraestrutura, monitorando o desempenho da rede e prestação de suporte aos usuários. Atuação na administração de servidores (DHCP, AD, LAN, DNS) e no monitoramento de redes WAN, LAN e servidores, com experiência em sistemas operacionais do Windows 7 ao 11 e Windows Server 2012/2016. Gerenciamento de e-mails corporativos via portais como Office, Azure e Locaweb, oferecendo suporte técnico e treinamento aos usuários, além de manutenção, configuração e montagem de computadores e suporte em telecomunicações. Acompanhamento do desempenho dos sistemas com ferramentas como Kuma e Grafana; Elaboração de relatórios técnicos e organização de fluxos de trabalho em Jira e Trello ; Execução de rotinas de backup em fita e contribuição na elaboração de políticas e procedimentos alinhados à ISO 27001." }
      ]
    },
    {
      empresa: "T3 Tecnologia LTDA",
      periodo: "ago/2021 – dez/2022",
      cargos: [
        { periodo: "nov/2022 – dez/2022", cargo: "Analista de Suporte Técnico", descricao: "Suporte a sistemas de TI (Azure, Microsoft 365, Active Directory, Microsoft Recover), formatação de máquinas, recuperação de arquivos, gerenciamento de políticas de grupo (GPO), backup, configuração e atualização de firewalls, monitoramento de servidores  e resolução de problemas em aplicações corporativas (ProJuris, LegalDesk, Areco)." },
        { periodo: "ago/2021 – nov/2022", cargo: "Técnica de Infraestrutura", descricao: "Assistência técnica em servidores on-premise (Azure, M365, Active Directory), manutenção de sistemas e resolução de problemas de software." }
      ]
    }
  ];
}






