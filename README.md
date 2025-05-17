<div align="center">
  <br />
    <a href="https://youtu.be/0fYi8SGA20k?feature=shared" target="_blank">
      <img src="https://github.com/adrianhajdin/project_3D_developer_portfolio/assets/151519281/4722160a-8e<div align="center">
  <h1>Portfólio 3D - Júlia Mariano</h1>
  <img src="src/assets/logo.png" alt="Logo do Projeto" width="120" />
  <br />
  <strong>Portfólio interativo em React com animações 3D, certificações, objetivos e trajetória profissional.</strong>
</div>

---

## 📚 Sobre o Projeto

Este projeto é um portfólio pessoal desenvolvido em React, com animações 3D, exibição de certificações, objetivos profissionais, trajetória acadêmica e profissional, além de um formulário de contato integrado ao EmailJS.

---

## 🚀 Tecnologias Utilizadas

- **React.js**
- **Three.js** (via React Three Fiber)
- **Framer Motion**
- **EmailJS**
- **Vite**
- **Tailwind CSS**

---

## 📁 Estrutura de Pastas e Arquivos Importantes

- `src/components/` — Componentes principais do portfólio (Navbar, Hero, About, Journey, Tech, Works, Objetivos, Contact, etc)
- `src/constants/index.js` — Arrays de dados: tecnologias, jornadas, certificações, objetivos, etc.
- `src/assets/` — Imagens, ícones e logos usados no projeto.
- `src/hoc/SectionWrapper.jsx` — HOC para estilização e animação das seções.
- `.env` — Variáveis de ambiente para integração com o EmailJS.

---

## 📝 Variáveis de Ambiente

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```env
VITE_APP_EMAILJS_SERVICE_ID=seu_service_id_do_emailjs
VITE_APP_EMAILJS_TEMPLATE_ID=seu_template_id_do_emailjs
VITE_APP_EMAILJS_PUBLIC_KEY=sua_public_key_do_emailjs
```

Substitua pelos valores reais obtidos no painel do [EmailJS](https://www.emailjs.com/).

---

## 🔑 Principais Arrays e Objetos

### **Tecnologias (`technologies`)**
Lista de tecnologias que você domina, exibidas como ícones 3D.

### **Jornadas (`journeys`)**
Linha do tempo com sua trajetória acadêmica e profissional.

### **Certificações (`certifications`)**
Array de objetos com suas certificações, cada uma contendo:
- `name`: Nome da certificação
- `institution`: Instituição
- `date`: Data de conclusão
- `image`: Imagem do certificado

### **Objetivos (`objetivos`)**
Array de objetivos profissionais e pessoais, cada um com:
- `titulo`: Título do objetivo
- `descricao`: Descrição detalhada
- `icone`: Emoji ilustrativo

---

## 🖼️ Novos Arquivos/Componentes

- `src/components/Objetivos.jsx` — Seção de objetivos profissionais/pessoais.
- `src/components/Works.jsx` — Exibe suas certificações com opção de expandir.
- `src/components/Journey.jsx` — Linha do tempo da sua trajetória.
- `src/components/Contact.jsx` — Formulário de contato integrado ao EmailJS.
- `src/constants/index.js` — Todos os arrays de dados centralizados.

---

## 🛠️ Como Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   - Crie o arquivo `.env` na raiz do projeto e preencha conforme instruções acima.

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   - [http://localhost:5173](http://localhost:5173)

---

## 💡 Funcionalidades

- **Navbar fixa** com navegação por seções.
- **Hero 3D** com animação.
- **Sobre Mim** com apresentação pessoal.
- **Jornada** (linha do tempo) acadêmica e profissional.
- **Tecnologias** exibidas em esferas 3D.
- **Certificações** com botão para mostrar todas.
- **Objetivos** profissionais e pessoais.
- **Formulário de contato** integrado ao EmailJS.
- **Responsivo** para desktop e mobile.

---

## 📦 Observações

- O favicon do site é definido pelo arquivo `logo.png` em `src/assets/` e referenciado no `index.html`.
- As imagens dos certificados devem estar em `src/assets/certifications/`.
- Para o formulário funcionar, é obrigatório configurar corretamente o EmailJS e as variáveis de ambiente.

---

## ✨ Personalização

- Para adicionar/remover certificações, objetivos ou jornadas, edite o arquivo `src/constants/index.js`.
- Para trocar imagens, adicione na pasta `src/assets/` e ajuste os imports.

---

## 📝 Licença

Este projeto é de uso pessoal e educacional. Sinta-se à vontade para adaptar ao seu portfólio!

---

<div align="center">
  Feito com 💜 por Júlia Mariano
</div>