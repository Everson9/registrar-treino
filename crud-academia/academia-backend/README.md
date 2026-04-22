# academia-backend

API REST em Node.js + Express + Mongoose para o app Academia.

## Entidades

### Treino
| Campo        | Tipo   | Obrigatório |
|--------------|--------|-------------|
| titulo       | String | ✅           |
| descricao    | String | ✅           |
| realizadoEm  | Date   | ✅           |

**Rotas:** `GET /api/treinos` · `GET /api/treinos/:id` · `POST /api/treinos` · `PUT /api/treinos/:id` · `DELETE /api/treinos/:id`

---

### Exercício ← *nova entidade*
| Campo         | Tipo   | Obrigatório |
|---------------|--------|-------------|
| nome          | String | ✅           |
| grupoMuscular | String | ✅           |
| series        | Number | ✅           |
| repeticoes    | Number | ✅           |
| carga         | Number | —           |
| observacao    | String | —           |

**Rotas:** `GET /api/exercicios` · `GET /api/exercicios/:id` · `POST /api/exercicios` · `PUT /api/exercicios/:id` · `DELETE /api/exercicios/:id`

---

## Rodar localmente

```bash
npm install
cp .env.example .env   # preencha MONGO_URI com sua string do Atlas
npm run dev
```

---

## Deploy no Render

### 1. MongoDB Atlas
1. Acesse [mongodb.com/atlas](https://mongodb.com/atlas) → crie conta gratuita
2. Crie cluster **M0 Free**
3. **Database Access** → crie usuário e senha
4. **Network Access** → adicione `0.0.0.0/0`
5. **Connect** → copie a string `mongodb+srv://...`

### 2. Render
1. Push no GitHub
2. [render.com](https://render.com) → **New** → **Web Service**
3. Conecte o repositório
4. **Build Command:** `npm install` | **Start Command:** `npm start`
5. **Environment Variables:** `MONGO_URI` = string do Atlas
6. **Create Web Service** → anote a URL gerada

> O `render.yaml` já está configurado e é detectado automaticamente.

⚠️ No plano gratuito o serviço dorme após 15 min sem requisições. A primeira chamada pode demorar ~30s.
