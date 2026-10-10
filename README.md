## Pipeline de CI/CD

Este projeto possui integração e entrega contínuas configuradas via **GitHub Actions**:
- **CI (Integração Contínua):** A cada push ou pull request na branch main, o pipeline instala as dependências, valida o código com o Linter, executa os testes automatizados e gera o build de produção
- **CD (Entrega Contínua):** Após a aprovação das etapas de CI, a aplicação é publicada automaticamente na Vercel

**Link do site:** [Clique Aqui](https://destinos-jet.vercel.app/)
