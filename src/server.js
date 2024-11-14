import app from "./app.js";

const PORT = process.env.PORT || 3000;



// Escutando a ROTA PADRÃO
app.listen(PORT, () => {
    console.log(`Servidor rodando nno endereço http://localhost:${PORT}`);
  })