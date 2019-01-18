## Instalação
Abra o terminal e navegue até a pasta do projeto.<br />

Execute o comando para instalar as dependencias necessarias<br />

```sh
npm i
```
## Configuração
(Este projeto foi desenvolvido usando NPM).<br />

Abra o arquivo "src/config" e altere a URL para a URL da API de Tarefas.<br />
Altere a porta (se preferir) em "webpack.config.js". A porta padrão esta configurada em 8080 por padrão

```sh
...
devServer: {
        port: 8080,
...
```

## Visualizar
Execute o seguinte comando:

```sh
npm run dev
```

No navegador, digite http://localhost:8080
(não esqueça de rodar o projeto APITarefas em uma porta diferente)