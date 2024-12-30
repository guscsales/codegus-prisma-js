# Codegus Tasks

Código crido para o vídeo sobre Prisma ORM. Esse é um sistema simples (hardcoded) de gerenciamento de tarefas usando Prisma ORM.

## Instalação

```bash
# Clone o repositório
git clone https://github.com/guscsales/codegus-prisma-js.git

# Entre no diretório
cd codegus-prisma-js

# Instale as dependências com pnpm
pnpm install # (ou seu gerenciador de pacotes preferido)
```

## Configuração

Crie um arquivo `.env` com a seguinte variável:

```env
DATABASE_URL="postgresql://seu_usuario:sua_senha@localhost:5432/nome_do_banco"
```

Execute o comando para criar as tabelas no banco de dados:
```bash
pnpm prisma migrate deploy
```

## Comandos Disponíveis

### Criar uma Nova Tarefa
```bash
node create-task.js
```
Este comando cria uma nova tarefa no banco de dados com:
- Título
- Descrição
- Data de vencimento

### Criar um Marco para uma Tarefa
```bash
node create-task-milestone.js
```
Este comando cria um marco (milestone) para uma tarefa específica.
> ⚠️ Importante: Você precisa alterar o ID da tarefa no arquivo antes de executar

### Listar Todas as Tarefas
```bash
node list-tasks.js
```
Este comando exibe todas as tarefas cadastradas:
- Ordenadas por data de vencimento
- Mostra título e ID de cada tarefa
- Inclui os marcos associados a cada tarefa

## Estrutura dos Arquivos

- `create-task.js`: Script para criar tarefas novas
- `create-task-milestone.js`: Script para adicionar marcos às tarefas
- `list-tasks.js`: Script para visualizar todas as tarefas cadastradas
- `prisma/schema.prisma`: Define a estrutura do banco de dados
- `package.json`: Configurações e dependências do projeto

## Banco de Dados

O projeto utiliza duas tabelas principais:
- `Task`: Armazena as informações básicas das tarefas
- `TaskMilestone`: Armazena os marcos de cada tarefa
