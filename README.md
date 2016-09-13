# Overview

- Skeleton utilizando Angular para consumir websocket. 
- Este projeto utiliza como exemplo de end point a ser consumido o repositório https://github.com/lreisoliveira/ruby-on-rails-websocket 
 

## Instalação

#### Clone do projeto
    git clone https://github.com/lreisoliveira/angular-websocket.git

#### Configuração

Acessar

```
/src/app/config/config.js
```

- Substituir a url **localhost:3000/websocket** pela url que vai consumir         

```
websocket: '//localhost:3000/websocket'
```

- Substituir **'meucanal'** pelo nome do canal a ser consumido         
- Substituir **'meuevento'** pelo evento do canal a ser consumido         

```
    var websocket = {
        canal:      'meucanal',
        evento:     'meuevento'
    };
```

#### Testes

- Após baixar o projeto acessar a URL em algum navegador