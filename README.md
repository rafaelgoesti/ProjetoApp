
# 📱 Defesa Civil App

![Defesa Civil Logo](imagesReadme/logo.png) <!-- Substitua pelo link do logo se houver -->

### Acesso rápido

- [Front-end](/frontend/)
- [Back-end](/backend/)
- [Diagramas](/docs/diagrama/)

O **Defesa Civil App** é uma aplicação móvel desenvolvida em Flutter, projetada para facilitar e agilizar o processo de registro e gerenciamento de pessoas atendidas nos postos da Defesa Civil. Com foco em eficiência e segurança, o aplicativo oferece um registro digital confiável dos cidadãos, permitindo um acompanhamento contínuo e atualizado de todas as atividades realizadas.

## 📋 Funcionalidades

- **Cadastro de Pessoas:**
  - Registre rapidamente informações essenciais das pessoas atendidas, incluindo nome (opcional), idade, gênero, endereço e situação de vulnerabilidade.
  - Todos os dados são armazenados localmente em um banco de dados SQLite, garantindo o funcionamento do aplicativo mesmo sem conexão com a internet.
  
- **Listagem de Atendimentos:**
  - Visualize uma lista detalhada de todas as pessoas cadastradas, incluindo a data e hora do atendimento.
  - Opção de buscar e filtrar registros específicos para uma gestão mais eficiente.
  
- **Edição de Registros:**
  - Edite as informações de um cadastro existente a qualquer momento, mantendo os dados sempre atualizados.
  - Possibilidade de remover registros obsoletos ou duplicados diretamente do banco de dados.

- **Configurações Internas do Aplicativo:**
  - Acesse as configurações para personalizar o funcionamento do app, incluindo preferências de usuário e ajustes de comunicação com o servidor.
  - Configure a integração com um servidor externo para exportação de dados via API, facilitando a centralização e análise de informações.

- **Exportação de Dados:**
  - Exporte os registros armazenados localmente para um servidor remoto usando Node.js, que então armazena os dados em um banco de dados SQL.
  - Utilização de requisições HTTP seguras para garantir a integridade e privacidade dos dados durante a transferência.

- **Tela "Sobre o App":**
  - Informações sobre o aplicativo, incluindo versão, desenvolvedores e informações de contato para suporte.

## 🛠️ Tecnologias Utilizadas

- **Flutter:** SDK de código aberto para o desenvolvimento de aplicativos móveis nativos, proporcionando uma experiência de usuário fluida e intuitiva.
- **Dart:** Linguagem de programação que suporta o Flutter, facilitando a criação de uma interface de usuário responsiva e eficiente.
- **SQLite:** Banco de dados embutido utilizado para armazenamento local dos registros, permitindo acesso offline aos dados.
- **Node.js:** Plataforma utilizada para o desenvolvimento do backend, responsável por receber e processar os dados exportados do aplicativo.
- **API REST:** Interface de comunicação entre o aplicativo móvel e o servidor, utilizando métodos HTTP para gerenciamento de dados.

## 📱 Screenshots

<!-- Adicione capturas de tela do aplicativo aqui -->
| Tela Inicial | Cadastro de Pessoa | Listagem de Atendimentos |
| ------------ | ------------------ | ----------------------- |
| ![Tela Inicial](https://your-screenshot-url.com) | ![Cadastro](https://your-screenshot-url.com) | ![Listagem](https://your-screenshot-url.com) |

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/rafaelgoesti/ProjetoApp
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd defesa-civil-app
   ```

3. **Instale as dependências:**

   ```bash
   flutter pub get
   ```

4. **Configure o Backend (Node.js):**

   - Certifique-se de ter o Node.js instalado em sua máquina.
   - Navegue até o diretório `backend` e instale as dependências:

     ```bash
     npm install
     ```

   - Inicie o servidor Node.js:

     ```bash
     npm start
     ```

5. **Execute o aplicativo:**

   ```bash
   flutter run
   ```

## 📚 Estrutura do Projeto

```
lib/
│
├── components/         # Componentes reutilizáveis como botões, campos de texto, etc.
├── pages/              # Telas do aplicativo, como tela inicial, cadastro, listagem, etc.
├── services/           # Serviços responsáveis por operações como comunicação com o banco de dados e exportação de dados.
├── models/             # Modelos de dados utilizados no aplicativo, representando as entidades do sistema.
└── main.dart           # Arquivo principal que inicia a aplicação.
```

## 🌐 Integração com Servidor

- O servidor backend, desenvolvido em Node.js, é responsável por receber os dados exportados do aplicativo e armazená-los em um banco de dados SQL.
- A API REST implementada no servidor permite a comunicação segura entre o aplicativo móvel e o backend, suportando operações de CRUD (Create, Read, Update, Delete) nos dados armazenados.
- A documentação da API está disponível no diretório [Back-end](/backend/), onde você pode encontrar detalhes sobre os endpoints, formatos de requisição e resposta, e exemplos de uso.

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Se você deseja colaborar com melhorias, novas funcionalidades ou correções de bugs, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*. Antes de contribuir, por favor, leia o nosso [Guia de Contribuição](CONTRIBUTING.md) para garantir que você esteja alinhado com as práticas do projeto.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Contribuidores

#### Orientador

- [@Erminio Paixão]()

#### Desenvolvedores

- [@Marco Antonio](https://github.com/marco0antonio0)
- [@Rafael Góes Duarte]()
- [@Luan Levi Barbosa de Carvalho](https://github.com/Luan-carvalho-b)
- [@Alberto Monteiro Miranda Junior]()
- [@Andrey Ribeiro Guterres]()
- [@Marcus]()

#### Documentação

- [@Bianca da Silva Aragão]()
- [@Gustavo Dos Santos do Nascimento]()
- [@Davi Serrão Lima]()
- [@Gabriel Lobo]()
- [@Vinicius Matheus Ramos das Merces]()
- [@Rodrigo De Oliveira Yoshioka]()

#### Design

- [@Dan Cezar Ramos de Carvalho]()
- [@Arthur Gonçalves Lopes]()
- [@Maria Luiza Machado Rodrigues]()
- [@Luiz Eduardo Martins de Souza]()
- [@Alex Gonçalves da Silva Filho]()

## 🗂️ Diagramas

Os diagramas do projeto, incluindo o fluxo de dados e a estrutura do banco de dados, estão disponíveis na seção [Diagramas](/docs/diagrama/). Estes diagramas fornecem uma visão detalhada do funcionamento interno do aplicativo e são essenciais para entender a arquitetura geral do sistema.
